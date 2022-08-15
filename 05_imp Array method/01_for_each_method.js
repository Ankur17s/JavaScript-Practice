// for each method

const numbers = [2, 3, 4, 5];

// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// }

// for(let i = 0; i < numbers.length; i++){
//     myFunc(numbers[i], i)
// }

// now using for each
// numbers.forEach(myFunc) //this will take fun as input and returs the same output

// making callback fun inside this loop
// numbers.forEach(function(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// })

// // multiply by 2
// numbers.forEach(function(number) {
//     console.log(2 * number);
// }) 


// print firstName from user
const users = [
    {firstName : "Ankur", age : 21},
    {firstName : "Piyush", age : 23},
    {firstName : "Kapil", age : 24},
];

users.forEach(function(user, index) {
    // console.log(user.firstName, index);
})

// using arrow function
users.forEach(({firstName, age}) => {
    console.log(firstName, age);
})

// using for of loop
for(let user of users) {
    console.log(user.firstName);
}