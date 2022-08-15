// intro to arrays ------->
// it is a order collection of items/elements
// it is a refrence type, it is also a object of javaScript
// it is mutable

// how to create array :-
let fruits = ["apple", "mango", "banana", "grapes"]
console.log(fruits); // accesing all items in arrys
console.log(fruits[1]); // accesing indexing wise elements
fruits[1] = "papaya"
console.log(fruits); // we can change items in array

let mixed = ["yellow", 1, 2.4, null, undefined]; // we can store all data types in arrays
console.log(mixed);
console.log(typeof fruits);

console.log(Array.isArray(fruits)); // it is used for checking that this is array or not


let obj = {} // object literal
console.log(typeof obj);