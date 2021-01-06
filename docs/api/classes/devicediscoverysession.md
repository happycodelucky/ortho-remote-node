[Ortho Remote - v0.2.1](../README.md) / DeviceDiscoverySession

# Class: DeviceDiscoverySession

A single discovery session, keeping the vending manager monitor for Ortho Remote devices

Do not create a session manually, instead use DeviceDiscoveryManager to start discovery

## Hierarchy

* *EventEmitter*

  ↳ **DeviceDiscoverySession**

## Index

### Constructors

* [constructor](devicediscoverysession.md#constructor)

### Properties

* [deviceManager](devicediscoverysession.md#devicemanager)

### Accessors

* [discoveredDevices](devicediscoverysession.md#discovereddevices)
* [discoveryState](devicediscoverysession.md#discoverystate)

### Methods

* [addListener](devicediscoverysession.md#addlistener)
* [listenerCount](devicediscoverysession.md#listenercount)
* [listeners](devicediscoverysession.md#listeners)
* [off](devicediscoverysession.md#off)
* [on](devicediscoverysession.md#on)
* [once](devicediscoverysession.md#once)
* [prependListener](devicediscoverysession.md#prependlistener)
* [prependOnceListener](devicediscoverysession.md#prependoncelistener)
* [removeListener](devicediscoverysession.md#removelistener)
* [stop](devicediscoverysession.md#stop)
* [waitForFirstDevice](devicediscoverysession.md#waitforfirstdevice)

## Constructors

### constructor

• **constructor**: 

## Properties

### deviceManager

• `Readonly` **deviceManager**: [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Vending device manager

## Accessors

### discoveredDevices

• **discoveredDevices**(): [*OrthoRemote*](orthoremote.md)[]

All discovered devices by the device manager

**Returns:** [*OrthoRemote*](orthoremote.md)[]

___

### discoveryState

• **discoveryState**(): [*DeviceDiscoveryState*](../enums/devicediscoverystate.md)

Discovery state for the session

**Returns:** [*DeviceDiscoveryState*](../enums/devicediscoverystate.md)

## Methods

### addListener

▸ **addListener**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **addListener**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **addListener**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### listenerCount

▸ **listenerCount**(`type`: *device* \| *timeout* \| *done*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`type` | *device* \| *timeout* \| *done* |

**Returns:** *number*

___

### listeners

▸ **listeners**(`eventName`: *device*): [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)[]

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |

**Returns:** [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)[]

▸ **listeners**(`eventName`: *timeout*): [*OnEventCallback*](../interfaces/oneventcallback.md)[]

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |

**Returns:** [*OnEventCallback*](../interfaces/oneventcallback.md)[]

▸ **listeners**(`eventName`: *done*): [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)[]

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |

**Returns:** [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)[]

___

### off

▸ **off**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **off**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **off**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### on

▸ **on**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **on**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **on**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### once

▸ **once**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **once**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **once**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### prependListener

▸ **prependListener**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **prependListener**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **prependListener**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **prependOnceListener**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **prependOnceListener**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### removeListener

▸ **removeListener**(`eventName`: *device*, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *device* |
`listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **removeListener**(`eventName`: *timeout*, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *timeout* |
`listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

▸ **removeListener**(`eventName`: *done*, `listener`: [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *done* |
`listener` | [*OnDiscoveryDoneCallback*](../interfaces/ondiscoverydonecallback.md) |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

___

### stop

▸ **stop**(): *void*

Stop device discover for this session

**Returns:** *void*

___

### waitForFirstDevice

▸ **waitForFirstDevice**(`autoStop?`: *boolean*): *Promise*<[*OrthoRemote*](orthoremote.md)\>

Waits for a single (first) device or until time out, if specified when creating the session

**`throw`** `NuimoDeviceError` when timing out

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`autoStop` | *boolean* | true |

**Returns:** *Promise*<[*OrthoRemote*](orthoremote.md)\>
