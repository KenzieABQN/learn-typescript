/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000]

let totalSales: number = 0
let highestTransaction: number = 0
let lowestTransaction: number = sales[0]
let transactionsWorth300kOrMore: number = 0

for (const sale of sales) {
    if (sale > highestTransaction) {
        highestTransaction = sale
    }
    
    if (lowestTransaction > sale) {
        lowestTransaction = sale
    }
    
    if (sale >= 300000) {
        transactionsWorth300kOrMore++
    }
    totalSales += sale
    console.log(sale)
}

let averageTransactionAmount: number = totalSales / sales.length
console.log(`Total Sales Revenue: ${totalSales}`)
console.log(`Highest Transation: ${highestTransaction}`)
console.log(`Lowest Transation: ${lowestTransaction}`)
console.log(`Number of transactions worth Rp 300,000 or more: ${transactionsWorth300kOrMore}`)
console.log(`Average transaction value: ${averageTransactionAmount}`)