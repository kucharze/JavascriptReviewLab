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

//Loops

//A the basics
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 400; i++) {
  console.log(i);
}

for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

//B get even
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(i);
  }
}

//C Give me 5
for (let i = 0; i < 100; i++) {
  if (i % 5 === 0) {
    console.log(`I found a ${i}, High Five!`);
  }
  if (i % 3 === 0) {
    console.log(`I found a ${i}, Three is a crowd`);
  }
}

//D Savings account
let bankAccount = 0;

for (let i = 1; i <= 10; i++) {
  bankAccount += i;
}
console.log(bankAccount);

let bankAccount2 = 0;

for (let i = 1; i <= 100; i++) {
  bankAccount2 += i;
}
bankAccount2 *= 2;
console.log(bankAccount2);

//III. Arrays & Control flow

//A. Talk about it:
//1. The thing in an array is called an index

//2 Arrays are guareenteed to be in order

//3 You could model a menu with an array

//b Easy does it
let quotes = ["Bookem dano", "A Pirates life for me", "Yea baby"];

//C Accessing elements
const randomThings = [1, 10, "Hello", true];
//1
randomThings[0];

//2
randomThings[2] = "World";

//3
console.log(randomThings[2]);

//D Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1
ourClass[2];

//2
ourClass[4] = "Octocat";

//3
ourClass.push("Cloud City");

//Mix it up
const myArray = [5, 10, 500, 20];

//1
myArray.push("Aegon");
myArray.push("MyString");

//2
myArray.shift();

//3
myArray.unshift("Bob Marley");

//4
myArray.pop();

//5
let ar = myArray.reverse();
console.log(ar);
//I did mutate the array
//To mutate the array means to change the array
//Reverse returns a link to the same array

//F Biggie Smalls
let myVar = 20;

if (myVar < 100) {
  console.log("Little number");
} else {
  console.log("Big number");
}

//G Monkey in the middle

if (myVar < 5) {
  console.log("Little Number");
} else if (myVar > 10) {
  console.log("Big number");
} else {
  console.log("Monkey");
}

//H What's in your closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//1
console.log(`Kristen is rocking that ${kristynsCloset[2]} today`);

//2
kristynsCloset.splice(6, 1, "raybeans", "marshmallow peeps");

//3
kristynsCloset[5] = "Stained knit hat";

console.log(kristynsCloset);

//4
let shirt = thomsCloset[0][0];

//5
let pants = thomsCloset[1][0];

//6
let acc = thomsCloset[2][0];

//7
console.log(`Thom is looking fiece in a ${shirt}, ${pants}, and ${acc}`);

//8
thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset);

//IV Functions
//A PrintGreeting

const printGreeting = (name) => {
  return `Hello there, ${name}`;
};

console.log(printGreeting("Slimer"));

//B printCool
const printCool = (name) => {
  return `${name} is cool`;
};
console.log(printCool("Captain Reynolds"));

//C CalculateCube
const calculateCube = (cube) => {
  return cube * cube * cube;
};
console.log(calculateCube(5));

//D isVowel
const isVowel = (v) => {
  if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
    return true;
  } else {
    return false;
  }
};
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));

//E getTwoLengths
const getTwoLengths = (x1, x2) => {
  let myArray = [];
  myArray.push(x1.length);
  myArray.push(x2.length);

  return myArray;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

//F Get multiple lengths
const getMultipleLengths = (x) => {
  let myArray = [];
  for (let i = 0; i < x.length; i++) {
    myArray.push(x[i].length);
  }

  return myArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G maxOfThree
const maxOfThree = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= a) {
    return c;
  }
};
console.log(maxOfThree(6, 9, 1));

//H printLongest word
const printLongestWord = (words) => {
  let longest = "";

  words.forEach((e) => {
    if (e.length > longest.length) {
      longest = e;
    }
  });
  return longest;
};
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

//Objects

//A Make a user object
let user = {
  name: "Zack",
  email: "Zack@Google.com",
  age: 26,
  purchased: [],
  //E-1
  friend: {
    name: "Steve",
    age: 20,
    location: "PA",
    purchased: [],
  },
};

//B Update the user
//1
user.email = "Zack@PerScholas.com";

//2
user.age++;

//C Adding keys and values
user.house = "123 Grove street";

//D Shipaholic
//1
user.purchased.push("Carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased);

//E Object-within-object
//E-1 see above
//E-2
console.log(user.friend.name);

//E-3
console.log(user.friend.location);

//E-4
user.friend.age = 55;

//E-5
user.friend.purchased.push("The One Ring");

//E-6
user.friend.purchased.push("a latte");

//E-7
console.log(user.friend.purchased[1]);

//F Loops
//F-1
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

//F-2
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}
