import { MidiData } from '../midi/midi-data'
import { OrthoRemote } from '../ortho-remote'
import { OrthoRemoteError } from '../errors/ortho-remote-error'

/**
 * Callback for events with no event arguments
 */
export interface OnEventCallback {
    (): void
}

/**
 * Callback for all `error` events
 */
export interface OnErrorCallback {
    /**
     * @param error - Evented error
     */
    (error: OrthoRemoteError): void
}

/**
 * Callback for 'batteryLevel' events
 */
export interface OnBatteryLeveCallback {
    /**
     * @param level - Battery level from 0-100
     */
    (level: number): void
}

/**
 * Callback for `midi` events
 */
export interface OnMidiCallback {
    /**
     * @param data - MIDI data
     * @param rawData - raw MIDI data see specs/rp52public.pdf
     */
    (data: MidiData, rawData: Buffer): void
}

/**
 * Callback for 'rssi' events
 */
export interface OnRssiCallback {
    /**
     * @param rssi - BT signal strenght in db
     */
    (rssi: number): void
}

/**
 * Callback for `rotate`` events
 */
export interface OnRotateCallback {
    /**
     * @param value - rotation based event value between 0.0 - 1.0
     * @param buttonPressed - indicates if the button is pressed whilst rotating dial
     */
    (value: number, buttonPressed: boolean): void
}

/**
 * Callback for velocity` events
 */
export interface OnVelocityCallback {
    /**
     * @param value - velocity based event value between -1.0 - 1.0
     * @param buttonPressed - indicates if the button is pressed whilst rotating dial
     */
    (value: number, buttonPressed: boolean): void
}

/**
 * Callback for device `discover` events
 */
export interface OnDeviceDiscoveredCallback {
    /**
     * @param device - Device discovered
     * @param newDevice - Indicates if this is a new device or one that has been discovered before, found prior to a disconnect
     */
    (device: OrthoRemote, newDevice: boolean): void
}

/**
 * Callback for all discovery session `done` events
 */
export interface OnDiscoveryDoneCallback {
    /**
     * @param timedOut - Indicates if a discovery session timed out
     */
    (timedOut: boolean): void
}