/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

// declaring bills
const bill: number = 8000
const playingMinutes: number = 60 * 7 + 35
const playingHours: number = 8
let remainingMinutes: number = playingHours * 60
remainingMinutes -= playingMinutes

const discount: number = 0.15
let discountEligible: boolean = playingMinutes > 360 ? true : false 

const billedHours: number = playingHours
const total: number = billedHours * bill

let finalPayment: number = total
finalPayment = discountEligible == true ? finalPayment -= finalPayment * discount : finalPayment

console.log(`== Billing Information ==`)
console.log(`Total Playing Time (Minutes): ${playingMinutes}`)
console.log(`Remaining Minutes: ${remainingMinutes}`)
console.log(`Total Billed Hours: ${billedHours}`)

console.log()

console.log(`Total ${total}`)
console.log(`Final Payment: ${finalPayment}`)