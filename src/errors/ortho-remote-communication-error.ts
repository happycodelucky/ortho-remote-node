import { OrthoRemoteError } from './ortho-remote-error'

/**
 * Error code for connection class errors for a device
 */
export enum OrthoRemoteCommunicationErrorCode {
    /**
     * Unknown communication error
     */
    Unknown             = 'unknown',
    /**
     * Device is no longer available and cannot be connected to
     */
    NotAvailable        = 'notAvailable',
    /**
     * Device cannot be connected to, it may be connected to another device
     */
    NotConnectable      = 'notConnectable',
    /**
     * Device is available but no connection has been established
     */
    NotConnected        = 'notConnected',
    /**
     * Connection attempt timed out
     */
    ConnectionTimeout   = 'timeout',
    /**
     * Device has been disconnected
     */
    Disconnected        = 'disconnected',
    /**
     * Bluetooth communication related error
     */
    Bluetooth           = 'bluetooth',
}

/**
 * Class of error related to device communication errors with a known device
 */
export class OrthoRemoteCommunicationError extends OrthoRemoteError {
    /**
     * Device error code
     */
    readonly code: OrthoRemoteCommunicationErrorCode

    /**
     * Device identifier
     */
    readonly id: string

    /**
     * @internal
     * @param code - connection error code
     * @param id - device ID for the connection error
     */
    constructor(code: OrthoRemoteCommunicationErrorCode, id: string, message?: string) {
        super(deviceCommunicatioErrorMessage(code, id, message), 'OrthoRemoteCommunicationErrorCode')

        this.code = code
        this.id = id
    }
}

//
// Private functions
//

/**
 * Helper function for generating connection error messages
 * @internal
 *
 * @param code - connection error code
 * @param id - device ID for the connection error
 * @param message - optional error mesage
 */
function deviceCommunicatioErrorMessage(code: OrthoRemoteCommunicationErrorCode, id: string, message?: string) {
    switch (code) {
        case OrthoRemoteCommunicationErrorCode.Bluetooth:
            if (message) {
                return `Bluetooth error on device ${id}: ${message}`
            }

            return `Unknown bluetooth error on device ${id}`
        case OrthoRemoteCommunicationErrorCode.ConnectionTimeout:
            if (message) {
                return `Connection timeout on device ${id}: ${message}`
            }

            return `Connection timeout on device ${id}`
        case OrthoRemoteCommunicationErrorCode.Disconnected:
            return `Device ${id} disconnected`
        case OrthoRemoteCommunicationErrorCode.NotAvailable:
            return `Device ${id} is not available`
        case OrthoRemoteCommunicationErrorCode.NotConnectable:
            return `Device ${id} cannot be connected to`
        case OrthoRemoteCommunicationErrorCode.NotConnected:
            return `Communication with device ${id} is not yet ready, needs to be connected to`
        case OrthoRemoteCommunicationErrorCode.Unknown:
            return `Unknown error on device ${id}`
    }
}