// Variables and Data Types in JavaScript
// Demonstrating variable declaration, assignment, and basic operations
// Commands to run the file: node test.js
// Make sure to install prompt-sync package using: npm install prompt-sync

const prompt = require("prompt-sync")();

let  number = 42 // the number being stored in the variable
console.log("Stored number:" , number);

let mutableVariable = 10; // Can be assigned
const immutableVariable = 20; // cannot be assigned

console.log("MV:", mutableVariable);
console.log("IMV:", immutableVariable);

mutableVariable = 15; // re-assigning the value
console.log("Updated MV:", mutableVariable);
//immutableVariable = 25; // This will cause an error
console.log("Updated IMV:", immutableVariable); // This line will not be executed due to the error above

//Camel case standard looks like this camelCase 

let isJavaScriptFun = true; // Boolean Value
console.log("Is JavaScript Fun?:", isJavaScriptFun);

let x = 5;
let y = 10;
console.log(x+y);
console.log("x < y" , x < y);
console.log("x > y" , x > y);
console.log("x === y" , x === y);
console.log("x !== y", x !== y);

let a = 6;
let b =2;
console.log("Complex Statement:" , (x < y) && (a > b));  // Both conditions need to be true
console.log("Complex Statement:" , (x > y) && (a > b)); // Both conditions need to be true
console.log("Complex Statement 2:" , (x > y) || (a > b));// Either one condition is true
console.log("Complex Statement 2:" , (x < y) || (a > b)); // Either one condition is true


let userInput = prompt("What is your name?");
console.log(" Hello, my name is ", userInput );

let ageInput = prompt("Enter your age: ");
ageInput = Number(ageInput); // Convert string input to number
console.log("Next year, you will be", ageInput + 1 , "years old.");
if (ageInput >= 18) {
    console.log("You are an adult.");
} else {
        console.log("You are a child.");
    }

const userInput2 = prompt("Enter a number:");
console.log("userInput2", userInput2);

let variable = 5;

//Addition
variable +=2;
console.log("+= operator", variable);

//Subtraction
variable -=2;
console.log("-= operator", variable);

// Multiplication
variable =2;
console.log("*= operator", variable);

//Division
variable /=2;
console.log("/= operator", variable);

//Exponentiation
variable **=2;
console.log("**= operator", variable);

//Increment
variable ++;
console.log("++= operator", variable);

//Decrement
variable --;
console.log("--= operator", variable);

let trucks = 3;
console.log("I have " + trucks + " trucks.");
trucks = trucks + 2;
console.log("Now I have " + trucks + " trucks.");
trucks += 2;
console.log("After +=2, I have " + trucks + " trucks.");
trucks -= 1;
console.log("After -=1, I have " + trucks + " trucks.");
