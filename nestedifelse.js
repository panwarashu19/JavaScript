// Nested if else

let num=18;

let userGuess= +prompt("Guess a number:");
//prompt always take input in string format.

console.log(typeof userGuess, userGuess);

if (userGuess===num){
    console.log("Your Guess is right!");
}else{
    if (userGuess<num){
        console.log("Your guess is less than the num!");
    }else{
        console.log("Your guess is more than the num!");
    }
    
}