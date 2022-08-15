// default parameter

function addTwo(a, b) {
    if(typeof b === "undefined"){
        b = 0; //we use this method before ES6
    }
    return a + b;
}
console.log(addTwo(2)); //if we don't pass 2nd argument
//  than we have to set the default parameter for that


// new way
function addSum(a, b=0) {
    // here we can set the default value of b
    return a  + b;
}
console.log(addSum(2));