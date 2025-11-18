// What is a higher-order function and how can it be used to process an array with a callback function?
// Provide an example where an array is processes to produce another array of doubled and squared values.

// Higher order Function
function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
// Call the callback function to process each element
function double(num){
    return num * 2;
}

function square(num) {
    return num * num;
}

// Using the higher-order function to double and square values
let numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double)); // [2, 4, 6, 8, 10
console.log(processArray(numbers, square)); // [1, 4, 9, 16, 25

