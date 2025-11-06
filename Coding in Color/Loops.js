// Count Up from 1 to 20
for (let j = 1; j <=20; j++){
    console.log(`The number is: ${j}`);
}


// Count Down from 30 to 1
for (let k = 30; k >=1; k--){
    console.log(`The number is: ${k}`);
}


//Count up from 1 to 15 but only print odd numbers
for (let m = 1; m <= 15; m +=2){
    console.log(`The odd number is: ${m}`);
}


// Count up from 1 to 15 but only print even numbers
for (let n = 2; n <= 15; n +=2){
    console.log(`The even number is: ${n}`);
}


// Loop through numbers 1 to 10 and check if they are even or odd
for (let p = 1; p <=10; p++){
    if (p % 2 === 0){
        console.log(`${p} is an even number.`);
    } else {
        console.log(`${p} is an odd number.`);     
    }
}


// Counting Up to 7 and printing the day of the week
for (let i = 1; i <=7; i++){
    console.log(`Iteration ${i}`);

    if (i === 1){
        console.log("Sunday");
    }
    else if (i === 2){
        console.log("Monday");
    }
    else if (i === 3){
        console.log("Tuesday");
    }
    else if (i === 4){
        console.log("Wednesday");
    }
    else if (i === 5){
        console.log("Thursday");
    }
    else if (i === 6){
        console.log("Friday");
    }
    else{
        console.log("Saturday");
    }
}    

// Alternative approach using an array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (let i = 1; i <= 7; i++) {
    console.log(`Iteration ${i}: ${days[i - 1]}`);
}


// Generte a pattern
//*
//**
//***
//****
//*****

let row = "";
for (let i = 1; i <=80; i++){
    row += "*";
    console.log(row);
}

