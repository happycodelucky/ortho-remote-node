/**
 * MIDI data
 */
export interface MidiData {
    /**
     * Time in millisecond of event (from device. Max. 8191 ms)
     */
    timestamp: number

    /**
     * Status
     */
    status: number

    /**
     * Midi data to interpret
     */
    data: Buffer
}
