// objects (reference type)
// arrays are good but not sufficient for real world data
// objects store key value pair
// objects don't have index

// how to create objects
const person = {
    name: "Ankur",
    age: 21,
    hobbies: ["cricket", "music", "travel"]
}
console.log(person);

// how to access data from object
console.log(person.name);
console.log(person.age);
console.log(person["name"]); // another way to access value from object

// how to add key value pair to objects
person.gender = "male";
// person["gender"] = "male" // 2nd way for add value in object
console.log(person);