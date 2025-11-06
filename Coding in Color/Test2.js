const prompt = require("prompt-sync")();
let fruit = "APPLE";
console.log(fruit.toLowerCase());
console.log(fruit);

// or
//toLowercase method
let fruit1= "BANANA";
fruit1 = fruit1.toLowerCase();
console.log(fruit1);

// or
//charAt method
let fruit2= "orange";
fruit22 = fruit2.charAt(3);
console.log(fruit22);

// or
//charAt method
console.log(fruit2.charAt(2));

// or
//Split method
let str ="Java script";
console.log(str.split(" "));
console.log(str.split("  "));

// or
//Split method
let str1 ="x y z a";
console.log(str1.split(" "));

// or
//String Immutability
let str3 = "Hello";
str3[0] = "h";
console.log(str3);

// or
//Increment Operator
let a = 5;
a++;
console.log(a);

// or
//Modulus Operator
console.log(5 % 2);

// or
//Compound Assignment Operators
let b = 5;
b += 3;
console.log(b);

// or
let c = 23;
c -= 12;
console.log(c);


// or
//math.round method
let x1 = 19.84535;
console.log(Math.round(x1));

// or
//Math.floor and Math.ceil
let x2 =  23.64;
console.log(Math.floor(x2));
console.log(Math.ceil(x2));

// or
// Example: I will go to the picnic if it does not rain and if I have my lunch box
let doesNotRain = false;
let haveLunchBox = true;

if (doesNotRain && haveLunchBox){
    console.log("I will go to the picnic")
}else{
    console.log("I will not go to the picnic")
}


// or
// Example: I will study at the library if it's open and if I don't have any chores at home
let libraryIsOpen = true;
let noChores = false;

if (libraryIsOpen && noChores){
    console.log("I will study at the library")}
    else{
        console.log("I will not go to study at the library")}
    

// or
// I'll make a sandwich for lunch if there's bread and either peanut butter or jelly in the pantry
let haveBread = !false;
let havePeanutButter = !false;
let haveJelly = !true;

if (haveBread && havePeanutButter || haveJelly){
    console.log("I'll make sandwich for lunch.")
}else{
        console.log("I will not make sandwich for lunch.")}


// or
// If item's price is less than or equal to our available budget and the item is in stock
let itemPrice = 200;
let availableBudget = 175;
let itemInStock = true;


let withinBudget = (itemPrice == availableBudget) || (itemPrice < availableBudget);

if (itemInStock){
if (withinBudget){
    console.log("I will buy the item.")
}else{
    console.log("Item not in budget. I will not buy the item")}
}
else{
    console.log("Item not in stock")
}

// or
// Example: Traffic light colors
let v = prompt("Enter traffic light color (red, yellow, green):");
let inputV = v.toLowerCase();
console.log("Traffic light color:", inputV);
if (inputV == "red") {
    console.log("Stop")
} else if (inputV == "yellow") {
    console.log("Caution")
} else if (inputV == "green") {
    console.log("Go")
} else {
    console.log("Invalid color")
}

// or
//
let ageInput2 = prompt("Enter your age: ");
let hasIDCard = true;
ageInput2 = Number(ageInput2);

if (ageInput2 >= 18 && hasIDCard){
    console.log("You can vote.")
}else{
    console.log("You are not allowed to vote.")
}


// You want to decide how to spend your time based on whether it's the weekend and whether the weather is sunny.
// If it's the weekend and sunny, you'll go to the beach. If it's the weekend but not sunny, you will go to the movies.
// Otherwise, you will stay at home. 
// Write a program to simulate this decision-making process for various combinations of weekend and weather conditions.
let isWeekend = true;
let isSunny = false;
if (isWeekend && isSunny){
    console.log("I will go to the beach.")
}else if (isWeekend && !isSunny){
    console.log("I will go to the movies.")
}else{
    console.log("I will stay at home.")
}

