/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

// declare type for per item information
type info = {
    name: String
    price: number
    amount: number
}

const item1: info = {
    name: `Fried Rice`,
    price: 18000,
    amount: 3
}

const item2: info = {
    name: `Mineral Water`,
    price: 5000,
    amount: 2
}

const discount: number = 10000
const foodPrice: number = item1.price * item1.amount
const drinkPrice: number = item2.price * item2.amount
const total: number = foodPrice + drinkPrice
const finalPrice: number = total - discount

console.log(`Raka's Order`)
console.log(`Food Price: ${foodPrice}`)
console.log(`Drink Price: ${drinkPrice}`)
console.log(`Total ${total}`)
console.log(`Amount Paid (After Discount) ${finalPrice}`)
