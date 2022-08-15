// rest parameter

function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log("c is", c);
}
// myFunc(2, 4, 1)
// but if we have many arguments to store all these in one parameter
// than we use rest parameter
// myFunc(1, 2, 3, 5, 6, 7, 8, 9)


function addSum(...numberes) {
    let total = 0;
    for (let number of numberes) {
        total += number;
    }
    return total;
}

const ans = addSum(1, 3, 4, 5, 6, 7);
console.log(ans);
