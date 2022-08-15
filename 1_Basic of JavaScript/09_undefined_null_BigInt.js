// undefined ----->
/*
when we declare any varible using var and let than initially
it has a undefined keyword assign to that variable until we
have initialize it.
but in case of const we have initialized that constant value
otherwise it will give an error
*/
let firstName;
console.log(firstName);
firstName = "ankur";
console.log(firstName);

// null ------>
// null basicall means nothing or empty
let myVariable = null;
console.log(myVariable);

// bur if we check the typeof of null
console.log(typeof null);
// it gives us object and this is a bug or error by the javaScript 
 

// BigInt ------>

// console.log(Number.MAX_SAFE_INTEGER);
// it tells us how much we can store number safely in our variable
// but if we want to store number more than this than BigInt comes into picture

let num = BigInt(443423552352345534); // here we are making BigInt
// we can also store small number into BigInt
console.log(num);

// we can make BigInt by two ways are given below
let val1 = BigInt(10);
let val2 = 20n;
console.log(val1 + val2);

// we cannot add BigInt and normal number togher and which gives us type error
