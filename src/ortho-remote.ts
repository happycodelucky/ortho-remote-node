import { EventEmitter } from 'events'

import { MidiData } from './midi/midi-data'
import {
    OnBatteryLeveCallback,
    OnErrorCallback,
    OnEventCallback,
    OnMidiCallback,
    OnRotateCallback,
    OnRssiCallback,
    OnVelocityCallback,
} from './callbacks/callbacks'
import { OrthoRemoteError } from './errors'
import { OrthoRemotePeripheral } from './bluetooth/ortho-remote-peripheral'

// Interval to be classified as long-click
const LONG_CLICK_INTERVAL_MS = 400
// Default rotation on connect (always center)
const DEFAULT_ROTATION = Math.floor(OrthoRemotePeripheral.rotationPoints / 2)

/**
 * Configuration and behavior options for `OrthoRemote`
 */
export interface OrthoRemoteConfig {
    /**
     * Normalized Ortho Remote rotation event values between 0.0 - 0.1
     * Set to `false` to preserve raw values from Ortho Remote
     *
     * Default true
     */
    normalizeData?: boolean

    /**
     * Adds a delay in events to eliminate `click` and `rotate` firing in close proximity.
     * Due to the nature of the device and human clumsiness, attempting a click can rotate the dial when performing the action
     *
     * Default true
     */
    // TODO: Add support for delayed
    // delayEvents?: boolean
}

/**
 * A Ortho Remote device client for interacting with BT Ortho Remote peripheral from Teenage Engineering
 */
export class OrthoRemote extends EventEmitter {
    /**
     * Associated peripheral
     * @internal
     */
    orthoRemotePeripheral: OrthoRemotePeripheral

    /**
     * Ortho Remote configuration
     */
    configuration: OrthoRemoteConfig = {
        // delayEvents: true,
        normalizeData: true,
    }

    /**
     * Rotation of the dial
     * @internal
     */
    private internalRotation: number = DEFAULT_ROTATION

    /**
     * Time of button pressed
     * @internal
     */
    private buttonPressedTimestamp?: number

    /**
     * @internal
     * @param peripheral - bluetooth peripheral representing the Ortho Remote
     */
    constructor(peripheral: OrthoRemotePeripheral) {
        super()

        this.orthoRemotePeripheral = peripheral
        this.bindToPeripheral(this.orthoRemotePeripheral)
    }

    //
    // Public properties
    //

    /**
     * Indicates if there is a connection established to the Ortho Remote device
     */
    get isConnected(): boolean {
        return this.orthoRemotePeripheral.isConnected
    }

    /**
     * Ortho Remote device identifier
     */
    get id(): string {
        return this.orthoRemotePeripheral.id
    }

    /**
     * Ortho Remote device battery level
     * @event batteryLevel
     */
    get batteryLevel(): number | undefined {
        return this.orthoRemotePeripheral.batteryLevel
    }

    /**
     * Ortho Remote device RSSI
     * @event rssi
     */
    get rssi(): number | undefined {
        return this.orthoRemotePeripheral.rssi
    }

    /**
     * Ortho Remote rotation value, can be between 0.0 - 1.0 (normalized) or 0 - 127 (raw)
     * @event rotation
     */
    get rotation(): number {
        const normalize = this.configuration.normalizeData
        if (normalize !== false) {
            return (this.internalRotation / OrthoRemotePeripheral.rotationPoints)
        }

        return this.internalRotation
    }

    /**
     * Ortho Remote rotation value, can be between -1.0 - 1.0 (normalized) -64 - 64 (raw)
     * @event velocity
     */
    get velocity(): number {
        const center = OrthoRemotePeripheral.rotationPoints / 2
        const velocity = this.internalRotation - center

        const normalize = this.configuration.normalizeData
        if (normalize !== false) {
            return velocity / center
        }

        return velocity < 0 ? Math.floor(velocity) : Math.round(velocity)
    }

    //
    // Public functions
    //

    /**
     * Connects to the device, if not already connected
     * @event connect
     *
     * @param [config=] - `OrthoRemote` configuration
     *
     * @return a Promise with `true` to indicate a successful connection
     */
    async connect(config?: OrthoRemoteConfig): Promise<boolean> {
        if (config) {
            this.configuration = { ...this.configuration, ...config }
        }

        const connected = await this.orthoRemotePeripheral.connect()
        if (connected) {
            this.emit('connect')
        }

        return connected
    }

    /**
     * Disconnects cleanly from the device
     *
     * @event disconnect
     */
    disconnect() {
        this.orthoRemotePeripheral.disconnect()
    }

    //
    // Private functions
    //

    /**
     * Binds to a `OrthoRemotePeripheral` device's events
     * @internal
     *
     * @param peripheral - peripheral device to bind events to
     */
    private bindToPeripheral(peripheral: OrthoRemotePeripheral) {
        peripheral.on('disconnect', this.onDisconnect.bind(this))

        // Standard BLE
        peripheral.on('batteryLevel', () => this.emit('batteryLevel', this.batteryLevel!))
        peripheral.on('rssi', () => this.emit('rssi', this.rssi!))

        // Interactions
        peripheral.on('button', (pressed: boolean) => {
            if (pressed) {
                this.onButtonPressed()
            } else {
                this.onButtonReleased()
            }
        })
        peripheral.on('midi', (data, rawData) => this.emit('midi', data, rawData))
        peripheral.on('rotate', this.onRotate.bind(this))

        // Errors
        peripheral.on('error', this.onError.bind(this))
    }

