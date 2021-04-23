// Function Defintion
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call.  Or **Run**
const myTotal = calculateBill(100, 0.13);
console.log(myTotal, myTotal);

// Can directly pass arguments or reference them through other, defined variables
// Can also pass expressions (e.g. "20 + 20 + ianTotal" for the first argument)

const ianTotal = 500;
const ianTaxRate = 0.05;
const myTotal2 = calculateBill(ianTotal, ianTaxRate);
console.log(myTotal2);

// Function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Ian');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

// May want to define a default value for parameters
function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

// ^^Can reuse parameters between functions

// Can use the output from one function as the input to another
console.log(yell(doctorize('ian')));
