/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock: number = 0
let lowStock: number = 0
let safeStock: number = 0
let totalInventory: number = 0

for (const quantity of stocks) {
    if (quantity === 0) {
        outOfStock++
    } else if (quantity < 10) {
        lowStock++
    } else {
        safeStock++
    }

    totalInventory += quantity
}

let averageStockQuantity: number = totalInventory / stocks.length

console.log(`Out Of Stock: ${outOfStock}`)
console.log(`Low Stock: ${lowStock}`)
console.log(`Safe Stock: ${safeStock}`)
console.log(`Total quantity of items in inventory: ${totalInventory}`)
console.log(`Average stock quantity: ${averageStockQuantity}`)