[Ortho Remote - v0.4.0](../README.md) / DeviceDiscoverySessionOptions

# Interface: DeviceDiscoverySessionOptions

Options given when starting a new discovery session for Ortho Remote devices

## Table of contents

### Properties

- [deviceIds](devicediscoverysessionoptions.md#deviceids)
- [timeoutMs](devicediscoverysessionoptions.md#timeoutms)

## Properties

### deviceIds

• `Optional` **deviceIds**: *string*[]

List of know device IDs to discover
When specified only those devices white listed will be evented

___

### timeoutMs

• `Optional` **timeoutMs**: *number*

Timeout in milliseconds before auto-stopping discovery
