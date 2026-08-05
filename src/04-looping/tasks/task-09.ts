/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let AStudents: number = 0
let BStudents: number = 0
let CStudents: number = 0
let DStudents: number = 0
let highestScore: number = 0
let lowestScore: number = students[0].score
let totalScore: number = 0

for (const student of students) {
    if (student.score < 70) {
        DStudents++
    } else if (student.score < 80) {
        CStudents++
    } else if (student.score < 90) {
        BStudents++
    } else {
        AStudents++
    }

    if (student.score > highestScore) {
        highestScore = student.score
    }

    if (lowestScore > student.score) {
        lowestScore = student.score
    }

    totalScore += student.score
}

let averageScore: number = totalScore / students.length

console.log(`Number of A Students: ${AStudents}`);
console.log(`Number of B Students: ${BStudents}`);
console.log(`Number of C Students: ${CStudents}`);
console.log(`Number of D Students: ${DStudents}`);

console.log(`-------`);

console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);