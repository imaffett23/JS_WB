// Standard function declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function - doesn't work like this
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression - be careful of this option
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions
const inchToCM = (inches) => inches * 2.54; // implicit return without typing "return"

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// Returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };

//   return baby;
// }

// ^^With arrow functions (wrap the object return in parantheses so it doesn't confuse it for
//   a function block)
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// ^^In this case the standard function declaration may be easier to read

// IFFE
// Immediately Invoked Function Expression
(function (age) {
  return `You are cool and age ${age}`;
})(10); // Runs immediately

// Methods!
// A function that lives inside an object
const ian = {
  name: 'Ian Maffett',
  sayHi() {
    console.log('Hey Ian');
    return 'Hey Ian';
  },
  // Short-hand method (most common probably)
  yellHi() {
    console.log('HEY IANNNN');
  },
  // Arrow function
  whisperHi: () => {
    console.log(`hi iannn, I'm a mouse`);
  },
};

// Callback Functions
const button = document.querySelector('.clickMe');

function handleClicking() {
  console.log('Great clicking!');
}

// button.addEventListener('click', ian.yellHi); // method call
// button.addEventListener('click', handleClicking); // defined function
button.addEventListener('click', function () {
  console.log('Nice job!');
}); // pass function inline
