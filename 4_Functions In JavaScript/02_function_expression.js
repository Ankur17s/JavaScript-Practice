// function expression

const happyBirthday = function() {
    console.log("Happy Birthday to you ....");
}
happyBirthday();

// add number
const addNumber = function(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(addNumber(5, 2, 6));

// check Even 
const isEven = function(num){
    return num % 2 === 0;
}
console.log(isEven(36));


// return first char of string
const firstChar = function(char) {
    return char[0];
}
console.log(firstChar("Srivastav"));