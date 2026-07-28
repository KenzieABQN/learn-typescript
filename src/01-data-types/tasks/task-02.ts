/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type Product = {
    name: String
    ID: String
    price: number
    discount: number
    stock: number
}

type Customer = {
    premium: boolean
    purchaseInformation:  {
        itemName: String,
        amount: number
    };
}

let item: Product = {
    name: `Mechanical Keyboard RGB`,
    ID: `KBR-001`,
    price: 850000,
    discount: 0.25,
    stock: 18
}

let customer: Customer = {
    premium: true,
    purchaseInformation: {
        itemName: item.name,
        amount: 2
    }
}

console.log(`== Purchase Information ==`)
console.log(`product: ${item.name}`)
console.log(`ID: ${item.ID}`)
console.log(`price: ${item.price}`)
console.log(`discount: ${item.discount}`)
console.log(`amount: ${customer.purchaseInformation.amount}`)
console.log(`free shipping: ${customer.premium}`)