    /** @internal */
    private onButtonPressed() {
        this.buttonPressedTimestamp = Date.now()
        this.emit('buttonPressed')
    }

    /** @internal */
    private onButtonReleased() {
        const startTimestamp = this.buttonPressedTimestamp

        this.emit('buttonReleased')

        if (startTimestamp !== undefined) {
            this.buttonPressedTimestamp = undefined

            const longClick = (Date.now() - startTimestamp) >= LONG_CLICK_INTERVAL_MS
            this.emit(longClick ? 'longClick' : 'click')
        }
    }

    /** @internal */
    private onDisconnect() {
        this.internalRotation = DEFAULT_ROTATION
        this.buttonPressedTimestamp = undefined

        this.emit('disconnect')
    }

    /** @internal */
    private onError(error: Error) {
        if (this.listenerCount('error') > 0) {
            this.emit('error', error)
        }
    }

    /** @internal */
    private onRotate(normalized: number, raw: number) {
        this.internalRotation = normalized

        const buttonPressed = !!this.buttonPressedTimestamp

        this.emit('velocity', this.velocity, buttonPressed)
        this.emit('rotate', this.rotation, buttonPressed)
    }
}

//
// Event declarations
//

export declare interface OrthoRemote {
    addListener(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    addListener(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    addListener(eventName: 'error', listener: OnErrorCallback): this
    addListener(eventName: 'midi', listener: OnMidiCallback): this
    addListener(eventName: 'rotate', listener: OnRotateCallback): this
    addListener(eventName: 'rssi', listener: OnRssiCallback): this
    addListener(eventName: 'velocity', listener: OnVelocityCallback): this

    /** @internal */
    emit(eventName: 'batteryLevel' | 'rssi', value: number): boolean
    /** @internal */
    emit(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick'): boolean
    /** @internal */
    emit(eventName: 'error', error: OrthoRemoteError): boolean
    /** @internal */
    emit(eventName: 'midi', data: MidiData, rawData: Buffer): boolean
    /** @internal */
    emit(eventName: 'rotate' | 'velocity', value: number, buttonPressed: boolean): boolean

    listeners(eventName: 'batteryLevel'): OnBatteryLeveCallback[]
    listeners(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick'): OnEventCallback[]
    listeners(eventName: 'error'): OnErrorCallback[]
    listeners(eventName: 'midi'): OnMidiCallback[]
    listeners(eventName: 'rotate'): OnRotateCallback[]
    listeners(eventName: 'rssi'): OnRssiCallback[]
    listeners(eventName: 'velocity'): OnVelocityCallback[]

    off(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    off(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    off(eventName: 'error', listener: OnErrorCallback): this
    off(eventName: 'midi', listener: OnMidiCallback): this
    off(eventName: 'rotate', listener: OnRotateCallback): this
    off(eventName: 'rssi', listener: OnRssiCallback): this
    off(eventName: 'velocity', listener: OnVelocityCallback): this

    on(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    on(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    on(eventName: 'error', listener: OnErrorCallback): this
    on(eventName: 'midi', listener: OnMidiCallback): this
    on(eventName: 'rotate', listener: OnRotateCallback): this
    on(eventName: 'rssi', listener: OnRssiCallback): this
    on(eventName: 'velocity', listener: OnVelocityCallback): this

    once(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    once(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    once(eventName: 'error', listener: OnErrorCallback): this
    once(eventName: 'midi', listener: OnMidiCallback): this
    once(eventName: 'rotate', listener: OnRotateCallback): this
    once(eventName: 'rssi', listener: OnRssiCallback): this
    once(eventName: 'velocity', listener: OnVelocityCallback): this

    prependListener(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    prependListener(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    prependListener(eventName: 'error', listener: OnErrorCallback): this
    prependListener(eventName: 'midi', listener: OnMidiCallback): this
    prependListener(eventName: 'rotate', listener: OnRotateCallback): this
    prependListener(eventName: 'rssi', listener: OnRssiCallback): this
    prependListener(eventName: 'velocity', listener: OnVelocityCallback): this

    prependOnceListener(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    prependOnceListener(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    prependOnceListener(eventName: 'error', listener: OnErrorCallback): this
    prependOnceListener(eventName: 'midi', listener: OnMidiCallback): this
    prependOnceListener(eventName: 'rotate', listener: OnRotateCallback): this
    prependOnceListener(eventName: 'rssi', listener: OnRssiCallback): this
    prependOnceListener(eventName: 'velocity', listener: OnVelocityCallback): this

    removeListener(eventName: 'batteryLevel', listener: OnBatteryLeveCallback): this
    removeListener(eventName: 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'longClick',
        listener: OnEventCallback): this
    removeListener(eventName: 'error', listener: OnErrorCallback): this
    removeListener(eventName: 'midi', listener: OnMidiCallback): this
    removeListener(eventName: 'rotate', listener: OnRotateCallback): this
    removeListener(eventName: 'rssi', listener: OnRssiCallback): this
    removeListener(eventName: 'velocity', listener: OnVelocityCallback): this

    listenerCount(type: 'batteryLevel' | 'buttonPressed' | 'buttonReleased' | 'click' | 'connect' | 'disconnect' | 'error' |
        'longClick' | 'midi' | 'rotate' | 'rssi' | 'velocity'): number
}