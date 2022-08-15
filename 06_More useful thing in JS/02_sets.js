// Sets (it is iterable)
// store data
// Sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicate allowed)

const numbers = new Set([1, 2, 3]);

// to check the particular value in sets
if(numbers.has(1)){
    console.log("1 is present");
} else {
    console.log("1 is not persent");
}

console.log(numbers);


const products = new Set();
products.add(1);
products.add(2);
products.add(3);
products.add(["item1", "item2"]) // this same will add because
products.add(["item1", "item2"]) // they have different memory location in array
console.log(products);
// for(let product of products){
//     console.log(product);
// }

// for extraction unique values from array
const myArray = [1, 2, 3, 3, 2, 4, 4, 5, 6, 7, 7, 9];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

// for getting length
let length = 0;
for(let count of uniqueElements){
    length++;
}
console.log(length);