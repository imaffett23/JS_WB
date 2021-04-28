// Creating HTML elements
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'I am an image';

console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

// Add these elements to the page
// Add to the created elements first to avoid multiple reflows or repaints
myDiv.appendChild(myParagraph); // Append children to a created element in the DOM
myDiv.appendChild(myImage);

// Then can add everything to the DOM
document.body.appendChild(myDiv); // Append the child to the end of a list of children

// Can also use "element.append();"
// Or insertAdjacentElement() (what if we need to add something to the top for example)
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Create an unordered list with 5 list elements
// Can condense a lot with other code, but this is to test what we have been learning
const unList = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = listItem1.cloneNode(true); // Can clone a node (pass true to pass all child elements)
const listItem4 = document.createElement('li');
const listItem5 = document.createElement('li');

listItem3.textContent = 'Three';
unList.appendChild(listItem3);

listItem5.textContent = 'Five';
unList.append(listItem5);

listItem1.textContent = 'One';
unList.insertAdjacentElement('afterbegin', listItem1);

listItem4.textContent = 'Four';
listItem5.insertAdjacentElement('beforebegin', listItem4);

listItem2.textContent = 'Two';
listItem1.insertAdjacentElement('afterend', listItem2);

document.body.insertAdjacentElement('beforeend', unList);
