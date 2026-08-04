/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

// declare variables
let passenger: {
    name: String
    onlineCheckIn: boolean
    businessClass: boolean
    baggageWeightKg: number
} = {
    name: `Fajar Nugroho`,
    onlineCheckIn: true,
    businessClass: false,
    baggageWeightKg: 24
}

let printBoardingPass: boolean = false
let notes: String = ``

// deciding message
if (!passenger.onlineCheckIn) {
    console.log(`Please complete Online Check-In first`)
} else {
    console.log(`== Boarding Pass ==`)
    console.log(`Name: ${passenger.name}`)
    console.log(`Class: ${passenger.businessClass ? `Business` : `Economy`}`)
    if(passenger.baggageWeightKg >= 20) {
        notes = passenger.businessClass ? `Extra Baggage Allowed` : `Additional Baggage Fee Required` 
        console.log(`Notes: ${notes}`)
    }
}
