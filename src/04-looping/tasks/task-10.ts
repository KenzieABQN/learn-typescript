/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let studentsWhoSubmitted: number = 0
let studentsWhoDidntSubmit: number = 0
let passingStudents: number = 0
let revisingStudents: number = 0
let totalScore: number = 0

for (let i = 0; i < submissions.length; i++) {
    if (!submissions[i].submitted) {
        studentsWhoDidntSubmit++
    } else {
        studentsWhoSubmitted++
        if (submissions[i].score < 75) {
            revisingStudents++
        } else {
            passingStudents++
        }
    }

    totalScore += submissions[i].score
}

let averageScore: number = totalScore / submissions.length

console.log(`Students who submitted their assignment: ${studentsWhoSubmitted}`);
console.log(`Students who didnt submit their assignment: ${studentsWhoDidntSubmit}`);
console.log(`Students who pass: ${passingStudents}`);
console.log(`Students who must revise their assignment: ${revisingStudents}`);

console.log(`-------`);

console.log(`Students who did not submit:`)
for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted) {
        console.log(submissions[i].student);
    }
}

console.log()

console.log(`Students who must revise their assignment:`)
for (let i = 0; i < submissions.length; i++) {
    if(submissions[i].score < 75) {
        console.log(submissions[i].student);
    }
}

console.log(`-------`);

console.log(`Average Score: ${averageScore}`);


