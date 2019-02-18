/**
 * Connection status of a Ortho Remote peripheral
 * @internal
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