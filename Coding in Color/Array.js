// Empty Array

let emptyArray = [];
console.log(emptyArray); // Outputs: [] 
// Array with initial values

let numbers = [1, 2, 3, 4, 5];
let fruits =['apple', 'banana', 'cherry'];
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry']
console.log(fruits.length); // Outputs: 3
// Accessing elements in the array
console.log(fruits[1]); // Outputs: banana
console.log(numbers[3]); // Outputs: 4
console.log(fruits[2]); // Outputs: cherry

// Modifying an element in the array
numbers[2] = 10; // Change the third element from 3 to 10
console.log(numbers); // Outputs: [1, 2, 10, 4, 5]


// Adding elements to the array // Explaination: push() - Adds one or more elements to the end of an array and returns the new length of the array. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// Unshift means to add elements at the start of the array.
fruits.push('watermelon', 'mango', 'pineapple'); // Add 'watermelon', 'mango', and 'pineapple' to the end of the fruits array
numbers.unshift(0); // Add 0 to the beginning of the numbers array
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry', 'watermelon', 'mango', 'pineapple']
console.log(numbers); // Outputs: [0, 1, 2, 10, 4, 5]


// popping elements from the array // Explaination: pop() - Removes the last element from an array and returns that element. shift() - Removes the first element from an array and returns that element.
let lastFruit = fruits.pop(); // Removes the last element from the fruits array
let firstNumber = numbers.shift(); // Removes the first element from the numbers array
console.log(`The last fruit is ${lastFruit}`); // Outputs: pineapple
console.log(`The first number is ${firstNumber}`); // Outputs: 0
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry', 'watermelon', 'mango']
console.log(numbers); // Outputs: [1, 2, 10, 4, 5]  


// slicing the array // Explaination: slice(startIndex, endIndex) Explanation: startIndex - The index at which to begin extraction. endIndex - The index before which to end extraction (not included). 
// If endIndex is omitted, slice extracts through the end of the array.
let citrusFruits = fruits.slice(0, 2); // Get the first two elements from the fruits array
let middleNumbers = numbers.slice(1, 4); // Get elements from index 1 to 3 from the numbers array
console.log(citrusFruits); // Outputs: ['apple', 'banana']
console.log(middleNumbers); // Outputs: [2, 10, 4]


// splicing the array // Explaination: splice(startIndex, deleteCount, item1, item2, ...) 
// Explanation: startIndex - The index at which to start changing the array. deleteCount - The number of elements to remove from the array. item1, item2, ... - The elements to add to the array, starting from startIndex.
fruits.splice(2, 1, 'kiwi', 'grape'); // Remove 1 element at index 2 and add 'kiwi' and 'grape'
numbers.splice(3, 2, 20, 30); // Remove 2 elements at index 3 and add 20 and 30
console.log(fruits); // Outputs: ['apple', 'banana', 'kiwi', 'grape', 'watermelon', 'mango']
console.log(numbers); // Outputs: [1, 2, 10, 20, 30]    