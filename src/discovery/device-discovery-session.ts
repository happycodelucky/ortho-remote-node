import * as createDebugLogger from 'debug'

import { EventEmitter } from 'events'
import { setTimeout } from 'timers'

import { DeviceDiscoveryManager } from './device-discovery'
import { DeviceDiscoveryState } from './device-discovery-state'
import { OnDeviceDiscoveredCallback, OnDiscoveryDoneCallback, OnEventCallback } from '../callbacks/callbacks'
import { OrthoRemote } from '../ortho-remote'

// Create debug logger
const debug = createDebugLogger('orthoRemote/discovery')

/**
 * Options given when starting a new discovery session for Ortho Remote devices
 */
export interface DeviceDiscoverySessionOptions {
    /**
     * Timeout in milliseconds before auto-stopping discovery
     */
    timeoutMs?: number

    /**
     * List of know device IDs to discover
     * When specified only those devices white listed will be evented
     */
    deviceIds?: string[]
}

/**
 * A single discovery session, keeping the vending manager monitor for Ortho Remote devices
 *
 * Do not create a session manually, instead use DeviceDiscoveryManager to start discovery
 */
export class DeviceDiscoverySession extends EventEmitter {
    /**
     * Vending device manager
     */
    readonly deviceManager: DeviceDiscoveryManager

    /**
     * Options supplied when starting a new discovery
     */
    private readonly discoveryOptions: DeviceDiscoverySessionOptions

    /**
     * Timeout timer when a timeout was specified
     */
    private timeoutTimer?: NodeJS.Timer

    /**
     * Mutable internal discovery state
     */
    private sessionDiscoveryState: DeviceDiscoveryState

    /**
     * Internal map of discovered devices, and devices to ignore when seen subsequent times
     */
    private readonly sessionDiscoveredDevicesMap: Map<string, OrthoRemote> = new Map()

    /**
     * Promise for first call to waitForFirstDevice
     */
    private waitForDevicePromise?: Promise<OrthoRemote>

    /**
     * Callback for found device
     */
    private waitForDeviceResolveCallback?: (device: OrthoRemote) => void

    /**
     * Callback for timeouts or other rejections
     */
    private waitForDeviceRejectCallback?: (error: Error) => void

    /**
     * @param manager - vending discovery manager
     * @param [options] - session options
     */
    constructor(manager: DeviceDiscoveryManager, options?: DeviceDiscoverySessionOptions) {
        super()

        this.deviceManager = manager
        this.discoveryOptions = {...options}

        // Replicate the discovery state
        this.sessionDiscoveryState = manager.discoveryState

        // Initialize a timeout
        const timeout = this.discoveryOptions.timeoutMs
        if (timeout && timeout > 0) {
            if (options instanceof Object) {
                this.timeoutTimer = setTimeout(this.onSessionTimeout.bind(this), timeout)
            }
        }
    }

    //
    // Public properties
    //

    /**
     * Discovery state for the session
     */
    get discoveryState(): DeviceDiscoveryState {
        const managerState = this.deviceManager.discoveryState
        if (managerState === DeviceDiscoveryState.Discovering) {
            return this.sessionDiscoveryState
        }

        return managerState
    }

    /**
     * All discovered devices by the device manager
     */
    get discoveredDevices(): OrthoRemote[] {
        return [...this.sessionDiscoveredDevicesMap.values()]
    }

    //
    // Public functions
    //

    /**
     * Stop device discover for this session
     */
    stop() {
        this.stopDiscovery(false)
    }

    /**
     * Waits for a single (first) device or until time out, if specified when creating the session
     *
     * @param [autoStop=true] - causes the session to be stopped when a device is returned
     *
     * @throw `NuimoDeviceError` when timing out
     */
    async waitForFirstDevice(autoStop: boolean = true): Promise<OrthoRemote> {
        if (this.waitForDevicePromise) {
            return this.waitForDevicePromise
        }

        // Check if there is already a device, if so return it immediately
        if (this.sessionDiscoveredDevicesMap.size > 0) {
            const iterator = this.sessionDiscoveredDevicesMap.values().next()
            if (iterator.value) {
                this.waitForDevicePromise = Promise.resolve(iterator.value)

                return this.waitForDevicePromise
            }
        }

        // Need to wait for a device to be discovered
        const self = this
        const lisenters = new Map<string, (...args: any[]) => void>()

        /** Function called when a device is discovered */
        function onWaitDeviceDiscovered(device: OrthoRemote) {
            if (self.waitForDeviceResolveCallback) {
                self.waitForDeviceResolveCallback(device)

                // stop discovery if we should auto-stop
                if (autoStop) {
                    self.stopDiscovery(false)
                }
            }
            self.waitForDeviceResolveCallback = undefined
            self.waitForDeviceRejectCallback = undefined
            lisenters.forEach((value, key) => {
                self.removeListener(key as any, value)
            })
        }

        /** Function called when the session times */
        function onWaitTimeout() {
            if (self.waitForDeviceRejectCallback) {
                self.waitForDeviceRejectCallback(new Error('Timeout'))
            }
            self.waitForDeviceResolveCallback = undefined
            self.waitForDeviceRejectCallback = undefined
            lisenters.forEach((value, key) => {
                self.removeListener(key as any, value)
            })
        }

        // Listen for device/timeout events
        this.once('device', onWaitDeviceDiscovered)
        lisenters.set('device', onWaitDeviceDiscovered)
        this.once('timeout', onWaitTimeout)
        lisenters.set('timeout', onWaitTimeout)

        this.waitForDevicePromise = new Promise<OrthoRemote>((resolve, reject) => {
            self.waitForDeviceResolveCallback = resolve
            self.waitForDeviceRejectCallback = reject
        })

        return this.waitForDevicePromise
    }

