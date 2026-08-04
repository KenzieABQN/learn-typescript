/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

// declare variables
const patient: {
    name: String
    criticalCondition: boolean
    hasAppointment: boolean
    age: number
    hasInsurance: false
} = {
    name: `Siti Rahma`,
    criticalCondition: false,
    hasAppointment: true,
    age: 67,
    hasInsurance: false
}

let destination: String = ``
let priorityQueue: boolean = false

// check if patient is critical
if (patient.criticalCondition) {
    destination = `Emergency Room`
} else {
    // check for appoinment
    if(patient.hasAppointment) {
        priorityQueue = patient.age ? true : false
    }
    // check for insurance
    destination = patient.hasInsurance ? `Insurance Registration Center` : `General Registration Center`
}

// print output
console.log(`Name: ${patient.name}`)
console.log(`Priority Queue: ${priorityQueue}`)
console.log(`Assigned to ${destination}`)

