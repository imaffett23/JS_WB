// Think of a file as a "module"
// Two types of Imports
// 1. Named Imports
// 2. Default Imports
// Before we can import something however, we need to export it from the corresponding file

// Import a function and a variable
// NAMED Import - we can have as many as we want!
// We also have a DEFAULT Import for "first"
// Can also rename as you import
import first, { returnHi as sayHi, last, middle } from './utils.js';

// Default import - only one default import from another file!
// Can call it anything you want since there is only one for a file
// import blahblah from './wes.js';

// Can also import ALL for NAMED exports from a file
import * as everything from './wes.js';

import { handleButtonClick } from './handlers.js';

// console.log(blahblah);
// console.log(first);
// console.log(everything);

// const name = 'wes';

// Use the renamed function "sayHi"
// console.log(sayHi(name));
// console.log(last, middle);

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
