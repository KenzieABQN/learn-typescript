/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

// declare variables
let studentInfo : {
    name: String
    GPA: number
    familyIncome: number
    competitionCount: number
    hasDisciplinaryRecord: boolean
    completedDocuments: boolean
} = {
    name: `Fajar Hidayat`,
    GPA: 3.86,
    familyIncome: 4200000,
    competitionCount: 4,
    hasDisciplinaryRecord: false,
    completedDocuments: true
}

let firstScreening: boolean = false
let secondScreening: boolean = false

console.log(`Name: ${studentInfo.name}`)

// first screening qualification
if(studentInfo.GPA >= 3.75 && studentInfo.familyIncome) {
    firstScreening = true
    // second screening qualification
    if(studentInfo.competitionCount >= 3 && !studentInfo.hasDisciplinaryRecord && studentInfo.completedDocuments) {
        secondScreening = true
    }
} else {
    console.log(`Scholarship not approved :(`);
}

// printing output
if(firstScreening) {
    if(secondScreening) {
        console.log(`Scholarship Approved!`)
    } else {
    console.log(`First screening approved, but Second screening not approved :(`)
    }
} 
