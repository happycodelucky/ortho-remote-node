[Ortho Remote - v0.4.0](../README.md) / OrthoRemote

# Class: OrthoRemote

A Ortho Remote device client for interacting with BT Ortho Remote peripheral from Teenage Engineering

## Hierarchy

- *EventEmitter*

  ↳ **OrthoRemote**

## Table of contents

### Events

- [batteryLevel](orthoremote.md#batterylevel)
- [connect](orthoremote.md#connect)
- [disconnect](orthoremote.md#disconnect)
- [rotation](orthoremote.md#rotation)
- [rssi](orthoremote.md#rssi)

### Properties

- [configuration](orthoremote.md#configuration)
- [orthoRemotePeripheral](orthoremote.md#orthoremoteperipheral)

### Accessors

- [id](orthoremote.md#id)
- [isConnected](orthoremote.md#isconnected)

### Methods

- [addListener](orthoremote.md#addlistener)
- [emit](orthoremote.md#emit)
- [listenerCount](orthoremote.md#listenercount)
- [listeners](orthoremote.md#listeners)
- [off](orthoremote.md#off)
- [on](orthoremote.md#on)
- [once](orthoremote.md#once)
- [prependListener](orthoremote.md#prependlistener)
- [prependOnceListener](orthoremote.md#prependoncelistener)
- [removeListener](orthoremote.md#removelistener)

## Events

### batteryLevel

• get **batteryLevel**(): *undefined* \| *number*

Ortho Remote device battery level

**Returns:** *undefined* \| *number*

___

### connect

• **connect**(`config?`: [*OrthoRemoteConfig*](../interfaces/orthoremoteconfig.md)): *Promise*<boolean\>

Connects to the device, if not already connected

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [*OrthoRemoteConfig*](../interfaces/orthoremoteconfig.md) |

**Returns:** *Promise*<boolean\>

a Promise with `true` to indicate a successful connection

___

### disconnect

• **disconnect**(): *void*

Disconnects cleanly from the device

**Returns:** *void*

___

### rotation

• get **rotation**(): *number*

Ortho Remote rotation value, can be between 0.0 - 1.0 (normalized) or 0 - 127 (raw)

**Returns:** *number*

___

### rssi

• get **rssi**(): *undefined* \| *number*

Ortho Remote device RSSI

**Returns:** *undefined* \| *number*

## Properties

### configuration

• **configuration**: [*OrthoRemoteConfig*](../interfaces/orthoremoteconfig.md)

Ortho Remote configuration

___

### orthoRemotePeripheral

• **orthoRemotePeripheral**: *OrthoRemotePeripheral*

Associated peripheral

## Accessors

### id

• get **id**(): *string*

Ortho Remote device identifier

**Returns:** *string*

___

### isConnected

• get **isConnected**(): *boolean*

Indicates if there is a connection established to the Ortho Remote device

**Returns:** *boolean*

## Methods

### addListener

▸ **addListener**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.addListener

___

### emit

▸ **emit**(`eventName`: ``"rotate"``, `value`: *number*, `buttonPressed`: *boolean*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `value` | *number* |
| `buttonPressed` | *boolean* |

**Returns:** *boolean*

Inherited from: EventEmitter.emit

___

### listenerCount

▸ **listenerCount**(`type`: ``"batteryLevel"`` \| ``"rssi"`` \| ``"connect"`` \| ``"disconnect"`` \| ``"error"`` \| ``"midi"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` \| ``"rotate"``): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"batteryLevel"`` \| ``"rssi"`` \| ``"connect"`` \| ``"disconnect"`` \| ``"error"`` \| ``"midi"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` \| ``"rotate"`` |

**Returns:** *number*

Inherited from: EventEmitter.listenerCount

___

### listeners

▸ **listeners**(`eventName`: ``"batteryLevel"``): [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |

**Returns:** [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``): [*OnEventCallback*](../interfaces/oneventcallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |

**Returns:** [*OnEventCallback*](../interfaces/oneventcallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"error"``): [*OnErrorCallback*](../interfaces/onerrorcallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |

**Returns:** [*OnErrorCallback*](../interfaces/onerrorcallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"midi"``): [*OnMidiCallback*](../interfaces/onmidicallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |

**Returns:** [*OnMidiCallback*](../interfaces/onmidicallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"rotate"``): [*OnRotateCallback*](../interfaces/onrotatecallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |

**Returns:** [*OnRotateCallback*](../interfaces/onrotatecallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"rssi"``): [*OnRssiCallback*](../interfaces/onrssicallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |

**Returns:** [*OnRssiCallback*](../interfaces/onrssicallback.md)[]

Inherited from: EventEmitter.listeners

___

### off

▸ **off**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.off

___

### on

▸ **on**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.on

___

### once

▸ **once**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.once

___

### prependListener

▸ **prependListener**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.prependOnceListener

___

### removeListener

▸ **removeListener**(`eventName`: ``"batteryLevel"``, `listener`: [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"batteryLevel"`` |
| `listener` | [*OnBatteryLeveCallback*](../interfaces/onbatterylevecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"connect"`` \| ``"disconnect"`` \| ``"buttonPressed"`` \| ``"buttonReleased"`` \| ``"click"`` \| ``"longClick"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"midi"``, `listener`: [*OnMidiCallback*](../interfaces/onmidicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"midi"`` |
| `listener` | [*OnMidiCallback*](../interfaces/onmidicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"rotate"``, `listener`: [*OnRotateCallback*](../interfaces/onrotatecallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rotate"`` |
| `listener` | [*OnRotateCallback*](../interfaces/onrotatecallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"rssi"``, `listener`: [*OnRssiCallback*](../interfaces/onrssicallback.md)): [*OrthoRemote*](orthoremote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"rssi"`` |
| `listener` | [*OnRssiCallback*](../interfaces/onrssicallback.md) |

**Returns:** [*OrthoRemote*](orthoremote.md)

Inherited from: EventEmitter.removeListener
