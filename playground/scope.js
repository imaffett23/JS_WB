// Global variable is available everywhere in the "window"
// Generally don't want to make global variables when it can be avoided
// const first = 'Ian';
// let second = 'Maffett';
// var age = 100; // All are globally scoped, but var variables can be called through window (window.age;)

// // Can also call global functions with window (e.g. window.sayHi();)
// function sayHi() {
//     console.log('Hi');
// }

// FUNCTION SCOPE
const age = 100;

function go() {
  // hair is function scope and only available in the function unless returned.  age is found through
  // function lookup.  Since it's not in the function, it will go up one level to check.
  // const age = 200; // Can initialize a variable with the same name in different scopes - not great
  const myAge = 200;
  const hair = 'brown';
  console.log(age);
  console.log(hair);
  console.log(myAge);
}

// go();

// BLOCK SCOPE
// Block being {}
// Can create variable outside of block.  Update in scope, but then it is still available to us
function isCool(name) {
  // Function scope
  let cool;
  if (name === 'Ian') {
    // Block scope
    cool = true;
  }
  console.log(cool);
  return cool;
}

// FOR LOOPS
// Also uses block scope (i is defined in the parantheses too)
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// var variables are function scoped.  Not block scoped.  const and let are block scoped

// SCOPE LOOKUP
// JS is "lexical scoping" or "static scoping".  Scope lookup is based on where the function is defined.
// Not where it is run.  The below will return "Snickers" instead of "Sunny"

// const dog = 'Snickers';

// function logDog() {
//   console.log(dog);
// }

// function go1() {
//   const dog = 'Sunny';
//   logDog();
// }

// go1();

// Better to just pass the name to the function to avoid this confusion
// Don't want to share names with parameters and global variables like done below
const dog = 'Snickers';

function logDog(dog) {
  console.log(dog);
}

function go1() {
  const dog = 'Sunny';
  logDog('Rufus');
}

go1();

// FUNCTION SCOPING
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

// Can't call yell since it is scope to the sayHi function
// Call sayHi instead
// Generally we don't nest functions, but there are examples

sayHi('Kim');
