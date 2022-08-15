// sort method

// ascai value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


const array = [4, 200, 3, 1200, 670];
// expected output [3, 4, 200, 670, 1200]
array.sort();
console.log(array);
// this sort method will not give the expected output because javaScript firstly convert 
// this all number into string like this ["3", "4", "200", 670", "1200"] and than 
// execute the sort method in ascai value by reading only first interger 
// for ex 1200 will be treated like only '1' with ascai of 49

// for achieving expected output
array.sort((a, b) => {
    return a - b; // for decending order we use b - a
})
// array.sort((a, b) => a - b); // also works same
console.log(array);
// explanation
// [3, 4, 200, 670, 1200] in this array firstly it take 3 and 4 
// 3, 4 like this 
// a - b ----> 3 - 4 = -1
// a-b ----> positive(greater than 0) --- b, a (prints)
// a-b ----> negative(less than 0) a,b  (prints)
// in this way we can achieve our expected output


// sort price highToLow and lowToHigh
const products = [
    {productId: 1, proName: "p1", price: 100},
    {productId: 2, proName: "p2", price: 1200},
    {productId: 3, proName: "p3", price: 400},
    {productId: 4, proName: "p4", price: 350},
    {productId: 5, proName: "p5", price: 2000},
]

// lowToHigh
// products.sort((a, b) => {
//     return a.price - b.price;
// })
// console.log(products); //but this method will change our original product

// to overcome this we can clone our objects
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
})
console.log(lowToHigh); 

// highToLow
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
})
console.log(highToLow);