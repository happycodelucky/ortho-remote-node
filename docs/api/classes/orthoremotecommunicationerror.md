[Ortho Remote - v0.4.0](../README.md) / OrthoRemoteCommunicationError

# Class: OrthoRemoteCommunicationError

Class of error related to device communication errors with a known device

## Hierarchy

- [*OrthoRemoteError*](orthoremoteerror.md)

  ↳ **OrthoRemoteCommunicationError**

## Table of contents

### Constructors

- [constructor](orthoremotecommunicationerror.md#constructor)

### Properties

- [code](orthoremotecommunicationerror.md#code)
- [id](orthoremotecommunicationerror.md#id)

## Constructors

### constructor

\+ **new OrthoRemoteCommunicationError**(`code`: [*OrthoRemoteCommunicationErrorCode*](../enums/orthoremotecommunicationerrorcode.md), `id`: *string*, `message?`: *string*): [*OrthoRemoteCommunicationError*](orthoremotecommunicationerror.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | [*OrthoRemoteCommunicationErrorCode*](../enums/orthoremotecommunicationerrorcode.md) | connection error code |
| `id` | *string* | device ID for the connection error |
| `message?` | *string* | - |

**Returns:** [*OrthoRemoteCommunicationError*](orthoremotecommunicationerror.md)

Overrides: OrthoRemoteError.constructor

## Properties

### code

• `Readonly` **code**: [*OrthoRemoteCommunicationErrorCode*](../enums/orthoremotecommunicationerrorcode.md)

Device error code

___

### id

• `Readonly` **id**: *string*

Device identifier
