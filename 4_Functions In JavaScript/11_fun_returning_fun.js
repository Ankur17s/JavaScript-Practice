// function returning function

// function myFunc() {
//     function hello(){
//         return "hello world";
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());


// also
function myFunc() {
    return function() {
        return "hello world"
    }
}
const ans = myFunc();
console.log(ans());