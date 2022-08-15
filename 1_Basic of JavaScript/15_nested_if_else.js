// nested if else

// winning number = 19
// 19 your guess is right
// > 19 to0 low
// < 19 too high

let winningNumber = 19;
let userGuess = +prompt("Guess Your Number")
// console.log(userGuess);

if(userGuess === winningNumber){
    console.log("your guess is right");
} else{
    if(userGuess < winningNumber){
        console.log("too low!");
    } else {
        console.log("too High!");
    }
}