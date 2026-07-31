/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

type purchase = {
    productName: String
    price: number
    quantity: number
}

const item1: purchase = {
    productName: `Mechanical Keyboard RGB`,
    price: 850000,
    quantity: 1
}

const item2: purchase = {
    productName: `Wireless Mouse`,
    price: 275000,
    quantity: 2
}

const item3: purchase = {
    productName: `Monitor Stand`,
    price: 420000,
    quantity: 1
}

const customerInfo: {
    voucher: number
    premium: boolean
    rewardPointRate: number
} = {
    voucher: 100000,
    premium: true,
    rewardPointRate: 50000
}

// sums total price of all items in cart
let subtotal: number = item1.price * item1.quantity
subtotal += item2.price * item2.quantity
subtotal += item3.price * item3.quantity

// defines discount amount
let discount: number = customerInfo.premium == true ? 0.1 : 0
let tax: number = 0.11

// discount deduction
let totalAfterDiscount: number = subtotal
totalAfterDiscount -= totalAfterDiscount * discount

// voucher deduction
let totalAfterVoucher: number = totalAfterDiscount - customerInfo.voucher

// counting reward points
const rewardPoints: number = totalAfterVoucher / customerInfo.rewardPointRate

// counting tax amount
const taxAmount: number = totalAfterVoucher * tax

// adding tax
let totalAfterTax: number = totalAfterVoucher
totalAfterTax += taxAmount

// determine free shipping
const freeShipping: boolean = customerInfo.premium || totalAfterTax > 1500000 ? true : false

console.log(`== Checkout Info ==`)
console.log(`Product Subtotal: ${subtotal}`)
console.log(`Membership Discount: ${discount * 100}%`)
console.log(`Voucher Deduction: ${customerInfo.voucher}`)
console.log(`Payment Before Tax: ${totalAfterVoucher}`)

console.log()
console.log(`VAT: ${tax * 100}% (${taxAmount})`)
console.log(`Final Payment: ${totalAfterTax}`)

console.log()
console.log(`Reward Points: ${rewardPoints}`)
console.log(`Is eligible for free shipping? ${freeShipping}`)