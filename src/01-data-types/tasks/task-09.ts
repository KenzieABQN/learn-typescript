/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

let studentData: {ID: String, name: String, age: number, hasPaid: boolean}[] = [
    {ID: `ST001`, name: `Ahmad Fauzi`, age: 16, hasPaid: true},
    {ID: `ST002`, name: `Siti Nurhaliza`, age: 17, hasPaid: false},
    {ID: `ST003`, name: `Budi Santoso`, age: 16, hasPaid: true},
]

console.log(`|Student ID | Name          | Age | Has Paid |`)
console.log(`|-----------|---------------|-----|----------|`)
console.log(`|${studentData[0].ID}      |${studentData[0].name}    |${studentData[0].age}   |${studentData[0].hasPaid}      |`)
console.log(`|${studentData[1].ID}      |${studentData[1].name} |${studentData[1].age}   |${studentData[1].hasPaid}     |`)
console.log(`|${studentData[2].ID}      |${studentData[2].name}   |${studentData[2].age}   |${studentData[2].hasPaid}      |`)
