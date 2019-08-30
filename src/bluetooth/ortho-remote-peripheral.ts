import * as check from 'check-types'
import * as createDebugLogger from 'debug'

import { Characteristic, Peripheral, Service } from 'noble'
import { EventEmitter } from 'events'

import { DEVICE_CONNECT_TIMEOUT_MS } from '../defaults'
import { BatteryStatusServiceCharacteristic } from './ortho-remote-gatt'
import { BleMidiServiceCharacteristic } from './ortho-remote-gatt'
import { MidiData, parseMidiDataPacket, toMidiDataPacket } from '../midi/midi-data'
import { OrthoRemoteCommunicationError, OrthoRemoteCommunicationErrorCode } from '../errors/ortho-remote-communication-error'
import { OrthoRemotePeriperalConnectedStatus } from './ortho-remote-connection-status'
import { PeripheralService } from './ortho-remote-gatt'
import { MidiMessage } from '../midi/midi-message';

// Create debug logger
const debug = createDebugLogger('orthoRemote/bluetooth')

// MIDI Values
const BUTTON_KEY = 0b00111100
const MODULATION_WHEEL_CONTROL = 0x1

// Number of steps in modulation control
const MODULATION_WHEEL_STEPS = 0x7F

// Teenage Engineering Manufacturer ID
// See https://www.midi.org/specifications-old/item/manufacturer-id-numbers
// const TEENAGE_ENGINEER_MID = [0x00, 0x20, 0x76]

/**
 * Handler function for characteristic notify BLE subscriptions
 */
interface OrthoRemoteNotifyHandler {
    (data: Buffer, characteristic: Characteristic): void
}

/**
 * Peripheral name of an Ortho Remote
 */
const OrthoRemotePeripheralName = 'ortho remote'

/**
 * A Ortho Remote bluetooth peripheral from Tenage Engineering
 * @internal
 */
export class OrthoRemotePeripheral extends EventEmitter {
    /**
     * Peripherial advertisement name
     */
    static advertisementName = OrthoRemotePeripheralName

    /**
     * Number of steps supported by the modulation wheel
     */
    static modulationSteps = MODULATION_WHEEL_STEPS

    /**
     * Associated bluetooth peripheral
     */
    private internalPeripheral: Peripheral

    /**
     * Pending connection promise to ensure multiple connects result in a single connection attempt
     */
    private pendingConnection?: Promise<boolean>

    /**
     * State of connection to a peripheral (mutable)
     */
    private internalConnectedState: OrthoRemotePeriperalConnectedStatus = OrthoRemotePeriperalConnectedStatus.Disconnected

    /**
     * Cached battery level
     */
    private internalBatteryLevel = 100

    /**
     * @param peripheral - bluetooth peripheral representing the device
     */
    constructor(peripheral: Peripheral) {
        super()

        if (peripheral.advertisement.localName !== OrthoRemotePeripheralName) {
            throw new TypeError('OrthoRemotePeripheral(peripheral) does not represent a Ortho Remote device')
        }
        this.internalPeripheral = peripheral
    }

    //
    // Public properties
    //

    /**
     * Indicates if the peripheral is connected and usable
     * @event 'connected'
     * @event 'disconnected'
     */
    get isConnected(): boolean {
        return this.connectedState === OrthoRemotePeriperalConnectedStatus.Connected
    }

    /**
     * Connection state of the peripheral
     * @event 'connected'
     * @event 'disconnected'
     */
    get connectedState(): OrthoRemotePeriperalConnectedStatus {
        return this.internalConnectedState
    }

    /**
     * Peripheral ID
     */
    get id(): string {
        return this.internalPeripheral.id
    }

    /**
     * RSSI of bluetooth connection to the peripheral, or undefined when not connected
     * @event 'rssi'
     */
    get rssi(): number | undefined {
        if (this.connectedState === OrthoRemotePeriperalConnectedStatus.Connected) {
            return this.internalPeripheral.rssi
        }

        return undefined
    }

