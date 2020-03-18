[Ortho Remote](../README.md) › [DeviceDiscoverySessionOptions](devicediscoverysessionoptions.md)

# Interface: DeviceDiscoverySessionOptions

Options given when starting a new discovery session for Ortho Remote devices

## Hierarchy

* **DeviceDiscoverySessionOptions**

## Index

### Properties

* [deviceIds](devicediscoverysessionoptions.md#optional-deviceids)
* [timeoutMs](devicediscoverysessionoptions.md#optional-timeoutms)

## Properties

### `Optional` deviceIds

• **deviceIds**? : *string[]*

List of know device IDs to discover
When specified only those devices white listed will be evented

___

### `Optional` timeoutMs

• **timeoutMs**? : *undefined | number*

Timeout in milliseconds before auto-stopping discovery
