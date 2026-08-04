/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

// declare variables
const applicant: {
    name: String
    monthlyIncome: number
    creditScore: number
    existingDebt: number
    permanentEmployee: boolean
} = {
    name: `Andi Wijaya`,
    monthlyIncome: 10000000,
    creditScore: 725,
    existingDebt: 2500000,
    permanentEmployee: true
}

let decision: String = ``

console.log(`Name: ${applicant.name}`)

// first screening
if(applicant.monthlyIncome >= 8000000 && applicant.creditScore >= 700) {
    decision = `Manual Review`
    // second screening
    if(applicant.existingDebt != applicant.monthlyIncome * 0.3 && applicant.permanentEmployee)
    {
        decision = `Loan Accepted!`
    }
} else {
    decision = `Loan Rejected`
}

console.log(`Decision: ${decision}`)