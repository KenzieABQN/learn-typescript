/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employee: {
    name: String
    salary: number
    overtimeHours: number
    overtimeRate: number
} = {
    name: `Dimas`,
    salary: 5000000,
    overtimeHours: 12,
    overtimeRate: 50000
}

// counting overtime pay
const overtimePay: number = employee.overtimeRate * employee.overtimeHours
const bonus: number = 300000
let bonusEligible: boolean = employee.overtimeHours >= 10 ? true : false

let finalSalary = employee.salary + overtimePay
finalSalary = bonusEligible == true ? finalSalary += bonus : finalSalary

console.log(`Employee Pay Overview`)
console.log()
console.log(`Overtime Salary for ${employee.name}`)
console.log(`Regular Salary: ${employee.salary}`)
console.log(`Hours: ${employee.overtimeHours}`)
console.log()
console.log(`Overtime Pay: $${overtimePay}`)
console.log(`Bonus Eligible? ${bonusEligible}`)
console.log(`Final Pay: ${finalSalary}`)