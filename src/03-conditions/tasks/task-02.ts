/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

// declare variables
const name: String = `Dimas Pratama`
const performance: number = 78
// checking for bonus eligibility
const bonus: boolean = performance >= 80 ? true : false

console.log(`Employee: ${name}`);

// prints output based on bonus eligibility
if (bonus) {
    console.log(`Bonus Approved!`)
} else {
    console.log(`Bonus not approved.`)
}