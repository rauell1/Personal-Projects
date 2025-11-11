// Accessing Characters in a String
let message = "firstname lastname"

let f_initial = message.charAt(0)
console.log(f_initial)

let sliced = message.slice(10,18)
console.log(sliced)

let l_initial = message.charAt(10)
console.log(l_initial)

// Using indexOf to find the position of a character
let message1 = "United Kingdom"
let spaceIndex = message1.indexOf(" ")
let slicedd = message1.substring(spaceIndex + 1)
console.log(slicedd)


// Trimming Whitespace
let message2 = "   United States of America   "
let trimmedMessage = message2.trim()
console.log(trimmedMessage)
