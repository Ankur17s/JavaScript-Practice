// difference between dot and braket notation

// const person = {
//     name: "Ankur",
//     age: 21,
//     // hobbies: ["cricket", "music", "travel"],
//     // person hobbies: ["cricket", "music", "travel"]// wrong way
//     "person hobbies": ["cricket", "music"] //correct way 
// }
// console.log(person["person hobbies"]);
// console.log(person.person hobbies); //wrong way to access

const key = "email"
const person = {
    name: "Ankur",
    age: 21,
    "person hobbies": ["cricket", "music"] //correct way 
}

// person.key = "ankur@gmail.com"
person[key] = "ankur@gmail.com" //for accesing value of key
console.log(person);