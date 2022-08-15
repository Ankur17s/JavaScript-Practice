// fill method
// value , start , end

// create array and fill all the negative elements
const myArr = new Array(10).fill(-1);
console.log(myArr);


const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// fill 0 in place of 4, 5 and 6
myArr2.fill(0, 3, 6); //value(0) startIndex(3), endIndex(6)
console.log(myArr2); //it will change my original array

