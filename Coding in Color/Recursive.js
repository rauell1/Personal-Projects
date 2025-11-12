function recursiveFactorial (n) {
    if (n == 0 || n == 1){
        return 1
    } else {
        return n * recursiveFactorial(n - 1);
    }
}

console.log(recursiveFactorial(5)); // Outputs: 120


// Recursive Countdown 
function recursiveCountdown(m) {
    if (m == 0){
        console.log("Blast Off!");
    } else {
        console.log(m);
        return recursiveCountdown(m - 1);      
    }
}
recursiveCountdown(5); // Outputs: 5 4 3 2 1 Blast Off!

// Countdown Iterative
function iterativeCountdown(m) {
    for (let i = m; i > 0; i--){
        console.log(i);
    }
    console.log("Blast Off!");
}
iterativeCountdown(10); // Outputs: 10 9 8 7 6 5 4 3 2 1 Blast Off!

// Palindrome Check
function checkPalindrome(str) {

    //Base Case
    if (str.length <= 1){   
        return true;
    } else if (str.charAt(0) !== str.charAt(str.length - 1)){
        return false;
    } else {
        return checkPalindrome(str.substring(1, str.length - 1));
    }
}
console.log(checkPalindrome("racecar")); // Outputs: true
console.log(checkPalindrome("hello")); // Outputs: false    
console.log(checkPalindrome("madam")); // Outputs: true
console.log(checkPalindrome("step on no pets")); // Outputs: true