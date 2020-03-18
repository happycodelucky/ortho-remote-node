[Ortho Remote](README.md)

# Ortho Remote

## Index

### Enumerations

* [DeviceDiscoveryState](enums/devicediscoverystate.md)
* [MidiMessage](enums/midimessage.md)
* [OrthoRemoteCommunicationErrorCode](enums/orthoremotecommunicationerrorcode.md)

### Classes

* [DeviceDiscoveryManager](classes/devicediscoverymanager.md)
* [DeviceDiscoverySession](classes/devicediscoverysession.md)
* [OrthoRemote](classes/orthoremote.md)
* [OrthoRemoteCommunicationError](classes/orthoremotecommunicationerror.md)
* [OrthoRemoteError](classes/orthoremoteerror.md)

### Interfaces

* [DeviceDiscoverySessionOptions](interfaces/devicediscoverysessionoptions.md)
* [MidiData](interfaces/mididata.md)
* [OnBatteryLeveCallback](interfaces/onbatterylevecallback.md)
* [OnDeviceDiscoveredCallback](interfaces/ondevicediscoveredcallback.md)
* [OnDiscoveryDoneCallback](interfaces/ondiscoverydonecallback.md)
* [OnErrorCallback](interfaces/onerrorcallback.md)
* [OnEventCallback](interfaces/oneventcallback.md)
* [OnMidiCallback](interfaces/onmidicallback.md)
* [OnRotateCallback](interfaces/onrotatecallback.md)
* [OnRssiCallback](interfaces/onrssicallback.md)
* [OrthoRemoteConfig](interfaces/orthoremoteconfig.md)
* [OrthoRemoteNotifyHandler](interfaces/orthoremotenotifyhandler.md)

### Variables

* [BUTTON_KEY](README.md#const-button_key)
* [DEFAULT_ROTATION](README.md#const-default_rotation)
* [LONG_CLICK_INTERVAL_MS](README.md#const-long_click_interval_ms)
* [MODULATION_WHEEL_CONTROL](README.md#const-modulation_wheel_control)
* [MODULATION_WHEEL_STEPS](README.md#const-modulation_wheel_steps)
* [MidiMessageBitMask](README.md#const-midimessagebitmask)
* [OrthoRemotePeripheralName](README.md#const-orthoremoteperipheralname)
* [debug](README.md#const-debug)
* [debugBluetooth](README.md#const-debugbluetooth)

## Variables

### `Const` BUTTON_KEY

• **BUTTON_KEY**: *60* = 60

___

### `Const` DEFAULT_ROTATION

• **DEFAULT_ROTATION**: *number* = Math.floor(OrthoRemotePeripheral.modulationSteps / 2)

___

### `Const` LONG_CLICK_INTERVAL_MS

• **LONG_CLICK_INTERVAL_MS**: *400* = 400

___

### `Const` MODULATION_WHEEL_CONTROL

• **MODULATION_WHEEL_CONTROL**: *1* = 1

___

### `Const` MODULATION_WHEEL_STEPS

• **MODULATION_WHEEL_STEPS**: *127* = 127

___

### `Const` MidiMessageBitMask

• **MidiMessageBitMask**: *number* = 0b1111 << 4

___

### `Const` OrthoRemotePeripheralName

• **OrthoRemotePeripheralName**: *"ortho remote"* = "ortho remote"

Peripheral name of an Ortho Remote

___

### `Const` debug

• **debug**: *Debugger* = createDebugLogger('orthoRemote/discovery')

___

### `Const` debugBluetooth

• **debugBluetooth**: *Debugger* = createDebugLogger('orthoRemote/bluetooth')
