/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

// declare variables
const name: String = `Nadia Putri`
const premiumMember: boolean = true
const roomAvailable: boolean = false

console.log(`Name: ${name}`)

// checking for room availability
if(roomAvailable) {
    // determining room upgrade value
    console.log(`Room Reserved`);
    if (premiumMember) {
        console.log(`You are eligible for a room Upgrade!`);
    }
} else {
    // determining if allowed on waiting list
    console.log(`Room unavailable :(`);
    if(premiumMember) {
        console.log(`You are put on the waiting list!`);
    }
}