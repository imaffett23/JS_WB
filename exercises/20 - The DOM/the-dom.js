// querySelector selects the first instance of the CSS element
const p = document.querySelector('p');
// querySelector selects all instances of the CSS element
// Returns a node list (different than array) of the relevant items
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);

// Can do parent - child selections
const imgs = document.querySelectorAll('.items img');
console.log(imgs);

// Can also select from and already selected item
const imgDiv = document.querySelector('.img_div');
const imgDivImage = imgDiv.querySelector('img');
console.log(imgDivImage);

// ELEMENT PROPERTIES AND METHODS
const heading = document.querySelector('h2');
// dir gives the object properties instead of the actual element (has a lot of useful properties)
console.dir(heading);

// Can change properties
console.log(heading.textContent);
// set the textContent property on that element
// heading.textContent = 'Ian is cool';
// console.log(heading.textContent);

// textContent by contrast to innerText includes all text (including other nested HTML tags)
// innerText is only human readable elements
console.log(heading.innerText);

// inner gives text content and inner HTML elements.  Outer gives outer html element as well
console.log(heading.innerHTML);
console.log(heading.outerHTML);

// Update text content from JS
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`; // slower than the following
pizzaList.insertAdjacentText('beforeend', '🍕');
console.log(pizzaList.textContent);

// WORKING WITH CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open'); // add a class
pic.classList.remove('cool'); // remove a class
pic.classList.add('round');
// pic.classList.toggle('round'); // Will add if it's not there and remove if it is
console.log(pic.classList); // Can view methods to be called on this variable

// Can also toggle classes through events
function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// BUILD IN AND CUSTOM DATA ATTRIBUTES
pic.alt = 'Cute Pup'; // Alt text // setter
pic.width = 200; // Set width
console.log(pic.alt); // getter

// Can't set the naturalWidth attribute (only a getter)
// naturalWidth is 0 until the image loads

// Can get/set attributes too
// Can also create attributes with setAttribute (but be careful!)
pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));
// hasAttribute will return boolean

// Better to use data attributes to create your own attributes (a type of metadata)
const custom = document.querySelector('.custom');
console.log(custom.dataset); // Will give an object full of all the data properties you have

// Can use these data properties
custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
