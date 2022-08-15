// filter method

const numbers = [1,2,3, 5, 6, 8, 10, 12, 9];

const isEven = function(number) {
    return number % 2 === 0;
}

const result = numbers.filter(isEven);
console.log(result);


// using arrow function for getting odd number
const result2 = numbers.filter((number) => {
    return number % 2 !== 0;
})
console.log(result2);
