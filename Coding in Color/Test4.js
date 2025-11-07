let car = {
    make: 'Toyota', 
    model: 'Camry',
    year: 2020,
    color: 'blue'   
}

console.log(car.make);   // Output: Toyota
console.log(car['model']); // Output: Camry
console.log(car.year);   // Output: 2020
console.log(car['color']); // Output: blue  

car.color = 'red';
console.log(["color"]);   // Output: red 
console.log(car['color']); // Output: red
console.log(car.color);   // Output: red   


let robot = {
    name: 'Gemini',
    greeting: function() {
        return (`Hello, human! My name is ${this.name}.`);
    }
};

console.log (robot.greeting()); // Output: Hello, human! My name is Gemini.