    /**
     * Peripheral battery level
     * @event 'batteryLevel'
     */
    get batteryLevel(): number | undefined {
        if (this.connectedState === OrthoRemotePeriperalConnectedStatus.Connected) {
            return this.internalBatteryLevel
        }

        return undefined
    }

    //
    // Public functions
    //

    /**
     * Disconnects cleanly from the device
     * @emit 'disconnect'
     */
    disconnect() {
        this.internalPeripheral.removeAllListeners()
        this.internalPeripheral.disconnect()

        this.internalConnectedState = OrthoRemotePeriperalConnectedStatus.Disconnected
        this.emit('disconnect')
    }

    /**
     * Underlying bluetooth peripheral
     */
    get peripheral(): Peripheral {
        return this.internalPeripheral
    }

    /**
     * Sets a new peripheral to preprent the Ortho Remote device
     * This may attempt a reconnect if a connection was prior lost
     *
     * @param peripheral - bluetooth peripheral representing the device
     */
    set peripheral(peripheral: Peripheral) {
        if (peripheral.advertisement.localName !== OrthoRemotePeripheralName) {
            throw new TypeError('peripheral(peripheral) does not represent a Ortho Remote device')
        }

        if (peripheral !== this.internalPeripheral) {
            const wasConnected = this.isConnected

            const oldPeripheral = this.internalPeripheral
            if (oldPeripheral) {
                oldPeripheral.removeAllListeners()
                oldPeripheral.disconnect()
            }

            this.internalConnectedState = OrthoRemotePeriperalConnectedStatus.Disconnected
            this.internalPeripheral = oldPeripheral

            // If the device was connected, event the disconnect
            if (wasConnected) {
                this.emit('disconnect')
            }
        }
    }

    /**
     * Connects to the device, if not already connected
     *
     * @return `true` if the peripheral was connected to
     */
    async connect(): Promise<boolean> {
        // Check there still is an associated peripheral
        if (!this.internalPeripheral) {
            throw new OrthoRemoteCommunicationError(
                OrthoRemoteCommunicationErrorCode.NotAvailable, this.id)
        }

        return await this.connectToPeriperal()
    }

    /**
     * Sets the Ortho Remote modulation wheel value
     *
     * @param modulation - modulation value
     *
     * @return `true` if the value was written successfully
     */
    async setModulation(modulation: number): Promise<boolean> {
        if (!check.inRange(modulation, 0, MODULATION_WHEEL_STEPS)) {
            throw new TypeError(`setModulation(modulation) should be between 0-${MODULATION_WHEEL_STEPS}`)
        }

        this.connectionRequiredToProceed()

        const midiService = this.internalPeripheral.services.find(service => service.uuid === PeripheralService.BleMidi)
        if (midiService) {
            const midiCharacteristic = midiService.characteristics
                .find(characteristic => characteristic.uuid === BleMidiServiceCharacteristic.MidiDataIO)
            if (midiCharacteristic) {
                const midiData = parseMidiDataPacket(await new Promise<Buffer>((resolve, reject) => {
                    midiCharacteristic.read((err, data) => {
                        if (err) {
                            reject(new OrthoRemoteCommunicationError(
                                OrthoRemoteCommunicationErrorCode.Bluetooth, this.id, err))
                        }

                        resolve(data)

                        return
                    })
                }))[0]

                // tslint:disable
                const time = Date.now()
                await new Promise<boolean>((resolve, reject) => {
                    midiCharacteristic.write(toMidiDataPacket({
                        timestamp: midiData.timestamp + 1 + (Date.now() - time),
                        channel: 0,
                        message: MidiMessage.ControlChange,
                        data: new Uint8Array([ MODULATION_WHEEL_CONTROL, Math.floor(modulation * MODULATION_WHEEL_STEPS) ]),
                    }), true, (err) => {
                        if (!err) {
                            resolve(true)
                        } else {
                            reject(new OrthoRemoteCommunicationError(
                                OrthoRemoteCommunicationErrorCode.Bluetooth, this.id, err))
                        }
                    })
                })
            }
        }

        return false
    }

