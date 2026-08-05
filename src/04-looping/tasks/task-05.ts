/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedalWinners = 0
let silverMedalWinners = 0
let bronzeMedalWinners = 0
let studentsWithoutMedals = 0
let totalScore = scores[0]

for (const score of scores) {
    
    if (score < 75) {
        studentsWithoutMedals++
    } else if (score <= 85) {
        bronzeMedalWinners++
    } else if (score <= 94) {
        silverMedalWinners++
    } else {
        goldMedalWinners++
    }
}

let averageScore: number = totalScore / scores.length

console.log(`Number of Gold Medal Winners: ${goldMedalWinners}`)
console.log(`Number of Silver Medal Winners: ${silverMedalWinners}`)
console.log(`Number of Bronze Medal Winners: ${bronzeMedalWinners}`)
console.log(`Students without medals: ${studentsWithoutMedals}`)
console.log(`Average competition score: ${averageScore}`)