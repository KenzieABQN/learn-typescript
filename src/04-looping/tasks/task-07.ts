/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents: number = 0
let absentStudents: number = 0

for (const attendance of attendances) {
  if (attendance.present) {
    presentStudents++
  } else {
    absentStudents++
  }
}

const attendancePercentage: number = (presentStudents / attendances.length) * 100

console.log(`Present Students: ${presentStudents}`)
console.log(`Absent Students: ${absentStudents}`)

console.log(`-------`)

console.log(`Names of absent students:`)
for (const attendance of attendances) {
  if(!attendance.present) {
    console.log(attendance.name);
  }
}
console.log(`-------`)
console.log(`Attendance Percentage: ${attendancePercentage}%`);
