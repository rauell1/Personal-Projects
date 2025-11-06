// Write a program that generates a random number between 1 and 10. The program should print the number and then check if it equals 7.
// If not, it should generate a new random numbeer and repeat the process. Ensure that the loop runs at least once, even if the number is 7.

// Use math library
// Use do while loop

let randomNum = 0;
do {    
    randomNum = Math.floor(Math.random() * 10) + 1
    console.log(`Generated number: ${randomNum}`) // generates random number between 1 and 10
} while (randomNum !== 7);
// Math: get random number between 1 and 10
// print number and check if it equals 7

// number is not equal to 7, gene
// rate new random number and repeat process
// 