/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    code: String
    name: String
    price: number
    stock: number
    weight: number
    rating: number
    discounted: boolean
}

let product1: Product = {
    code: `K10982`,
    name: `F-22 Raptor 5th Generation Stealth Fighter`,
    price: 10000000000,
    stock: 23,
    weight: 37875,
    rating: 5,
    discounted: true
}

let product2: Product = {
    code: `PARAMNT`,
    name: `Top Gun: Maverick`,
    price: 45000,
    stock: 2,
    weight: 0.35,
    rating: 5,
    discounted: false
}

let product3: Product = {
    code: `JPXFRD`,
    name: `Darwin The Goldfish`,
    price: 0,
    stock: 5,
    weight: 15,
    rating: 3,
    discounted: true
}

console.log(`Product 1`)
console.log(`Code: ${product1.code}`)
console.log(`Name: ${product1.name}`)
console.log(`Price: ${product1.price}`)
console.log(`Stock: ${product1.stock}`)
console.log(`Weight: ${product1.weight} Kg`)
console.log(`Rating: ${product1.rating}`)
console.log(`Is Discounted? ${product1.discounted}`)

console.log()

console.log(`Product 2`)
console.log(`Code: ${product2.code}`)
console.log(`Name: ${product2.name}`)
console.log(`Price: ${product2.price}`)
console.log(`Stock: ${product2.stock}`)
console.log(`Weight: ${product2.weight} Kg`)
console.log(`Rating: ${product2.rating}`)
console.log(`Is Discounted? ${product2.discounted}`)

console.log()

console.log(`Product 3`)
console.log(`Code: ${product3.code}`)
console.log(`Name: ${product3.name}`)
console.log(`Price: ${product3.price}`)
console.log(`Stock: ${product3.stock}`)
console.log(`Weight: ${product3.weight} Kg`)
console.log(`Rating: ${product3.rating}`)
console.log(`Is Discounted? ${product3.discounted}`)
