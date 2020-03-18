[Ortho Remote](../README.md) › [DeviceDiscoverySession](devicediscoverysession.md)

# Class: DeviceDiscoverySession

A single discovery session, keeping the vending manager monitor for Ortho Remote devices

Do not create a session manually, instead use DeviceDiscoveryManager to start discovery

## Hierarchy

* EventEmitter

* EventEmitter

  ↳ **DeviceDiscoverySession**

## Index

### Properties

* [deviceManager](devicediscoverysession.md#devicemanager)
* [defaultMaxListeners](devicediscoverysession.md#static-defaultmaxlisteners)

### Accessors

* [discoveredDevices](devicediscoverysession.md#discovereddevices)
* [discoveryState](devicediscoverysession.md#discoverystate)

### Methods

* [addListener](devicediscoverysession.md#addlistener)
* [emit](devicediscoverysession.md#emit)
* [eventNames](devicediscoverysession.md#eventnames)
* [getMaxListeners](devicediscoverysession.md#getmaxlisteners)
* [listenerCount](devicediscoverysession.md#listenercount)
* [listeners](devicediscoverysession.md#listeners)
* [off](devicediscoverysession.md#off)
* [on](devicediscoverysession.md#on)
* [once](devicediscoverysession.md#once)
* [prependListener](devicediscoverysession.md#prependlistener)
* [prependOnceListener](devicediscoverysession.md#prependoncelistener)
* [rawListeners](devicediscoverysession.md#rawlisteners)
* [removeAllListeners](devicediscoverysession.md#removealllisteners)
* [removeListener](devicediscoverysession.md#removelistener)
* [setMaxListeners](devicediscoverysession.md#setmaxlisteners)
* [stop](devicediscoverysession.md#stop)
* [waitForFirstDevice](devicediscoverysession.md#waitforfirstdevice)
* [listenerCount](devicediscoverysession.md#static-listenercount)

## Properties

###  deviceManager

• **deviceManager**: *[DeviceDiscoveryManager](devicediscoverymanager.md)*

Vending device manager

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

*Overrides void*

## Accessors

###  discoveredDevices

• **get discoveredDevices**(): *[OrthoRemote](orthoremote.md)[]*

All discovered devices by the device manager

**Returns:** *[OrthoRemote](orthoremote.md)[]*

___

###  discoveryState

• **get discoveryState**(): *[DeviceDiscoveryState](../enums/devicediscoverystate.md)*

Discovery state for the session

**Returns:** *[DeviceDiscoveryState](../enums/devicediscoverystate.md)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

▸ **listenerCount**(`type`: "device" | "timeout" | "done"): *number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "device" &#124; "timeout" &#124; "done" |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

▸ **listeners**(`eventName`: "device"): *[OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |

**Returns:** *[OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)[]*

▸ **listeners**(`eventName`: "timeout"): *[OnEventCallback](../interfaces/oneventcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |

**Returns:** *[OnEventCallback](../interfaces/oneventcallback.md)[]*

▸ **listeners**(`eventName`: "done"): *[OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |

**Returns:** *[OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **off**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **removeListener**(`eventName`: "device", `listener`: [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "device" |
`listener` | [OnDeviceDiscoveredCallback](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "timeout", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "timeout" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "done", `listener`: [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "done" |
`listener` | [OnDiscoveryDoneCallback](../interfaces/ondiscoverydonecallback.md) |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  stop

▸ **stop**(): *void*

Stop device discover for this session

**Returns:** *void*

___

###  waitForFirstDevice

▸ **waitForFirstDevice**(`autoStop`: boolean): *Promise‹[OrthoRemote](orthoremote.md)›*

Waits for a single (first) device or until time out, if specified when creating the session

**`throw`** `NuimoDeviceError` when timing out

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`autoStop` | boolean | true |

**Returns:** *Promise‹[OrthoRemote](orthoremote.md)›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

*Overrides void*

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
