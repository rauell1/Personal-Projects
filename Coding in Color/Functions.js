// Functions

function greet (name){
    return `Hello, ${name}!`;
}
console.log(greet("Brian")); // Output: Hello, Brian!

// Function to add two numbers
function sum(a, b){
    return `The sum of the two numbers is ${a + b}`;
}
console.log(sum(5, 7)); // Output: 12

// Function increment
function increment(x){
    x++;
    console.log(`Inside function: ${x}`);
}
let num = 10;
increment(num);
console.log(`Outside function: ${num}`); // num remains 10
