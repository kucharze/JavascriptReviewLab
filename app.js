//Variables and data types

//1. How do we assign a value to a vairable?
let item = "Hello";

//2. How do we change the value of a variable
item = "new";

//3 How do we assign an existing variable to a new variable
let item2 = item;

//4. What are declare, assign, define
//Declare - creating a variable and give it a name and data type
//Assign - assigning a variable a value with the = operator
//Define - assign a variable a value

//5 what is pseudocoding and why should you do it?
//Giving a coding blueprint to what should happen
//Gives an idea to build a structure for the code

//6. What percentage of time should be spent thinking about how
//you're going to solve a problem vs actually typing in code to solve it?

//You should spend about 10 mins solving the problem and then about an hour to write the code

//B Strings
//1,2
let firstVariable = "Hello World";

//3
firstVariable = 5;

//4
let secondVariable = firstVariable;

//5
secondVariable = "New String";

//6
//The value of first variable should be 5 in this instance

//7
let yourName = "Zack";

let sentence = "Hello my name is " + yourName;

//C Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

//D The farm

let animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// E Driver's ed
let age = 15;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young");
}
