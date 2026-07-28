/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

let temperatureRecording: {time: String, temperature: number}[] = [
    {time: `08:00`, temperature: 24.5},
    {time: `09:00`, temperature: 25.1},
    {time: `10:00`, temperature: 26.8},
    {time: `11:00`, temperature: 28.4},
    {time: `12:00`, temperature: 30.2},
    {time: `13:00`, temperature: 31.1},
    {time: `14:00`, temperature: 30.7},
    {time: `15:00`, temperature: 29.3},
]

console.log(`Time | Temperature`)
console.log(temperatureRecording[0].time, temperatureRecording[0].temperature)
console.log(temperatureRecording[1].time, temperatureRecording[1].temperature)
console.log(temperatureRecording[2].time, temperatureRecording[2].temperature)
console.log(temperatureRecording[3].time, temperatureRecording[3].temperature)
console.log(temperatureRecording[4].time, temperatureRecording[4].temperature)
console.log(temperatureRecording[5].time, temperatureRecording[5].temperature)
console.log(temperatureRecording[6].time, temperatureRecording[6].temperature)
console.log(temperatureRecording[7].time, temperatureRecording[7].temperature)
console.log(temperatureRecording[8].time, temperatureRecording[8].temperature)