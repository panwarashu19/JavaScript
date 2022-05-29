// truthy and falsy values

// falsy values: There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false of course.

// truthy values: a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. 

// we can use booleans with if else statements

let age=18;

if (age>=18){
    console.log("User can play PUBG.");
}

else {
    console.log("User can play mario");
}

// Even or Odd Number

let num=25;

if (num%2===0){
    console.log(`${num} is an even number.`);
}
else{
    console.log(`${num} is an odd number.`);
}

// Using if else with if-else
// false
// ""
// null
// undefined
// 0

let fname="";

if (fname){
    console.log(fname);
}else{
    console.log("fname is kinda empty...");
}

