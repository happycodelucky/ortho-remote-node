[Ortho Remote](../README.md) › [DeviceDiscoveryManager](devicediscoverymanager.md)

# Class: DeviceDiscoveryManager

A device manager is the main entry for connecting to Ortho Remote devices. It offers device discovery and

## Hierarchy

* EventEmitter

* EventEmitter

  ↳ **DeviceDiscoveryManager**

## Index

### Properties

* [defaultMaxListeners](devicediscoverymanager.md#static-defaultmaxlisteners)

### Accessors

* [discoveredDevices](devicediscoverymanager.md#discovereddevices)
* [discoveryState](devicediscoverymanager.md#discoverystate)
* [defaultManager](devicediscoverymanager.md#static-defaultmanager)

### Methods

* [addListener](devicediscoverymanager.md#addlistener)
* [emit](devicediscoverymanager.md#emit)
* [eventNames](devicediscoverymanager.md#eventnames)
* [getMaxListeners](devicediscoverymanager.md#getmaxlisteners)
* [listenerCount](devicediscoverymanager.md#listenercount)
* [listeners](devicediscoverymanager.md#listeners)
* [off](devicediscoverymanager.md#off)
* [on](devicediscoverymanager.md#on)
* [once](devicediscoverymanager.md#once)
* [prependListener](devicediscoverymanager.md#prependlistener)
* [prependOnceListener](devicediscoverymanager.md#prependoncelistener)
* [rawListeners](devicediscoverymanager.md#rawlisteners)
* [removeAllListeners](devicediscoverymanager.md#removealllisteners)
* [removeListener](devicediscoverymanager.md#removelistener)
* [setMaxListeners](devicediscoverymanager.md#setmaxlisteners)
* [startDiscoverySession](devicediscoverymanager.md#startdiscoverysession)
* [stopDiscovery](devicediscoverymanager.md#stopdiscovery)
* [stopDiscoverySession](devicediscoverymanager.md#stopdiscoverysession)
* [listenerCount](devicediscoverymanager.md#static-listenercount)

## Properties

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

Active discovery state

**Returns:** *[DeviceDiscoveryState](../enums/devicediscoverystate.md)*

___

### `Static` defaultManager

• **get defaultManager**(): *[DeviceDiscoveryManager](devicediscoverymanager.md)*

Default device discovery manager to manage discovery of one or more Ortho Remote devices

**Returns:** *[DeviceDiscoveryManager](devicediscoverymanager.md)*

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

▸ **addListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **listenerCount**(`type`: "device" | "error" | "started" | "stopped"): *number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "device" &#124; "error" &#124; "started" &#124; "stopped" |

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

▸ **listeners**(`eventName`: "error"): *[OnErrorCallback](../interfaces/onerrorcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |

**Returns:** *[OnErrorCallback](../interfaces/onerrorcallback.md)[]*

▸ **listeners**(`eventName`: "started" | "stopped"): *[OnEventCallback](../interfaces/oneventcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |

**Returns:** *[OnEventCallback](../interfaces/oneventcallback.md)[]*

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

▸ **off**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **on**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **once**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **prependListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **prependOnceListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

▸ **removeListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "started" | "stopped", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "started" &#124; "stopped" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

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

###  startDiscoverySession

▸ **startDiscoverySession**(`options?`: [DeviceDiscoverySessionOptions](../interfaces/devicediscoverysessionoptions.md)): *[DeviceDiscoverySession](devicediscoverysession.md)*

Start a new discovery session to discover Ortho Remote devices

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [DeviceDiscoverySessionOptions](../interfaces/devicediscoverysessionoptions.md) | discovery session options |

**Returns:** *[DeviceDiscoverySession](devicediscoverysession.md)*

Session object initialized based on options and to observe discovery events on

___

###  stopDiscovery

▸ **stopDiscovery**(): *void*

Stops _all_ discovery sessions in progress

**Returns:** *void*

___

###  stopDiscoverySession

▸ **stopDiscoverySession**(`session`: [DeviceDiscoverySession](devicediscoverysession.md)): *void*

Stops and removes a session from the list of managed sessions.
When all session have been removed discovery will cease.

Use `DeviceDiscoverySession.stop`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | [DeviceDiscoverySession](devicediscoverysession.md) | session to remove  |

**Returns:** *void*

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
