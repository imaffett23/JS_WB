const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // debugger;
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE');
  console.groupEnd(`${person.name}`);
});

// Console Methods
// console.log();
// console.info();
// console.error(); // Doesn't throw error, but logs the message as error
// console.warn();
console.table(people);
// console.count(); // Counts occurrences of something
// console.group(); // See above (also) groupEnd(), groupCollapsed()

// Callstack
// See bootstrap() function below

// Grabbing Elements
// Typing "$0" in the console tab of developer tools will return whichever element you have selected
// in the elements tab. "$0" is last element you clicked, "$1" is second last, etc. "$" is a selector
// for DOM.  "$$" is an all selector.

// Breakpoints
// Can use "debugger" as a breakpoint to stop the code at that point for review.  See above.
// Can set breakpoints from the browser too (in dev tools).

// Scope
// Peer into what variables are

// Network Requests
// Open dev tools and go to network tab (and refresh).  Shows everything that goes into the website

// Break On Attribute
// Go into elements in dev tools and select "break on".  Helps identify JS that causes something and
// related info.

// Some Setup Code
// Can throw in breakpoints through source in dev tools too.

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Causes an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

// bootstrap();  // call bootstrap() to see callstack

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
