/**
 * Connection status of a Ortho Remote peripheral
 */
export enum OrthoRemotePeriperalConnectedStatus {
    /**
     * Disconnected
     */
    Disconnected = 'disconnected',

    /**
     * Connecting and discovering services/characteristics, not yet usable
     */
    Connecting   = 'connecting',

    /**
     * Connected, all services/characteristic subscribed to
     */
    Connected    = 'connected',
}