    //
    // Private functions
    //

    /**
     * Connects to a peripheral
     * @emit 'connect'
     */
    private async connectToPeriperal(): Promise<boolean> {
        debug(`Connecting to device ${this.id}`)

        if (this.connectedState !== OrthoRemotePeriperalConnectedStatus.Disconnected) {
            return this.pendingConnection!
        }

        const peripheral = this.peripheral
        if (!peripheral.connectable) {
            throw new OrthoRemoteCommunicationError(
                OrthoRemoteCommunicationErrorCode.NotConnectable, this.id)
        }

        // About to attempt connection
        this.internalConnectedState = OrthoRemotePeriperalConnectedStatus.Connecting

        this.pendingConnection = new Promise<Boolean>((resolve, reject) => {
            // Set up a connection timeout timer in case connection does not succeed
            let timeout = false;
            const timeoutTimer = setTimeout(() => {
                timeout = true

                // If the periperal is differnet, it was an aborted connection
                if (peripheral !== this.internalPeripheral) {
                    reject(new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Disconnected, this.id))

                    return
                }

                // Disconnected
                this.disconnect()
                this.internalConnectedState = OrthoRemotePeriperalConnectedStatus.Disconnected

                reject(new OrthoRemoteCommunicationError(
                    OrthoRemoteCommunicationErrorCode.ConnectionTimeout, this.id))
            }, DEVICE_CONNECT_TIMEOUT_MS * 1000)

            // When connected
            peripheral.once('connect', async () => {
                clearTimeout(timeoutTimer);
                if (timeout) {
                    return
                }

                // Make sure we are connecting to the right device
                if (peripheral !== this.internalPeripheral) {
                    reject(new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Disconnected, this.id))

                    return
                }

                // Now connected
                this.internalConnectedState = OrthoRemotePeriperalConnectedStatus.Connected

                // Now connected, listen for disconnects
                peripheral.on('disconnect', () => {
                    if (peripheral === this.internalPeripheral) {
                        debug(`Disconnected from device ${this.id}`)
                        this.disconnect()
                    }
                })
                peripheral.on('rssiUpdate', () => {
                    this.emit('rssi', this.rssi!)
                })

                // Begin service discovery...
                const services = await new Promise<Service[]>((resolveService, rejectServices) => {
                    peripheral.discoverServices([], async (err, discoveredServices) => {
                        if (err) {
                            rejectServices(new Error(err))

                            return
                        }
                        resolveService(discoveredServices)
                    })
                })
                debug(`Discovered ${services.length} services on device ${peripheral.uuid}`)

                // Make sure we are connecting to the right device
                if (peripheral !== this.internalPeripheral) {
                    reject(new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Disconnected, this.id))

                    return
                }

                // Characterisitic discovery...
                await Promise.all(services.map(async (service) => {
                    return new Promise<Characteristic[]>((resolveCharacteristic, rejectCharacteristic) => {
                        service.discoverCharacteristics([], (err, characteristics) => {
                            if (err) {
                                rejectCharacteristic(new Error(err))

                                return
                            }
                            resolveCharacteristic(characteristics)
                        })
                    })
                }))

                // Make sure we are connecting to the right device
                if (peripheral !== this.internalPeripheral) {
                    reject(new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Disconnected, this.id))

                    return;
                }

                // All the characteristics should be cached now
                const awaitBindings: Promise<boolean>[] = []
                services.forEach(service => {
                    switch (service.uuid) {
                        case PeripheralService.BatteryStatus:
                            awaitBindings.push(...this.bindToBatteryServiceCharacteristics(service, service.characteristics))
                            break
                        case PeripheralService.BleMidi:
                            awaitBindings.push(...this.bindToBleMidiServiceCharacteristics(service, service.characteristics))
                            break
                    }
                })
                await Promise.all(awaitBindings)

                // Make sure we are connecting to the right device
                if (peripheral !== this.internalPeripheral) {
                reject(new OrthoRemoteCommunicationError(
                    OrthoRemoteCommunicationErrorCode.Disconnected, this.id))

                    return;
                }

                resolve(true)
            });

            // Perform connection
            peripheral.connect((err) => {
                clearTimeout(timeoutTimer);
                if (timeout) {
                    return
                }

                if (err) {
                    reject(new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Bluetooth, this.id, err))
                }
            })
        }) as Promise<boolean>

        return this.pendingConnection.then((connected) => {
            if (connected) {
                this.emit('connect')
            }

            return connected
        })
    }

    /**
     * Throws an error if the device is not fully connected, ensuring code following this call can operated on
     * a connected device.
     */
    private connectionRequiredToProceed() {
        switch (this.connectedState) {
            case OrthoRemotePeriperalConnectedStatus.Connected:
                return
            case OrthoRemotePeriperalConnectedStatus.Connecting:
                throw new OrthoRemoteCommunicationError(OrthoRemoteCommunicationErrorCode.NotConnected, this.id)
            case OrthoRemotePeriperalConnectedStatus.Disconnected:
                throw new OrthoRemoteCommunicationError(OrthoRemoteCommunicationErrorCode.Disconnected, this.id)
        }
    }

    /**
     * Subscribes to a characteristic with a notify handler
     *
     * @param characteristic - characteristic to subscribe to
     * @param handler - handler to be called when the characteristic value changes
     *
     * @return Promise to capture when subscription has succeeded
     */
    private async bindCharacterNotifyHandler(characteristic: Characteristic, handler: OrthoRemoteNotifyHandler): Promise<boolean> {
        debug(`Subscribing to characteristic ${characteristic.name || characteristic.uuid}`)

        characteristic.on('data', (data: Buffer, isNotification: boolean) => {
            if (isNotification) {
                handler(data, characteristic)
            }
        })

        return new Promise((resolve, reject) => {
            characteristic.subscribe((error: string) => {
                if (error) {
                    debug(`Device ${this.id} error: ${error}`)

                    const deviceError = new OrthoRemoteCommunicationError(
                        OrthoRemoteCommunicationErrorCode.Bluetooth, this.id, error)
                    this.emit('error', deviceError)

                    reject(deviceError)
                } else {
                    resolve(true)
                }
            })
        })
    }

    /**
     * Subscribes to characteristics of the battery status service
     *
     * @param service - service the characteristic is a member of
     * @param characteristics - characteristics to subscribe to
     *
     * @return Promise to capture when all subscriptions have succeeded
     */
    private bindToBatteryServiceCharacteristics(service: Service, characteristics: Characteristic[]): Promise<boolean>[] {
        const awaitBindings: Promise<boolean>[] = []

        for (const characteristic of characteristics) {
            switch (characteristic.uuid) {
                case BatteryStatusServiceCharacteristic.BatteryLevel:
                    awaitBindings.push(this.bindCharacterNotifyHandler(characteristic, this.onBatteryLevelNotify.bind(this)))

                    // Read the battery level and add the read to the awaitingBindings so the battery level is set
                    // before the connection is established
                    awaitBindings.push(new Promise((resolve) => {
                        characteristic.read((error: string, data: Buffer) => {
                            if (error) {
                                debug(`Device ${this.id} error: ${error}`)

                                const deviceError = new OrthoRemoteCommunicationError(
                                    OrthoRemoteCommunicationErrorCode.Bluetooth, this.id, error)
                                this.emit('error', deviceError)

                                // Do not reject
                                return
                            }

                            this.onBatteryLevelNotify(data, characteristic)
                            resolve(true)
                        })
                    }))

                    break
                default:
                    debug(`Unknown characteristic ${characteristic.name || characteristic.uuid}`)
            }
        }

        return awaitBindings
    }

    /**
     * Subscribes to characteristics of the BLE-MIDI service
     *
     * @param service - service the characteristic is a member of
     * @param characteristics - characteristics to subscribe to
     *
     * @return Promise to capture when all subscriptions have succeeded
     */
    private bindToBleMidiServiceCharacteristics(service: Service, characteristics: Characteristic[]): Promise<boolean>[] {
        const awaitBindings: Promise<boolean>[] = []
        for (const characteristic of characteristics) {
            switch (characteristic.uuid) {
                case BleMidiServiceCharacteristic.MidiDataIO:
                    awaitBindings.push(this.bindCharacterNotifyHandler(characteristic, this.onMidiDataIONotify.bind(this)))
                default:
                    debug(`Unknown characteristic ${characteristic.name || characteristic.uuid}`)
            }
        }

        // There is nothing to wait for, all UI subscriptions can come later
        return awaitBindings
    }

    /**
     * Notify handler for BLE MIDI IO data
     *
     * @param data - MIDI data
     * @param characteristic - notification characteristic
     */
    private onMidiDataIONotify(data: Buffer, characteristic: Characteristic) {
        const midiPackets = parseMidiDataPacket(data)

        if (midiPackets.length > 0) {
            const midiData = midiPackets[0]
            this.emit('midi', midiData, data)

            if (midiData.message === MidiMessage.NoteOff) {
                const key = midiData.data[0] & 0x7F
                if (key === BUTTON_KEY) {
                    this.emit('note', key, false)
                }
            }
            if (midiData.message === MidiMessage.NoteOn) {
                const key = midiData.data[0] & 0x7F
                if (key === BUTTON_KEY) {
                    this.emit('note', key, true)
                }
            }
            if (midiData.message === MidiMessage.ControlChange) {
                const controller = midiData.data[0] & 0x7F
                if (controller === MODULATION_WHEEL_CONTROL) {
                    const value = midiData.data[1] & 0x7F
                    this.emit('modulation', value, OrthoRemotePeripheral.modulationSteps)
                }
            }

            debug(`Message: ${midiData.message.toString(2).padStart(8, '0')}`)
            debug(`Channel: ${midiData.channel.toString(2).padStart(8, '0')}`)
            debug(`Data 1: ${midiData.data[0].toString(2).padStart(8, '0')}`)
            debug(`Data 2: ${midiData.data[1].toString(2).padStart(8, '0')}`)
        }
    }

    /**
     * Notify handler for battery level changes
     *
     * @param data - characteristic data
     * @param characteristic - characteristic the data is for
     */
    private onBatteryLevelNotify(data: Buffer, characteristic: Characteristic) {
        this.internalBatteryLevel = data[0]
        this.emit('batteryLevel', data[0])
    }
}

