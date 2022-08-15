// block scope vs fuction Scope


// let and const are block scope
// var is function scope

// these curly braces are block
{
    let firstName = "Ankur"
    // if we declare any variable inside block using let and const
    // than we can only access that variable inside that particular block
    // and we cannot access that outside the block
}
// console.log(firstName); //this will give reference error

{
    var lastName = "srivastav"
    // but we access this variable in case of var
}
console.log(lastName);