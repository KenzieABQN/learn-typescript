/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    ID: String
    fullName: String
    age: number
    studentStatus: boolean
}

const student1: Student = {
    ID: `P4K15SW`,
    fullName: `Dimas Aryo Wibowo`,
    age: 16,
    studentStatus: true
}

const student2: Student = {
    ID: `PAL5U4NN`,
    fullName: `Joko Cahyo Wulangsono`,
    age: 13,
    studentStatus: true
}

const student3: Student = {
    ID: `TUL4GN65`,
    fullName: `Reza Al Fath Fadhilah Fadhilah`,
    age: 100,
    studentStatus: false
}

console.log(`Name: ${student1.fullName}`)
console.log(`ID: ${student1.ID}`)
console.log(`Age: ${student1.age}`)
console.log(`Is Active Student: ${student1.studentStatus}`)

console.log()

console.log(`Name: ${student2.fullName}`)
console.log(`ID: ${student2.ID}`)
console.log(`Age: ${student2.age}`)
console.log(`Is Active Student: ${student2.studentStatus}`)

console.log()

console.log(`Name: ${student3.fullName}`)
console.log(`ID: ${student3.ID}`)
console.log(`Age: ${student3.age}`)
console.log(`Is Active Student: ${student3.studentStatus}`)

