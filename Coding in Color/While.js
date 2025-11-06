// Write a program that asks a user to input a number greater than 10. Keep asking until the user provides a valid number.
// User prompt-sync
// Use while loop
const prompt = require("prompt-sync")(); 

// loop (Either for or while)

// get input from the user
let number = prompt ("Please enter a number greater than 10: ");

while (number <= 10) {
    number = prompt ("Invalid input, please enter a number greater than 10: ")
} 
console.log(`You entered a valid number. The number is:  ${number}`)

// Get input from the user for a number between 10 and 20
let number1 = prompt ("Please enter a number greater than ten and less than twenty: ");

while (number1 <= 10 || number1 >= 20){
    number1 = prompt("Invalid input, please enter a number greater than ten and less than twenty: ")
}
console.log(`You entered a valid number. The number is: ${number1}`)