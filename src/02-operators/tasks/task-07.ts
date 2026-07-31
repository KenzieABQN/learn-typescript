/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

let HotelInfo: {
    roomPrice: number
    nightsStayed: number
    serviceCharge: number
    tax: number
    vipEligible: boolean
} = {
    roomPrice: 650000,
    nightsStayed: 4,
    serviceCharge: 120000,
    tax: 0.11,
    vipEligible: true
}

// determining if discount is applied
const roomDiscount: number = HotelInfo.vipEligible == true ? 0.12 : 0
const freeBreakfast: boolean = HotelInfo.nightsStayed >= 3 || HotelInfo.vipEligible == true ? true : false

// counting subtotal
let subtotal: number = HotelInfo.roomPrice * HotelInfo.nightsStayed

// counting total
let total: number = subtotal
total -= total * roomDiscount
total += HotelInfo.serviceCharge
total += total * HotelInfo.tax

console.log(`== Hotel Billing ==`)
console.log(`Hotel Info`)
console.log(`Room Price Per Night: ${HotelInfo.roomPrice}`)
console.log(`Nights Stayed: ${HotelInfo.nightsStayed}`)
console.log(`Service Charge: ${HotelInfo.serviceCharge}`)
console.log(`Is Vip? ${HotelInfo.vipEligible}`)

console.log()

console.log(`- Bill -`)
console.log(`Room Subtotal: ${subtotal}`)
console.log(`Discount: ${roomDiscount}`)
console.log(`Tax: ${HotelInfo.tax}`)
console.log(`Is Eligible For Free Breakfast? ${freeBreakfast}`)
console.log(`Final Payment ${total}`)
