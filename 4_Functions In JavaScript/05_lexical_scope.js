// lexical scope
// scope = scope means where we access a specific variable and function
//         in our code.

// lexical environment = lexical environment is the local memory plus
//                       reference to the lexical environment of parent
//                (this parent is the lexical parent)

// lexical parent = lexical parent means where the actually that function
//                  sits inside the code

// the chain of lexical environment is known as scope chain.
// const myVar = "hello"
function app() {

    const myVar = "value1";

    function myFun1() {
        // const myVar = "value20"
        console.log("inside myFun1", myVar);
        // firstly it checks its local environment if the value is not found than
        // it goes to its lexical parent & if found than it prints

        function myFun2() {
            console.log(myVar);
        }
        myFun2();
    }

    console.log("inside app");
    // console.log(myVar);
    myFun1();
}
app();