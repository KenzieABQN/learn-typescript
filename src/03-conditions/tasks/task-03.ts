/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

// declare variables
const name: String = `Raka Saputra`
const monthlyUsageGB: number = 124
let reccomendedPackage: String

console.log(`Name: ${name}`);

// determing reccomended package
if(monthlyUsageGB >= 150) {
    reccomendedPackage = `Premium`
} else if (monthlyUsageGB >= 50){
    reccomendedPackage = `Standard`
} else {
    reccomendedPackage = `Basic`
}

// prints output
console.log(`Reccomended Package: ${reccomendedPackage}`);