    /**
     * Called by DeviceDiscoveryManager, not intented to be called directly
     * @internal
     */
    startDiscovery() {
        if (this.deviceManager.discoveryState !== DeviceDiscoveryState.Discovering) {
            return
        }

        this.sessionDiscoveryState = DeviceDiscoveryState.Discovering
    }

    /**
     * Stops discovery for this session
     * @internal
     *
     * @param timeout - `true` if stopping is because of a timeout
     */
    stopDiscovery(timeout: boolean) {
        if (this.discoveryState !== DeviceDiscoveryState.Ready) {
            this.sessionDiscoveryState = DeviceDiscoveryState.Ready
            this.deviceManager.stopDiscoverySession(this)

            if (this.timeoutTimer) {
                clearTimeout(this.timeoutTimer)
                this.timeoutTimer = undefined
            }

            // Emit timeout event
            this.emit('done', timeout)
        }
    }

    /**
     * Called from the vending manager when a device has been discovered
     * @internal
     *
     * @param device - Ortho Remote device
     * @param newDevice - true if the device has never been seen before
     */
    onDeviceDiscovered(device: OrthoRemote, newDevice: boolean) {
        // Can happen between async calls, a stop is issued whilst we are async processing handling of
        // discovered devices
        if (this.discoveryState !== DeviceDiscoveryState.Discovering) {
            return
        }

        // If the device has already been seen, ignore it
        if (this.sessionDiscoveredDevicesMap.has(device.id)) {
            return
        }
        this.sessionDiscoveredDevicesMap.set(device.id, device)

        const whitelisted = this.discoveryOptions.deviceIds
        if (!whitelisted || whitelisted.includes(device.id)) {
            this.emit('device', device, newDevice)
        }
    }

    //
    // Private functions
    //

    /**
     * Called when the session times out
     */
    private onSessionTimeout() {
        debug('Discovery session timed out')

        this.emit('timeout')

        this.timeoutTimer = undefined
        this.stopDiscovery(true)

        this.deviceManager.stopDiscoverySession(this)
    }
}

//
// Event declarations
//

export interface DeviceDiscoverySession extends EventEmitter {
    addListener(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    addListener(eventName: 'timeout', listener: OnEventCallback): this
    addListener(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    /** @internal */
    emit(eventName: 'device', device: OrthoRemote, newDevice: boolean): boolean
    /** @internal */
    emit(eventName: 'timeout'): boolean
    /** @internal */
    emit(eventName: 'done', timedOut: boolean): boolean

    listeners(eventName: 'device'): OnDeviceDiscoveredCallback[]
    listeners(eventName: 'timeout'): OnEventCallback[]
    listeners(eventName: 'done'): OnDiscoveryDoneCallback[]

    off(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    off(eventName: 'timeout', listener: OnEventCallback): this
    off(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    on(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    on(eventName: 'timeout', listener: OnEventCallback): this
    on(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    once(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    once(eventName: 'timeout', listener: OnEventCallback): this
    once(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    prependListener(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    prependListener(eventName: 'timeout', listener: OnEventCallback): this
    prependListener(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    prependOnceListener(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    prependOnceListener(eventName: 'timeout', listener: OnEventCallback): this
    prependOnceListener(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    removeListener(eventName: 'device', listener: OnDeviceDiscoveredCallback): this
    removeListener(eventName: 'timeout', listener: OnEventCallback): this
    removeListener(eventName: 'done', listener: OnDiscoveryDoneCallback): this

    listenerCount(type: 'device' | 'timeout' | 'done'): number
}