[Ortho Remote - v0.4.0](../README.md) / DeviceDiscoveryManager

# Class: DeviceDiscoveryManager

A device manager is the main entry for connecting to Ortho Remote devices. It offers device discovery and

## Hierarchy

- *EventEmitter*

  ↳ **DeviceDiscoveryManager**

## Table of contents

### Accessors

- [discoveredDevices](devicediscoverymanager.md#discovereddevices)
- [discoveryState](devicediscoverymanager.md#discoverystate)
- [defaultManager](devicediscoverymanager.md#defaultmanager)

### Methods

- [addListener](devicediscoverymanager.md#addlistener)
- [listenerCount](devicediscoverymanager.md#listenercount)
- [listeners](devicediscoverymanager.md#listeners)
- [off](devicediscoverymanager.md#off)
- [on](devicediscoverymanager.md#on)
- [once](devicediscoverymanager.md#once)
- [prependListener](devicediscoverymanager.md#prependlistener)
- [prependOnceListener](devicediscoverymanager.md#prependoncelistener)
- [removeListener](devicediscoverymanager.md#removelistener)
- [startDiscoverySession](devicediscoverymanager.md#startdiscoverysession)
- [stopDiscovery](devicediscoverymanager.md#stopdiscovery)
- [stopDiscoverySession](devicediscoverymanager.md#stopdiscoverysession)

## Accessors

### discoveredDevices

• get **discoveredDevices**(): [*OrthoRemote*](orthoremote.md)[]

All discovered devices by the device manager

**Returns:** [*OrthoRemote*](orthoremote.md)[]

___

### discoveryState

• get **discoveryState**(): [*DeviceDiscoveryState*](../enums/devicediscoverystate.md)

Active discovery state

**Returns:** [*DeviceDiscoveryState*](../enums/devicediscoverystate.md)

___

### defaultManager

• `Static` get **defaultManager**(): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Default device discovery manager to manage discovery of one or more Ortho Remote devices

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

## Methods

### addListener

▸ **addListener**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.addListener

▸ **addListener**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.addListener

___

### listenerCount

▸ **listenerCount**(`type`: ``"error"`` \| ``"device"`` \| ``"started"`` \| ``"stopped"``): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"error"`` \| ``"device"`` \| ``"started"`` \| ``"stopped"`` |

**Returns:** *number*

Inherited from: EventEmitter.listenerCount

___

### listeners

▸ **listeners**(`eventName`: ``"device"``): [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |

**Returns:** [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"error"``): [*OnErrorCallback*](../interfaces/onerrorcallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |

**Returns:** [*OnErrorCallback*](../interfaces/onerrorcallback.md)[]

Inherited from: EventEmitter.listeners

▸ **listeners**(`eventName`: ``"started"`` \| ``"stopped"``): [*OnEventCallback*](../interfaces/oneventcallback.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |

**Returns:** [*OnEventCallback*](../interfaces/oneventcallback.md)[]

Inherited from: EventEmitter.listeners

___

### off

▸ **off**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.off

▸ **off**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.off

___

### on

▸ **on**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.on

▸ **on**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.on

___

### once

▸ **once**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.once

▸ **once**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.once

___

### prependListener

▸ **prependListener**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependListener

▸ **prependListener**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependOnceListener

▸ **prependOnceListener**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.prependOnceListener

___

### removeListener

▸ **removeListener**(`eventName`: ``"device"``, `listener`: [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"device"`` |
| `listener` | [*OnDeviceDiscoveredCallback*](../interfaces/ondevicediscoveredcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"error"``, `listener`: [*OnErrorCallback*](../interfaces/onerrorcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | [*OnErrorCallback*](../interfaces/onerrorcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.removeListener

▸ **removeListener**(`eventName`: ``"started"`` \| ``"stopped"``, `listener`: [*OnEventCallback*](../interfaces/oneventcallback.md)): [*DeviceDiscoveryManager*](devicediscoverymanager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"started"`` \| ``"stopped"`` |
| `listener` | [*OnEventCallback*](../interfaces/oneventcallback.md) |

**Returns:** [*DeviceDiscoveryManager*](devicediscoverymanager.md)

Inherited from: EventEmitter.removeListener

___

### startDiscoverySession

▸ **startDiscoverySession**(`options?`: [*DeviceDiscoverySessionOptions*](../interfaces/devicediscoverysessionoptions.md)): [*DeviceDiscoverySession*](devicediscoverysession.md)

Start a new discovery session to discover Ortho Remote devices

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [*DeviceDiscoverySessionOptions*](../interfaces/devicediscoverysessionoptions.md) | discovery session options |

**Returns:** [*DeviceDiscoverySession*](devicediscoverysession.md)

Session object initialized based on options and to observe discovery events on

___

### stopDiscovery

▸ **stopDiscovery**(): *void*

Stops _all_ discovery sessions in progress

**Returns:** *void*

___

### stopDiscoverySession

▸ **stopDiscoverySession**(`session`: [*DeviceDiscoverySession*](devicediscoverysession.md)): *void*

Stops and removes a session from the list of managed sessions.
When all session have been removed discovery will cease.

Use `DeviceDiscoverySession.stop`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session` | [*DeviceDiscoverySession*](devicediscoverysession.md) | session to remove |

**Returns:** *void*
