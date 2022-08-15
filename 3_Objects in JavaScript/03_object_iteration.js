// how to itrate object

const person = {
    name: "Ankur",
    age: 21,
    hobbies: ["cricket", "music", "travel"]
}

// for in loop itration :-
// for(let key in person){
//     console.log(key); // it gives key of object
//     console.log(person[key]); // it gives the value of key
//     console.log(`${key} : ${person[key]}`); // for accesing values with keys
//     console.log(key, " : ", person[key]);
// }

// object.keys :-
// console.log(Object.keys(person)); //return keys in arrays of type object

// for(let key of Object.keys(person)){
//     console.log(key) //returns keys object
//     console.log(person[key]) //value of object
// }

