/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type AttendanceData = {
    ID: number
    name: String
    date: String
    checkInTime: String
    checkOutTime: String
    totalWorkingHours: number
    present: boolean
}

let employee1: AttendanceData = {
    ID: 1942,
    name: `Paul`,
    date: `January 5th 1961`,
    checkInTime: `12.00`,
    checkOutTime: `15.00`,
    totalWorkingHours: 3,
    present: true
}

let employee2: AttendanceData = {
    ID: 1943,
    name: `George`,
    date: `November 6th 1994`,
    checkInTime: `14.00`,
    checkOutTime: `16.00`,
    totalWorkingHours: 2,
    present: true
}

let employee3: AttendanceData = {
    ID: 1940,
    name: `John`,
    date: `March 12th 1962`,
    checkInTime: ``,
    checkOutTime: ``,
    totalWorkingHours: 0,
    present: false
}

console.log(`ID: ${employee1.ID}`)
console.log(`name: ${employee1.name}`)
console.log(`date: ${employee1.date}`)
console.log(`check in time: ${employee1.checkInTime}`)
console.log(`check out time: ${employee1.checkOutTime}`)
console.log(`total working hours: ${employee1.totalWorkingHours}`)
console.log(`was present: ${employee1.present}`)

console.log()

console.log(`ID: ${employee2.ID}`)
console.log(`name: ${employee2.name}`)
console.log(`date: ${employee2.date}`)
console.log(`check in time: ${employee2.checkInTime}`)
console.log(`check out time: ${employee2.checkOutTime}`)
console.log(`total working hours: ${employee2.totalWorkingHours}`)
console.log(`was present: ${employee2.present}`)

console.log()

console.log(`ID: ${employee3.ID}`)
console.log(`name: ${employee3.name}`)
console.log(`date: ${employee3.date}`)
console.log(`check in time: ${employee3.checkInTime}`)
console.log(`check out time: ${employee3.checkOutTime}`)
console.log(`total working hours: ${employee3.totalWorkingHours}`)
console.log(`was present: ${employee3.present}`)