//
// Event interface
//

/** @internal */
export interface OrthoRemotePeripheral extends EventEmitter {
    emit(eventName: 'batteryLevel' | 'rssi', data: number): boolean
    emit(eventName: 'note', key: number, on: boolean): boolean
    emit(eventName: 'connect' | 'disconnect'): boolean
    emit(eventName: 'error', error: Error): boolean
    emit(eventName: 'midi', data: MidiData, rawData: Buffer): boolean
    emit(eventName: 'modulation', value: number, rawPoints: number): boolean

    on(eventName: 'batteryLevel' | 'rssi', listener: (data: number) => void): this
    on(eventName: 'note', listener: (key: number, on: boolean) => void): this
    on(eventName: 'connect' | 'disconnect', listener: () => void): this
    on(eventName: 'error', listener: (error: Error) => void): this
    on(eventName: 'midi', listener: (data: MidiData, rawData: Buffer) => void): this
    on(eventName: 'modulation' , listener: (value: number, rawPoints: number) => void): this

    once(eventName: 'batteryLevel' | 'rssi', listener: (data: number) => void): this
    once(eventName: 'note', listener: (key: number, on: boolean) => void): this
    once(eventName: 'connect' | 'disconnect', listener: () => void): this
    once(eventName: 'error', listener: (error: Error) => void): this
    once(eventName: 'midi', listener: (data: MidiData, rawData: Buffer) => void): this
    once(eventName: 'modulation' , listener: (value: number, rawPoints: number) => void): this
}