// fuction declaration
function happyBirthday() {
    console.log("happy birthday to you .......");
}
// happyBirthday();

function addNum() {
    // console.log(2 + 4);
    return 2 + 4;
}
// addNum();
// console.log(addNum());
// const returnValue = addNum();
// console.log(returnValue);

function addTwoNum(num1, num2) { //parameters
    return num1 + num2;
}

const addition = addTwoNum(2, 5); //arguments
console.log(addition);


// Q print true if the number is even otherwise false

function isEven(number) {
    // return number % 2 === 0 ? true : false;
    return number % 2 === 0;
    // if (number % 2 === 0) {
    //     return true;
    // } 
    //     return false;
}
const ans = isEven(8);
console.log(ans);


// print first char of string
function myStr(str){
    // return str.slice(0, 1);
    return str[0];
} 
console.log(myStr("ankur"));


// take input arr and target and return the index of tartget
function myTarger(arr, target) {
    // for(let item in arr){
    //     if(arr[item] === target){
    //         return item;
    //     }
    // }
    // return -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}
const myArray = [24, 20, 15, 39, 50];
const myAns = myTarger(myArray, 50)
console.log(myAns);