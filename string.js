// string indexing
let firstName="Ashutosh";

// A s h u t o s h
// 0 1 2 3 4 5 6 7 

console.log(firstName[0]);

// length of string
console.log(firstName.length);

// last Index= length - 1

console.log(firstName[firstName.length-1]);

// string methods

// trim()

let lastName ="  Panwar  ";
console.log(lastName.length);
console.log(lastName);

lastName = lastName.trim();
console.log(lastName.length);
console.log(lastName);


// toUpperCase() : Change every character of string to upper case
console.log(firstName.toUpperCase());

// toLowerCase() : change every character of the string to lower case
firstName=firstName.toLowerCase();
console.log(firstName);

// slice() : slice the string between two index

let newString= firstName.slice(0, 4);
console.log(newString);