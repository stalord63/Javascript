
/*-------------------------------------------------1st video--------------------------------*/
// Programming,computer is dumb.So set of instruction to tell the computer.
// Ecmascript is a standard,it was to create different document on js ,talk about the same language.
//Ecmascript can be interchangebly used as javascript.
//Js is very liberal on what it allows.
//Js is used to make websites interactively.
//Js is executed in browser.
//Node.js is used to run js outside the browser,Ryan Dahl.
//Node js is runtime environment.
//In html it can be used.
//Repl.it can be used to run js
//..hello js
/*----------------------------------2st video----------------------------------------------------------------------------*/
// variable in js can be changed at rutime
//dynamincally types languages.
// c is statically typed ,js is dynamincally typed.
//variable stores data as container

/* Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter not number.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.*/

/*----------------------------------3rs videos---------------------------------------------------------------
// var is globally scoped.
// let and const is blocked scoped.
// var-----
            The scope of a var variable is functional scope.
            It can be updated and re-declared into the scope.
            It can be declared without initialization.
            It can be accessed without initialization as its default value is “undefined”.
            hoisting done, with initializing as ‘default’ value.
// let------.
            The scope of a let variable is block scope.
            It can be updated but cannot be re-declared into the scope.
            It can be declared without initialization.
            It cannot be accessed without initialization otherwise it will give ‘referenceError’.
            Hoisting is done , but not initialized (this is the reason for the error when we access the let variable before declaration/initialization.

// const------  
            The scope of a const variable is block scope.
            It cannot be updated or re-declared into the scope.
            It cannot be declared without initialization.
            It cannot be accessed without initialization, as it cannot be declared without initialization.
            Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization.
/* dont use var much,use const instead */

/*---------------------------------4th video-----------------------------------------------------------*/

//nn bb ss u
/*JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
5. Null
7. Symbol
8. Object*/

/*The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date*/
 // default is undefined

 /*--------------------------------------5 th videos------------------------------------------------------*/
 //string + number= concantenate the string(aditya1) retrurns string only.
 // key can be added in a const object
 /*const aditya = {
  adi: "yoyo",
  branch: "it",
  age: "24",
  sex: "m"                // { adi: 'yoyo', branch: 'it', age: '24', sex: 'm', collage: 'kiet' }

}
aditya["collage"] = "kiet"
console.log(aditya)*/

//aditya is refrence to the object.
// the values inside it can be chnanged

/* object can be accessed by aditya["adi"] or aditya.adi*/
/*-----------------------------------6th video----------------------------------------------------------
/* Arithmatic operator
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/
//Assignment operator
/*Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/

//comparison operator
/*Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/

//logical operator
/*Operator	Description
&&	logical and
||	logical or
!	logical not
*/

//type operators
/*Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type */

//bitwise operator

/*Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.*/
/*Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
*/


/*-----------------------------------------------7th video--------------------------------------------------
//default value accepted by prompt is string.
//string to number is done by parseInt()
/* let a=prompt("what is ur age")
    console.log(typeof a) //string
    a=Number.parseInt(a)
    console.log(typeof a) //number */

/* Switch case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
*/

/*ternary opearator

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

*/

/*--------------------------------------------9th vdo---------------------------------------------
/*Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

/*for/in loop
/*const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}*/        // Output-John Doe 25


/* for-of loop
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}*/

/*----------------------------------------11th video ---------------------------------------------*/
//functions
/*function addition(a,b){
  return a+b;
}
console.log(addition(3,7))
*/

/*const hello = () => {
  return "Hello World!";
}

*/
/* const hello = (p,q)=>{
    return p+q;
}
*/

/*-----------------------------------------------12 the video-------------------------*/
//look loop.js
