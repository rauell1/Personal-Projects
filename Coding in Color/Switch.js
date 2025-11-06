// Loop through numbers 1 to 8, categorize weekdays and weekends

for (let i = 1; i <= 8; i++){
    if (i <= 5){
        // Weekdays
        switch (i){
            case 1: 
            console.log("Monday - Weekday");
            break;
            case 2: 
            console.log("Tuesday - Weekday");
            break;
            case 3: 
            console.log("Wednesday - Weekday");
            break;
            case 4: 
            console.log("Thursday - Weekday");
            break;
            case 5: 
            console.log("Friday - Weekday");
            break;
        }
    }else{
        // Weekends
        i === 6
        ? console.log("Saturday - Weekend")
        : i === 7
        ? console.log("Sunday - Weekend")
        : console.log("Invalid day")
    }
}