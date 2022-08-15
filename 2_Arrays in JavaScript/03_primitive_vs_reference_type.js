// premitive vs reference types

// premitive data type:-
// let num1 = 5;
// let num2 = num1;
// console.log("value of num1 is",num1);
// console.log("value of num2 is",num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value of num1 is",num1);
// console.log("value of num2 is",num2);


// reference type
let arr1 = ["item1", "item2"];
let arr2 = arr1;
console.log("arr1 is", arr1);
console.log("arr2 is", arr2);

arr1.push("item3");
console.log("after pushing item in arr1");

console.log("arr1 is", arr1);
console.log("arr2 is", arr2);
