"use strict";
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. The numbers in the table specify the first browser version that fully supports the directive. You can use strict mode in all your programs.

//This is a Comment
//Console.log is used to print something
console.log("Hello World!");

// variables

// declare a variable
var first_name="Ashutosh";
var last_name="Panwar";

// use a variable
console.log(first_name + " "+ last_name);

// change value
first_name="Ashu";

console.log(first_name + " "+ last_name);

// Let Keyword: The let keyword is used to declare variables in JavaScript. The var keyword can also be used to declare variables, but the key difference between them lies in their scopes. var is function scoped while let is block scoped
let email="panwarashu2101@gmail.com";
console.log(email);

// Declare Constants
//Values of const cannot be changed
const pi=3.14;
console.log(pi);