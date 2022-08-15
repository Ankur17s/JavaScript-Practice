// how to clone array ----->

let array1 = ["item1", "item2"];

// first way to clone array by slice method:-
// let array2 = array1.slice(0);
// this slice will clone the array1 into array2
// array2 is completely different from array1

// second way to clone array by concat method :-
// let array2 = [].concat(array1);

// new way to clone array
// spread opetator
// let array2 = [...array1];

// array1.push("item3")
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);


// adding new item in array2 

// 1 by slice method :-
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// 2 by concat method :-
// let array2 = [].concat(array1, ["item3", "item4"]);

// 3 by spread method :-
// let array2 = [...array1, "item3", "item4"];

console.log(array1);
console.log(array2);
