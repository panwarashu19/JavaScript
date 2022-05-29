// undefined

let firstName;
console.log(typeof firstName);
firstName="Ashu";
console.log(typeof firstName, firstName);

// const cannot remain undefined. we have to always define const.

var fname;
console.log(typeof fname);

// null

let myVar= null;
console.log(typeof myVar, myVar);
myVar="panwarashu19";
console.log(typeof myVar, myVar);

// Javascript Bug : typeof null -> null but the console shows it as object


//BigInt

let myNum=123;
console.log(myNum);

// Javascript has limit to define number datatype
console.log(Number.MAX_SAFE_INTEGER);  
// the above code will give  9007199254740991 which is maximum number that can be defined

let bigNum= BigInt(123456789012345678901234567890);
console.log(bigNum);

let num= BigInt(1234);
console.log(num);
console.log(typeof num);

// or BigInt can be defined as

let num2=125n;
console.log(num2);
console.log(typeof num2);

// BigInt cannot be mixed with number type. 