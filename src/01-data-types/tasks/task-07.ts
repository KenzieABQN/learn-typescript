/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Information = {
    student: {
        ID: String
        fullName: String
        grade: number
    }
    course: {
        ID: String
        title: String
        instructor: String
        learningHours: number
    }
    registrationDate: String
    paymentComplete: boolean
}

const student1: Information = {
    student: {
        ID: `123BKC`,
        fullName: `John Evans Chris Stephenson`,
        grade: 10
    },
    course: {
        ID: `98BJK`,
        title: `Computer Science`,
        instructor: `David Malan`,
        learningHours: 4
    },
    registrationDate: `May 24th 1994`,
    paymentComplete: true
}

const student2: Information = {
    student: {
        ID: `1283A`,
        fullName: `Slee Ping`,
        grade: 9
    },
    course: {
        ID: `97HJL`,
        title: `Psychology`,
        instructor: `Tirta Adi Sucipto`,
        learningHours: 10
    },
    registrationDate: `June 10th 2024`,
    paymentComplete: false
}

const student3: Information = {
    student: {
        ID: `CPRISV`,
        fullName: `Ludwig Aghgren`,
        grade: 12
    },
    course: {
        ID: `YTPP1`,
        title: `Medicine`,
        instructor: `Mikhail Varshavsky`,
        learningHours: 50
    },
    registrationDate: `December 20th 2005`,
    paymentComplete: true
}

console.log(`== Student 1 ==`)
console.log(`- Student Information -`)
console.log(`ID: ${student1.student.ID}`)
console.log(`Full Name: ${student1.student.fullName}`)
console.log(`- Course Information- `)
console.log(`Course Title: ${student1.course.title}`)
console.log(`Course ID: ${student1.course.ID}`)
console.log(`Instructor: ${student1.course.instructor}`)
console.log(`Total Learning Hours: ${student1.course.learningHours}`)
console.log(`Date of Registration: ${student1.registrationDate}`)
console.log(`Payment is Complete? ${student1.paymentComplete}`)

console.log()

console.log(`== Student 2 ==`)
console.log(`- Student Information -`)
console.log(`ID: ${student2.student.ID}`)
console.log(`Full Name: ${student2.student.fullName}`)
console.log(`- Course Information- `)
console.log(`Course Title: ${student2.course.title}`)
console.log(`Course ID: ${student2.course.ID}`)
console.log(`Instructor: ${student2.course.instructor}`)
console.log(`Total Learning Hours: ${student2.course.learningHours}`)
console.log(`Date of Registration: ${student2.registrationDate}`)
console.log(`Payment is Complete? ${student2.paymentComplete}`)

console.log()

console.log(`== Student 3 ==`)
console.log(`- Student Information -`)
console.log(`ID: ${student3.student.ID}`)
console.log(`Full Name: ${student3.student.fullName}`)
console.log(`- Course Information- `)
console.log(`Course Title: ${student3.course.title}`)
console.log(`Course ID: ${student3.course.ID}`)
console.log(`Instructor: ${student3.course.instructor}`)
console.log(`Total Learning Hours: ${student3.course.learningHours}`)
console.log(`Date of Registration: ${student3.registrationDate}`)
console.log(`Payment is Complete? ${student3.paymentComplete}`)

console.log()

