// function inside function

function app() {

    const myFunc = () => {
        console.log("my name is myFunc");
    }

    const addTwoNum = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (num1, num2) => num1 * num2;

    console.log("inside app");
    myFunc();
    console.log(addTwoNum(5, 2));
    console.log(mul(5, 2));

}

app();