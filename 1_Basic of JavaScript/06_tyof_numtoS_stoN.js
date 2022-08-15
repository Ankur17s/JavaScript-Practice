// typeof operator ------->
// (this operator tells us the which type of the data type)

// in javaScript we have
// data types (premitive data types)
// String "ankur"
// number 1, 3, 4.5
// boolean
// undefined
// null
// BigInt
// Symbol

let firstName = "Ankur"
let age = 21;

// console.log(typeof firstName);
// console.log(typeof age);

// also we can directly check
// console.log(typeof "ankur");


// convert number to String ------>
// age = age + "";
// console.log(typeof age); //it convert 21 --> "21"
// or we also do like that
// console.log(typeof (age + ""));


// convert String to number
// let myStr = +"15"; // we can convert by including + before string
// console.log(typeof myStr)


// another way to convert number to string and string to number
let val = "144";
val = Number(val);
console.log(typeof val);

val = String(val)
console.log(typeof val);
