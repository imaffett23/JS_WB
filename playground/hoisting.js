// Hoisting allows you to access functions and variables before they have been created
// in the script. JS the compiler moves all the function declarations to the top
// Generally not great practice though.  Define functions first or when creating modules,
// put them in a separate file and import

// FUNCTION HOISTING

sayHi();

function sayHi() {
  console.log('Say Hi');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// VARIABLE HOISTING
// Can only hoist variable declarations, but not the values themselves
