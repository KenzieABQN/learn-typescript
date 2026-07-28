/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

let cart: {code: String, name: String, price: number, quantity: number, freeShipping: boolean}[] = [
    {code: `KB001`, name: `Mechanical Keyboard`, price: 850000, quantity: 1, freeShipping: true},
    {code: `MS002`, name: `Wireless Mouse`, price: 275000, quantity: 2, freeShipping: true},
    {code: `HD003`, name: `External SSD 1TB`, price: 1650000, quantity: 1, freeShipping: false},
    {code: `HP004`, name: `Mechanical Keyboard`, price: 850000, quantity: 1, freeShipping: true},
]

console.log(`| Product Code | Product Name        | Price   | Quantity | Free Shipping |`)
console.log(`| ------------ | ------------------- | ------- | -------- | ------------- |`)
console.log(`| ${cart[0].code} | ${cart[0].name} | ${cart[0].price} | ${cart[0].quantity} | ${cart[0].freeShipping} |`)
console.log(`| ${cart[1].code} | ${cart[1].name} | ${cart[1].price} | ${cart[1].quantity} | ${cart[1].freeShipping} |`)
console.log(`| ${cart[2].code} | ${cart[2].name} | ${cart[2].price} | ${cart[2].quantity} | ${cart[2].freeShipping} |`)
console.log(`| ${cart[3].code} | ${cart[3].name} | ${cart[3].price} | ${cart[3].quantity} | ${cart[3].freeShipping} |`)