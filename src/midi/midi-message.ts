/**
 * MIDI message type
 */
export enum MidiMessage {
    NoteOff             = 0b1000 << 4,
    NoteOn              = 0b1001 << 4,
    PolyKeyPressure     = 0b1010 << 4,
    ControlChange       = 0b1011 << 4,
    ProgramChange       = 0b1100 << 4,
    ChannelPressure     = 0b1101 << 4,
    PitchBand           = 0b1110 << 4,
    SysEx               = 0b1111 << 4,
}

export const MidiMessageBitMask = 0b1111 << 4
