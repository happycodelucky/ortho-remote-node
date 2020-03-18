[Ortho Remote](../README.md) › [OrthoRemote](orthoremote.md)

# Class: OrthoRemote

A Ortho Remote device client for interacting with BT Ortho Remote peripheral from Teenage Engineering

## Hierarchy

* EventEmitter

  ↳ **OrthoRemote**

## Index

### Events

* [batteryLevel](orthoremote.md#batterylevel)
* [connect](orthoremote.md#connect)
* [disconnect](orthoremote.md#disconnect)
* [rotation](orthoremote.md#rotation)
* [rssi](orthoremote.md#rssi)

### Properties

* [orthoRemotePeripheral](orthoremote.md#orthoremoteperipheral)
* [defaultMaxListeners](orthoremote.md#static-defaultmaxlisteners)

### Accessors

* [id](orthoremote.md#id)
* [isConnected](orthoremote.md#isconnected)

### Methods

* [addListener](orthoremote.md#addlistener)
* [emit](orthoremote.md#emit)
* [eventNames](orthoremote.md#eventnames)
* [getMaxListeners](orthoremote.md#getmaxlisteners)
* [listenerCount](orthoremote.md#listenercount)
* [listeners](orthoremote.md#listeners)
* [off](orthoremote.md#off)
* [on](orthoremote.md#on)
* [once](orthoremote.md#once)
* [prependListener](orthoremote.md#prependlistener)
* [prependOnceListener](orthoremote.md#prependoncelistener)
* [rawListeners](orthoremote.md#rawlisteners)
* [removeAllListeners](orthoremote.md#removealllisteners)
* [removeListener](orthoremote.md#removelistener)
* [setMaxListeners](orthoremote.md#setmaxlisteners)
* [listenerCount](orthoremote.md#static-listenercount)

### Object literals

* [configuration](orthoremote.md#configuration)

## Events

###  batteryLevel

• **get batteryLevel**(): *number | undefined*

Ortho Remote device battery level

**Returns:** *number | undefined*

___

###  connect

• **connect**(`config?`: [OrthoRemoteConfig](../interfaces/orthoremoteconfig.md)): *Promise‹boolean›*

Connects to the device, if not already connected

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [OrthoRemoteConfig](../interfaces/orthoremoteconfig.md) |

**Returns:** *Promise‹boolean›*

a Promise with `true` to indicate a successful connection

___

###  disconnect

• **disconnect**(): *void*

Disconnects cleanly from the device

**Returns:** *void*

___

###  rotation

• **get rotation**(): *number*

Ortho Remote rotation value, can be between 0.0 - 1.0 (normalized) or 0 - 127 (raw)

**Returns:** *number*

___

###  rssi

• **get rssi**(): *number | undefined*

Ortho Remote device RSSI

**Returns:** *number | undefined*

## Properties

###  orthoRemotePeripheral

• **orthoRemotePeripheral**: *OrthoRemotePeripheral*

Associated peripheral

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

## Accessors

###  id

• **get id**(): *string*

Ortho Remote device identifier

**Returns:** *string*

___

###  isConnected

• **get isConnected**(): *boolean*

Indicates if there is a connection established to the Ortho Remote device

**Returns:** *boolean*

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

▸ **addListener**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **addListener**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **emit**(`eventName`: "rotate", `value`: number, `buttonPressed`: boolean): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`value` | number |
`buttonPressed` | boolean |

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

▸ **listenerCount**(`type`: "batteryLevel" | "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "error" | "longClick" | "midi" | "rotate" | "rssi"): *number*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "batteryLevel" &#124; "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "error" &#124; "longClick" &#124; "midi" &#124; "rotate" &#124; "rssi" |

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

▸ **listeners**(`eventName`: "batteryLevel"): *[OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |

**Returns:** *[OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)[]*

▸ **listeners**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick"): *[OnEventCallback](../interfaces/oneventcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |

**Returns:** *[OnEventCallback](../interfaces/oneventcallback.md)[]*

▸ **listeners**(`eventName`: "error"): *[OnErrorCallback](../interfaces/onerrorcallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |

**Returns:** *[OnErrorCallback](../interfaces/onerrorcallback.md)[]*

▸ **listeners**(`eventName`: "midi"): *[OnMidiCallback](../interfaces/onmidicallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |

**Returns:** *[OnMidiCallback](../interfaces/onmidicallback.md)[]*

▸ **listeners**(`eventName`: "rotate"): *[OnRotateCallback](../interfaces/onrotatecallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |

**Returns:** *[OnRotateCallback](../interfaces/onrotatecallback.md)[]*

▸ **listeners**(`eventName`: "rssi"): *[OnRssiCallback](../interfaces/onrssicallback.md)[]*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |

**Returns:** *[OnRssiCallback](../interfaces/onrssicallback.md)[]*

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

▸ **off**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **off**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **on**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **on**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **once**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **once**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **prependListener**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **prependListener**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **prependOnceListener**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **prependOnceListener**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

▸ **removeListener**(`eventName`: "batteryLevel", `listener`: [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "batteryLevel" |
`listener` | [OnBatteryLeveCallback](../interfaces/onbatterylevecallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "buttonPressed" | "buttonReleased" | "click" | "connect" | "disconnect" | "longClick", `listener`: [OnEventCallback](../interfaces/oneventcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "buttonPressed" &#124; "buttonReleased" &#124; "click" &#124; "connect" &#124; "disconnect" &#124; "longClick" |
`listener` | [OnEventCallback](../interfaces/oneventcallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "error", `listener`: [OnErrorCallback](../interfaces/onerrorcallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "error" |
`listener` | [OnErrorCallback](../interfaces/onerrorcallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "midi", `listener`: [OnMidiCallback](../interfaces/onmidicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "midi" |
`listener` | [OnMidiCallback](../interfaces/onmidicallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "rotate", `listener`: [OnRotateCallback](../interfaces/onrotatecallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rotate" |
`listener` | [OnRotateCallback](../interfaces/onrotatecallback.md) |

**Returns:** *this*

▸ **removeListener**(`eventName`: "rssi", `listener`: [OnRssiCallback](../interfaces/onrssicallback.md)): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | "rssi" |
`listener` | [OnRssiCallback](../interfaces/onrssicallback.md) |

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

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

## Object literals

###  configuration

### ▪ **configuration**: *object*

Ortho Remote configuration

###  normalizeData

• **normalizeData**: *true* = true
