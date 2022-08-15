// trim()
// toUpperCase()
// toLowercase()
// slice

let firstName = "   ankur    "

console.log(firstName.length);

// trim() -> (it is use to remove the extra spaces)
firstName = firstName.trim(); // Ankur 
console.log(firstName);
console.log(firstName.length);


// toUpperCase()
console.log(firstName.toUpperCase());
// another way
// firstName = firstName.toUpperCase();
// console.log(firstName);


// toLowerCase()
let lastName = "SrIVAstAv"
console.log(lastName.toLowerCase());


// slice
let name = "Rajveer";

// start index
// last index

let newString = name.slice(0, 3);
console.log(newString);