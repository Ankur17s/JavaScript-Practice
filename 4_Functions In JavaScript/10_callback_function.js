// callback function
// a function which takes function as an arguments and can be
// passed to another function as parameter is called Callback Function  

function myFunc(a) { //passed here as an parameter
    // console.log(a);
    a();
}

function myFunc2(){
    console.log("how are you");
}
myFunc(myFunc2); //taking function as an argument 


function fun2(name) {
    console.log(name)
}

function fun1(callback) {
    // console.log(callback);
    console.log("hello");
    callback("ankur");
}
fun1(fun2);