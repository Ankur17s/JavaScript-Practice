// template string

let firstName = "Ankur";
let age = 22;

// my name is Ankur and my age is 22

// let aboutme = "my name is " + firstName + " and my age is " + age;
// this is a lengthy method to print all this so then,
// template string comes into picture

let aboutme = `my name is ${firstName} and my age is ${age}`
console.log(aboutme);