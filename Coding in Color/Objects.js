

let person = {
    name: 'Alice',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Wonderland',
        zip: '12345'
    },
    contact: {
        email: 'alice@example.com',
        phoneNumber: '123-456-7890'
    }  
};

console.log(person.name); // Output: Alice
console.log(person['age']); // Output: 30
console.log(person.address.city); // Output: Wonderland
console.log(person.address) // Output: { street: '123 Main St', city: 'Wonderland', zip: '12345' }
console.log(person.contact); // Output: { email: 'alice@example.com', phoneNumber: '123-456-7890' } 

