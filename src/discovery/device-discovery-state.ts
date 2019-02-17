/**
 * State of discovery for a DeviceDiscoverySession or DeviceDiscoveryManager
 */
export enum DeviceDiscoveryState {
    /**
     * Initial, no discovery has been performed
     */
    Initial              = 0x0,

    /**
     * Bluetooth is unavailable, such as the case when the radio is powered down
     */
    BluetoothUnavailable = 0x1,

    /**
     * Bluetooth is available and discover can start
     */
    Ready                = 0x10,

    /**
     * Actively discovering devices
     */
    Discovering          = 0x11,
}