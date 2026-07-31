/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const student: {
    finalScore: number
    attendanceScore: number
    tuitionIsPaid: boolean
} = {
    finalScore: 82,
    attendanceScore: 94,
    tuitionIsPaid: true
}

console.log(`Student Eligibility`)
console.log(`Final Score: ${student.finalScore}`)
console.log(`Attendance Score: ${student.attendanceScore}`)
console.log(`Tuition Paid? ${student.tuitionIsPaid}`)

// checks if student is eligible for graduation
let isEligible: boolean = student.finalScore >= 75 && student.attendanceScore >= 90 && student.tuitionIsPaid == true ? true : false

console.log(`Eligible to participate in Graduation Ceremony: ${isEligible}`)
