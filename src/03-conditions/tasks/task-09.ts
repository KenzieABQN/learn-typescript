/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

let machine: {
    poweredOn: boolean
    temperature: number
    highVibration: boolean
    productionSpeed: number
} = {
    poweredOn: true,
    temperature: 95,
    highVibration: false,
    productionSpeed: 92
}

console.log(`Machine Status:`)

if (!machine.poweredOn) {
    console.log(`MACHINE OFFLINE`);
} else if (machine.temperature > 90) {
    if (machine.highVibration) {
        console.log(`EMERGENCY SHUTDOWN`)
    } else {
        console.log(`COOLING REQUIRED`);
    }
} else {
    if (machine.productionSpeed < 80) {
        console.log(`PERFORMANCE WARNING`)
    } else {
        console.log(`MACHINE RUNNING NORMALLY`)
    }
}