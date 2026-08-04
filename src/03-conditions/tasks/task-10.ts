/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

let student: {
    name: String
    activeStudent: boolean
    paidTuition: boolean
    passedProgrammingFundamentals: boolean
    passedDatabaseSystems: boolean
    gpa: number
    seatsAvailable: boolean
} = {
    name: `Nadia Putri`,
    activeStudent: true,
    paidTuition: true,
    passedProgrammingFundamentals: true,
    passedDatabaseSystems: true,
    gpa: 3.45,
    seatsAvailable: false
}

console.log(`Name: ${student.name}`);

// step 1
if (!student.activeStudent && !student.paidTuition) {
    console.log(`Registration Rejected`)
} else {
    // step 2
    if (!student.passedProgrammingFundamentals && !student.passedDatabaseSystems && student.gpa < 3.20) {
        console.log(`Academic Requirements Not Met`)
    } else {
        // step 3
        student.seatsAvailable ? console.log(`Registration Successful`) : console.log(`Added to Waiting List`)
    }
}