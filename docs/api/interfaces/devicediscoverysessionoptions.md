[Ortho Remote - v0.2.1](../README.md) / DeviceDiscoverySessionOptions

# Interface: DeviceDiscoverySessionOptions

Options given when starting a new discovery session for Ortho Remote devices

## Hierarchy

* **DeviceDiscoverySessionOptions**

## Index

### Properties

* [deviceIds](devicediscoverysessionoptions.md#deviceids)
* [timeoutMs](devicediscoverysessionoptions.md#timeoutms)

## Properties

### deviceIds

• `Optional` **deviceIds**: *undefined* \| *string*[]

List of know device IDs to discover
When specified only those devices white listed will be evented

___

### timeoutMs

• `Optional` **timeoutMs**: *undefined* \| *number*

Timeout in milliseconds before auto-stopping discovery
