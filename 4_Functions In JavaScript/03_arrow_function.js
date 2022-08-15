// arrow function

const happyBirthday = () => {
    console.log("happy birthday to you.....");
}
happyBirthday();

// add two numbers
const addNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addNum(2, 5));

// check even
// const isEven = (number) => {
//     return number % 2 === 0;
// }
const isEven = number => number % 2 ===0; //this also work same for single parameter
const ans = isEven(10);
console.log(ans);

// accessing first character
const firstChar = (char) => {
    return char[0];
}
console.log(firstChar("shak"));

// get target from array
const myArrFun = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}

const array = [23, 2, 21, 72, 90];
const result = myArrFun(array, 21);
console.log(result);