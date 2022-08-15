// map method

const numbers = [2, 3, 4, 5, 6];

const square = function(number) {
    // console.log(number * number);
    return number * number;
    // it should have the return type
}

const squareNumber = numbers.map(square);
console.log(squareNumber);

// this squareNumner will always return new array



// getting firstName using map method
const users = [
    {firstName : "Ankur", age : 21},
    {firstName : "Piyush", age : 23},
    {firstName : "Kapil", age : 24},
]

const getName = users.map((ele) => {
    return ele.firstName;
})
console.log(getName);