// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.append(div);

// make an unordered list
const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = 'https://source.unsplash.com/random/200x200';
img.width = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy';

div.append(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div class="myDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;

const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML); // Use insertAdjacentHTML instead of element

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const cardHTML = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;

  return cardHTML;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('ian', 20, 200);
cardsHTML += generatePlayerCard('kim', 19, 150);
cardsHTML += generatePlayerCard('bentley', 2, 30);
cardsHTML += generatePlayerCard('katie', 16, 155);

// append those cards to the div
// put the div into the DOM just before the wrapper element
cardDiv.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// (See above HTML for button)
// select all the buttons!
const allButtons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
  const button = event.currentTarget; // Selects current target from event
  //   button.parentElement.remove(); // Removes the parent element of the button (in this case,
  // the player card)

  // More flexible option is to use closest()
  button.closest('.playerCard').remove(); // Finds closest element with the specification
}

// loop over them and attach a listener
allButtons.forEach((button) => button.addEventListener('click', deleteCard));
