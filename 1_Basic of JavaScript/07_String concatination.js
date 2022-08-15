// String concatination
// it is used to add two string in one variable

let firstName = "Ankur";
let LastName = "Srivastav";

let fullName = firstName + " " + LastName;
console.log(fullName);


let strVal1 = "10";
let strVal2 = "15";

let addVal = strVal1 + strVal2;
console.log(addVal);

// but if we want to add both string number than we convert them into number
let addNewVal = +strVal1 + +strVal2;
console.log(addNewVal);
console.log(typeof addNewVal);