/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const cart: {name: String, price: number, quantity: number}[] = [
    {name: `Mechanical Keyboard`, price: 850000, quantity: 1},
    {name: `Wireless Mouse`, price: 275000, quantity: 2},
    {name: `Mouse Pad`, price: 120000, quantity: 1}
]

const subtotal: number[] = [
    cart[0].price * cart[0].quantity,
    cart[1].price * cart[1].quantity,
    cart[2].price * cart[2].quantity
]

let total: number = subtotal[0] += subtotal[1] += subtotal[2]

const premium: boolean = true
const discount: number = 0.1

// determining if eligible for discount and free shipping
let discountEligible: boolean = total > 1000000 ? true : false
let freeShipping: boolean = premium == true ? true : false

let finalPay: number = total
finalPay = discountEligible == true ? finalPay -= finalPay * discount : finalPay

console.log(`-- Receipt --`)
console.log()
console.log(`Items`)
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])
console.log()
console.log(`Subtotal: ${subtotal}`)
console.log(`Total: ${total}`)
console.log(`Discount Applied: ${discountEligible}`)
console.log(`Final Payment: ${finalPay}`)


