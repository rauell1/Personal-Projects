// You want to categorize individuals into age groups based on their age.
// The categories are:
// "Child" for ages 0-12
// "Teenager" for ages 13-17
// "Adult" for ages 18-64
// "Senior" for ages 65 and above
// If the age is invalid (e.g., negative number), print " Invalid age."
// Write a program that tests various ages and outputs the appropriate age group for each case.
// Define prompt
const prompt = require("prompt-sync")();
let ageInput = prompt("How old are you?: ");
ageInput = Number(ageInput);
ageInput = Math.floor(ageInput); // Convert to Integer by flooring the number
if(ageInput >= 0 && ageInput <= 12) {
    console.log("Your are ", ageInput , " years old. You are still a child.")
}else if(ageInput >=13 && ageInput <=17){
    console.log("You are ", ageInput , " years old. You are a teenager.")
}else if(ageInput >=18 && ageInput <= 64){
    console.log("You are " , ageInput, " years old. You are an adult.")
}else if(ageInput > 65){
    console.log("You are " , ageInput, " years old. You are a senior.")
}else{
    console.log("Invalid age")
}


// or
// 