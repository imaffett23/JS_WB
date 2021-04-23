/* eslint-disable */ //Prevent eslint from operating in this file

// STRINGS
const name = 'Ian';
const middle = "Adrian";
const last = `Maffett`;

const sentence = "she's so cool";  // Need to escape apostrophe or use a double quote for the string
const sentence2 = `she's so cool`; // Or just use backticks

const song = `Ohhh
yea
I
like
pizza!`;                           // Can also use backticks for multi-line (preserves spacing too!)

const hello = "Hello my name is " + name + ". Nice to meet you."; // An older way of concatenating

// Using backticks
const helloNew = `Hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;  

const html = `
    <div>
        <h2>${name}</h2>
        <p>${helloNew}</p>
    </div>
`;

document.body.innerHTML = html;


// NUMBERS
const age = 100;        // Integer
const age2 = 100.5;     // Float
const name2 = 'Kim';    // Can use "typeof varName" to determine variable type

//Can use basic math operators (+, -, /, *), but be careful of mixing types and their results

const a = 10;
const b = 20;

//Can use helper methods

// Math.round(20.5);
// Math.floor(20.999);
// Math.ceil(20.999);
// Math.random();

// '%' for modulo; '**'

const smarties = 20;
const kids = 3;
const eachKidGets = `Each kid gets ${Math.floor(smarties / kids)} smarties.  There are
${smarties % kids} smarties left over.`;

// Floating point numbers always have some level of imprecision.  BE CAREFUL!
const price = 1034; // Could store money variables as just cents (integer) to avoid precision issues

//Infinity and -Infinity are numbers in JS
//NaN ("Not a Number") is another number; returned if you do something matematically incorrect


// OBJECTS
const person = {
    first: 'Ian',
    last: 'Maffett',
    age: 100
};   // Can create an object with curly brackets.  Has properties and values

// Order doesn't matter in an object.  If you want order, use an Array

// Can access values with dot notation
//console.log(person.first);
//console.log(person.last);
//console.log(person.age);


// SYMBOL
// Another type typically used at low levels package creation and by experts


// UNDEFINED
// A way of defining "nothing" in JS

let dog;         //Initializes dog variable, but with no value.  It's currently undefined
dog = 'Bentley'; // Now the variable is a string


// NULL
// Is a value of nothing (undefined is a variable that has not yet had a value set to it)

let somethingUndefined;      // Undefined type
const somethingNull = null;  // null type

const cher = {
    first: 'cher',   
};                           // Just a first name

const teller = {
    first: 'Raymond',
    last: 'Teller'
};                           // First and last name

teller.first = 'Teller';
teller.last = null;          // But then rechanged his name


// BOOLEANS
// Use booleans for logic

let isDrawing = false;
let age3 = 18;
const ofAge = age > 19; // returns false

//One "=" for setting or updating a value
age3 = 1000;

// "==" and "==="; "===" is almost always best practice and what I should use

age === 1000; // returns true

// Triple equals checks value and type equality
// Double equals only checks value





console.log(eachKidGets);
