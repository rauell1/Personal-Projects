// Pass by value ( numbers and strings  are passed by value  in JavaScript)
function updateValue(value) {
    value = value + 22;
    return value;
}
const prompt = require('prompt-sync')();
let userInput = prompt("Enter a number:");
let number = Number(userInput);
console.log(updateValue(number)); // Outputs: 42
console.log(`You entered the number${number}`); // Outputs: You entered <user input>

// Pass by reference (Arrays and Objects)

function updateArray(arr){
    arr.push(4);
    return arr;
}
let myArray = [1, 2, 3];
console.log(updateArray(myArray)); // Outputs: [1, 2, 3, 4]
console.log(myArray); // Outputs: You entered the array: 1,2,3,4