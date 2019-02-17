/**
 * Services available on Ortho Remote peripherals
 * @internal
 */
export enum PeripheralService {
    BatteryStatus = '180f',
    BleMidi       = '03b80e5aede84b33a7516ce34ec4c700',
}

/**
 * Battery status service characteristics
 * @internal
 */
export enum BatteryStatusServiceCharacteristic {
    BatteryLevel  = '2a19',
}

/**
 * BLE-MIDI service characteristics
 * @internal
 */
export enum BleMidiServiceCharacteristic {
    MidiDataIO    = '7772e5db38684112a1a9f2669d106bf3',
}