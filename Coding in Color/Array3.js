// Array Functions
// Example: map(), filter(), reduce()

let numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with each number doubled
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // Outputs: [2, 4, 6, 8, 10]
console.log("Original array:", numbers); // Outputs: [1, 2, 3, 4, 5]

// Using filter() to create a new array with numbers greater than two
let filtered = numbers.filter(num => num > 2);
console.log("Filtered (greater than 2):", filtered); // Outputs: [3, 4, 5]

// String Functions
// Example: toUpperCase(), split(), join()
let message = "Hello World";

// Using Split to break the string into an array of words
let words = message.split(" ");
console.log("Split into words:", words); // Outputs: ['hello', 'world']

// Using replace to change 'world' to 'JavaScript'
let replaced = message.replace('world', 'JavaScript');
console.log("Replaced message:", replaced); // Outputs: "hello JavaScript"

// Math Functions
// Example: Math.max(), Math.min(), Math.random()
let a = 10;
let b = -20;
let c = 5;

// Using Math.max() to find the largest number
let maxNum = Math.max(a, b, c);
console.log(`Maximum number: ${maxNum}`); // Outputs: 10

// Using Math.min() to find the smallest number
let minNum = Math.min(a, b, c);
console.log(`Minimum number: ${minNum}`); // Outputs: -20

// Using Math.random() to generate a random number between 0 and 1
let randomNum = Math.random();
console.log(`Random number between 0 and 1: ${randomNum}`);
console.log(`Random number between 0 and 1 (floored): ${Math.floor(randomNum)}`);
console.log(`Random number between 0 and 10: ${Math.floor(randomNum * 10)}`);
console.log(`Random number between 1 and 10 (ceiled): ${Math.ceil(randomNum * 10)}`);
console.log(`Random number between 0 and 10: ${Math.ceil(randomNum * 11)}`);