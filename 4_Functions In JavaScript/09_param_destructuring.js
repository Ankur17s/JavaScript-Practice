// param destructuring

// mostly use in 
// object, react

const person = {
    firstName: "Ankur",
    gender: "male",
    age : 21
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// now using destructuring method -->
function printDetails({firstName, gender, age}) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);
