![Ortho Remote](https://github.com/pryomoax/ortho-remote-node/raw/master/assets/ortho.png)

[![License](https://img.shields.io/github/license/pryomoax/ortho-remote-node.svg?style=for-the-badge)](./LICENSE)
![Node](https://img.shields.io/npm/v/ortho-remote.svg?style=for-the-badge&label=version)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/pryomoax/ortho-remote-node/graphs/commit-activity)

Ortho Remote client package for Node.js for interacting with [Teenage Engineering](https://www.teenageengineering.com)'s BLE-MIDI [Ortho Remote](https://www.teenageengineering.com/products/orthoremote)

The `ortho-remote` package is designed to support multiple devices simultaneously, provide a high-level abstraction for interaction events, as well as provide access to the raw [BLE-MIDI](./specs/rp52public.pdf) data.

For more information on BLE-MIDI see [midi.org](https://www.midi.org/midi/specifications/item/bluetooth-le-midi)

[TOC]

# Installation
To install `ortho-remote` for use within your project use [yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

```bash
$ yarn add ortho-remote
```

`ortho-remote` is writing in TypeScript and contains the necessary type definitions, so no need to acquire `@type` definitions

## Node.js 10.x
`ortho-remote` uses [noble](https://github.com/noble/noble) under the hood for communicating with to BLE devices. `noble` running with Node.js 10.x or greater currently has issues related to `xpc-connection` (used for macOS).

In your project you will need to use `yarn`'s **resolutions** addition to override to a fixed version of `xpc-connection`. Unfortunately, this is an open [pull request](https://github.com/sandeepmistry/node-xpc-connection/pull/26) so a git reference is required.

### Overriding Dependencies

In *your* project's `package.json` insert the following:

```json
  "depedendencies": {
   "ortho-remote": "^0.1"
  },
  "resolutions": {
    "xpc-connection": "sandeepmistry/node-xpc-connection#pull/26/head"
  }
```

Then run from the terminal

```bash
$ yarn install
```

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
    
    // Velocity, negative/positive based on connected origin
    device.on('velocity', (velocity: number, buttonPressed: boolean) => {
        console.log(`Velocity: ${velocity}`)
    })    
}
```

## Accessing Raw Data

The abstractions in eventing may not work for everyone so `ortho-remote` emits BLE-MIDI events, or can be configured to emit raw data in other events like `rotate` or `velocity` instead of them being normalized.

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
    device.on('velocity', (velocity: number, buttonPressed: boolean) => {
        console.log(`Velocity: ${velocity}`)
    })
}
```

To access the [BLE-MIDI](./specs/rp52public.pdf) data in parsed or it's raw form, use the `midi` event

```typescript
import { MidiData } from 'ortho-remote'

if (await device.connect()) {
    device.on('midi', (data: MidiData, rawData: Buffer) => {
        // Use BLE-MIDI data
    })
}
```

# API

Coming Soon

# Known Issues

Ortho Remote was implemented for MIDI applications, and although some interpretation and abstractions have been implemented there are some current restrictions. Hopefully can be resolved in the future

## Rotation Limitations
The package cannot set back a `rotation` value back to the Ortho Remote. This makes some applications difficult when needing to sync a existing value to an `OrthoRemote` object. For example, matching a volume level between devices.

## Event Filtering
As humans we are not to precise with some interactions. Ortho Remotes can send rotation events when depressing/releasing the Ortho Remote button.

I hope to implement event filtering as an option to make it more reliable to use for some applications