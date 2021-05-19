[![License](https://img.shields.io/github/license/pryomoax/ortho-remote-node.svg?style=for-the-badge)](./LICENSE)
![Node](https://img.shields.io/npm/v/ortho-remote.svg?style=for-the-badge&label=version)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/pryomoax/ortho-remote-node/graphs/commit-activity)

Ortho Remote client package for Node.js for interacting with [Teenage Engineering](https://www.teenageengineering.com)'s BLE-MIDI [Ortho Remote](https://www.teenageengineering.com/products/orthoremote)

The `ortho-remote` package is designed to support multiple devices simultaneously, provide a high-level abstraction for interaction events, as well as provide access to the raw [BLE-MIDI](https://github.com/skratchdot/ble-midi/blob/master/pdf/Apple-Bluetooth-Low-Energy-MIDI-Specification.pdf) data.

For more information on BLE-MIDI see [midi.org](https://www.midi.org/midi/specifications/item/bluetooth-le-midi)

![Ortho Remote](https://github.com/pryomoax/ortho-remote-node/raw/main/assets/ortho.png)

- [Installation](#installation)
- [Troubleshooting](#troubleshooting)
  * [Linux Permissions](#linux-permissions)
  * [Low Power States](#low-power-states)
  * [Persistent Pairing (Not Advertising)](#persistent-pairing--not-advertising-)
- [Getting Started](#getting-started)
  * [Examples](#examples)
  * [Getting Connected](#getting-connected)
  * [Listening for Events](#listening-for-events)
  * [Accessing Raw Data](#accessing-raw-data)
- [API](#api)
- [Known Issues](#known-issues)
  * [Rotation Limitations](#rotation-limitations)
  * [Event Filtering](#event-filtering)

# Installation
To install `ortho-remote` for use within your project use [yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

```bash
$ yarn add ortho-remote
```

`ortho-remote` is writing in TypeScript and contains the necessary type definitions, so no need to acquire `@type` definitions

# Troubleshooting
It's worth adding help on troubleshooting before you get started. There may be times your Ortho Remote cannot be discovered for various reasons.

## Linux Permissions

If using Linux be sure to check out  [noble](https://github.com/noble/noble) for set up and configuration instructions

## Low Power States

A Ortho Remote may have entered a **low-power state**. Simply interact with the dial or click the dial button to wake a Ortho Remote device up.

## Persistent Pairing (Not Advertising)

BLE-MIDI devices on some OSes can retain paired connections. This can be problematic because once paired Ortho Remote will not be discoverable, leading to timed out connections.

**Ensure you have disconnected** from an Ortho Remote before running any example or writing code.

You may addtionally have to **manually disconnect** after each run-debug cycle during development, as has been my experience on macOS as it automatically pairs on connection...

![disconnect](https://github.com/pryomoax/ortho-remote-node/raw/master/assets/ortho-disconnect.png)


# Getting Started

Check out [examples](./examples) for now for more usage.

## Examples

Clone `ortho-remote-node` and run the examples to try things out. [package.json](./package.json) contains many example scripts. Alternatively, for [Visual Sudio Code](https://code.visualstudio.com/) users you have access to the pre-configured launch configurations to run the examples.

```bash
$ git clone https://github.com/pryomoax/ortho-remote-node.git
$ cd ortho-remote-node
$ yarn install
```

Run one of the following scripts

```bash
# Device discovery
$ yarn device-discovery

# Interaction events
$ yarn events
```

## Getting Connected

The first thing you are going to want to do is connect to an unpaired Ortho Remote. The snippet below demonstrates the connection to single device

```typescript
import { DeviceDiscoveryManager } from 'ortho-remote'

// Device connection manager
const manager = DeviceDiscoveryManager.defaultManager

/**
 * Main application entry point
 */
async function main() {
    console.log('Starting Ortho Remote discovery')

    // Create a new discovery session
    const session = manager.startDiscoverySession()

    console.log('Waiting for device...')

    // Convenience to wait the first discovered Ortho Remote
    const device = await session.waitForFirstDevice()

    console.log(`Found device '${device.id}'`)
    console.log('Connecting...')

    // Establish device connection
    if (await device.connect()) {
        console.log('Connected')

        //
        // You're connected, observe events and get started...
        //

        // If the device gets disconnected, exit the app
        device.on('disconnect', () => {
            console.log('Disconnected! Exiting.')

            // On a disconnect, exit
            process.exit(0)
        })
    }
}

// Boot strap async function
main().catch((err) => {
    console.log(err)
    process.exit(1)
})
```

## Listening for Events

`ortho-remote` emits events for various interactions. All those interactions are on display in [example-events.ts](./examples/02-events/example-events.ts)

```typescript
if (await device.connect()) {
    // Button click
    device.on('click', () => {
        console.log('Clicked!')
    })

    // Button click, longer than 400ms
    device.on('longClick', () => {
        console.log('Clicked!')
    })

    // Rotation
    device.on('rotate', (rotation: number, buttonPressed: boolean) => {
        console.log(`Rotated: ${rotation}`)
    })
}
```

## Accessing Raw Data

The abstractions in eventing may not work for everyone so `ortho-remote` emits BLE-MIDI events, or can be configured to emit raw data in other events like `rotate` ` instead of them being normalized.

```typescript
import { OrthoRemoteConfig } from 'ortho-remote'

// Configure `OrthoRemote` to not normalize data
const orthoConfig: OrthoRemoteConfig = {
    normalizeData: false,
}

if (await device.connect(orthoConfig)) {
    device.on('rotate', (rotation: number, buttonPressed: boolean) => {
        console.log(`Rotated: ${rotation}`)
    })
}
```

To access the [BLE-MIDI](https://github.com/skratchdot/ble-midi/blob/master/pdf/Apple-Bluetooth-Low-Energy-MIDI-Specification.pdf) data in parsed or it's raw form, use the `midi` event

```typescript
import { MidiData } from 'ortho-remote'

if (await device.connect()) {
    device.on('midi', (data: MidiData, rawData: Buffer) => {
        // Use BLE-MIDI data
    })
}
```

# API

The API documention for the package can be found under [docs](docs/api/README.md)

# Known Issues

Ortho Remote was implemented for MIDI applications, and although some interpretation and abstractions have been implemented there are some current restrictions. Hopefully can be resolved in the future

## Rotation Limitations
The package cannot set back a `rotation` value back to the Ortho Remote. This makes some applications difficult when needing to sync a existing value to an `OrthoRemote` object. For example, matching a volume level between devices.

## Event Filtering
As humans we are not to precise with some interactions. Ortho Remotes can send rotation events when depressing/releasing the Ortho Remote button.

I hope to implement event filtering as an option to make it more reliable to use for some applications
