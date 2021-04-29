// EVENT LISTENER
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('It got clicked');
}

const hooray = () => console.log('HOORAY'); // Arrow function

// butts.addEventListener('click', function () {
//   console.log('It got clicked');
// }); // pass event and callback function - uses an anonymous function in this case

butts.addEventListener('click', handleClick); // Can also use a named function.  Browser runs function.
// don't need paraentheses inside
coolButton.addEventListener('click', hooray); // Can use same function for multiple buttons, but
// we are using an arrow function stored in a variable for this button

butts.removeEventListener('click', handleClick); // Need to pass event and function to remove it.
// Can't remove with an anonymous function

// LISTEN ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('button.buy');

// TARGETS, BUBBLING, PROPAGATION, AND CAPTURE

function buyItem(event) {
  // A function used for a callback accepts a single parameter representing
  // the event
  //   const button = event.target;
  const button = event.currentTarget; // Generally want currentTarget as it returns what fires the
  // event (even if it is a nested element).
  console.log(button.textContent);
  console.log(parseFloat(button.dataset.price)); // Can access the price specified in the data tag through
  // the event target

  // Stop this event from bubbling up (also makes the event target whatever you clicked on
  // instead of the entire window)
  event.stopPropagation();
}

buyButtons.forEach((button) => button.addEventListener('click', buyItem)); // Add an event listener
// for each button in the node list.  Could also pass a named function with a parameter for each
// button, but this option is more concise

// Add event listener to the window
window.addEventListener(
  'click',
  function (event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  }
  //   { capture: true } // make the event flow down instead of BUBBLING UP
);

// Can have multiple events fire at the same time - PROPAGATION: Events will BUBBLE UP to parent
// elements unless specified not too
// BUBBLE UP happens as the event flows up through the parent hierarchy
// Can add an object, option, to addEventListener to specify capture (among other things)
// capture = true will result in CAPTURING the events (flowing down through the parent hierarchy)
// Default behavior is BUBBLING UP

const photoEl = document.querySelector('.photo');

// "this" references the element that the event is called on (in this case photoEl  )

photoEl.addEventListener('mouseenter', function (e) {
  console.count(e.currentTarget);
  console.log(this);
});
