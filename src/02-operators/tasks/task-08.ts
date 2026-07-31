/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

let electricityInfo : {
    previousMeter: number
    currentMeter: number
    electricityPrice: number
    solarPanelInstalled: boolean
    energySavingMode: boolean
} = {
    previousMeter: 25640,
    currentMeter: 25892,
    electricityPrice: 1650,
    solarPanelInstalled: true,
    energySavingMode: false
}
// counts electricity usage
const electricityUsage: number = electricityInfo.currentMeter - electricityInfo.previousMeter

// determing discount amount
let discount: number = electricityInfo.solarPanelInstalled == true ? 0.2 : 0
discount = electricityInfo.energySavingMode == true ? discount + 0.5 : discount

const subtotal: number = electricityUsage * electricityInfo.electricityPrice
let total: number = subtotal
total -= total * discount

// determining if eligible for green energy program
const greenEnergyProgram: boolean = electricityInfo.solarPanelInstalled == true && electricityUsage < 300 && electricityInfo.energySavingMode == true ? true : false

console.log(`[Billing Information]`)

console.log()

console.log(`Energy Consumption: ${electricityUsage} kWh`)
console.log(`Electricity Bill: ${subtotal}`)
console.log(`Final Bill ${total}`)

console.log()

console.log(`Green Energy Program Eligibility: ${greenEnergyProgram}`)
