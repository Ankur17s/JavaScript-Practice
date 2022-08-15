// Maps
// map is an iterable

// store data in order fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between map and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string


// object leteral
// key -> string
// key -> symbol
// const person = {
//     firstName : "ankur",
//     age : 20,
//     1 : "one", // this 1 will converted into string
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// for(let key in person){
//     // console.log(key);
//     console.log(typeof key);
// }


// by using map we can make our keys of any type
// key value pair
const person = new Map();
person.set('firstName', 'Ankur');
person.set('age', '21');
person.set(1, 'one'); //here this 1 is a typeof number
console.log(person);
// console.log(person.get(1))
for(let key of person.keys()){
    console.log(key, typeof key)
}