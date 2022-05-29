// Data Types (Primitive):
// string : "Ashutosh"
// number : 1, 2, 3, 4
// booleans : true, false
// undefined : 
// null
// BigInt
// Symbol

// typeof operator : typeof is a JavaScript keyword that will return the type of a variable when you call it.

let age=24;
let firstName="Ashutosh";
console.log(typeof firstName);


// convert number to string
console.log(typeof age);
age = age +"";
console.log(typeof age);

// or

let ID=1234;
ID=String(ID);
console.log(typeof ID);


// convert string to number

let myStr="35";
console.log(typeof myStr);
myStr= +myStr; // let myStr = +"35";
console.log(typeof myStr);

// or

let num="1234";
num = Number(num);
console.log(typeof num);