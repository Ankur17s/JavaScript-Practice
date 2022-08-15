// Arrays push pop -------->

// push --->
let fruits = ["apple", "mango", "banana"];
console.log(fruits);
fruits.push("papaya"); //this will add item in the last position in array
console.log(fruits);

// pop --->
fruits.pop(); // this will remove the item from last element in array 
console.log(fruits.pop()); // also return that item
console.log(fruits);

// Array shift unshift ----------->

// unshift --->
// it is used to add item in the starting in the array
fruits.unshift("grapes");
console.log(fruits);

// shift --->
let popedFruit = fruits.shift(); // this will remove the first item in array
console.log(fruits);
console.log("removed fruit is", popedFruit);


// push and pop is faster than shift and unshift
