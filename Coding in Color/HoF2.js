
// How can higher order functions be utilized to filter an array based on specific criteria?
// Provide an example where an array of numbers is filtered to include only even numbers and add numbers greater than three.

// Higher order Function for filtering
function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    
    }
    return result;
}
        // Callback function to check for even numbers
        function isEven(num) {
            return num % 2 === 0;
        }       
        // Callback function to check for numbers greater than three
        function isGreaterThanThree(num) {
            return num > 3;
        }

        // Using the higher-order function to filter even numbers
        let numberrs = [1, 2, 3, 4, 5, 6];
        console.log(filterArray(numberrs, isEven)); // [2, 4, 6]
        console.log(filterArray(numberrs, isGreaterThanThree)); // [4, 5, 6]
