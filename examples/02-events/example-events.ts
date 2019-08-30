import { bootstrap, connectToDevice, logEvent } from '../utils'

// Uncomment to search for only your device
// ENTER DEVICE_ID to discover only a particular device
const DEVICE_ID: string | undefined = undefined

/**
 * Main application entry point
 */
async function main() {
    const device = await connectToDevice(DEVICE_ID)

    // When button is pressed & released
    device.on('click', () => {
        logEvent('click')
        device.orthoRemotePeripheral.setModulation(0.9)
    })

    // When button is pressed & released after a duration
    device.on('longClick', () => {
        logEvent('longClick')
    })

    // When button is pressed
    device.on('buttonPressed', () => {
        logEvent('buttonPressed')
    })

    // When button is released
    device.on('buttonReleased', () => {
        logEvent('buttonReleased')
    })

    // Rotation in any direction
    device.on('rotate', (rotation, buttonPressed) => {
        logEvent('rotate', {
            rotation: rotation.toFixed(3),
            buttonPressed,
        })
    })
}

// Boot strap async function
bootstrap(main)