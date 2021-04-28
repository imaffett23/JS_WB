// HTML FROM STRINGS AND XSS
const item = document.querySelector('.item');

const source = 'https://source.unsplash.com/random/200x200';
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${source}" alt="${desc}" />
    </div>    
`;
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// myHTML is just a string however.  We can't add classes using methods we've been introduced to in
// the past.  Would need to reselect these elements from the DOM after the fact
// const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');

// console.log(itemImage);

// TURN A STRING INTO A DOM ELEMENT
// Useful if you need to add event listeners, elements etc. before populating the DOM
// Can select elements and operate on them from a fragment (even before they are on the page)
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.append(myFragment);

// SECURITY CONCERNS
// When prompting someone for information, they could in theory inject HTML, CSS, etc.
// This is not necessarily bad, but when we get into XSS (Cross-Site Scripting), this is when
// it becomes problematic.  Inject script to drain someone's bank account
// Only JavaScript running on your page should be yours or that from approved sources.

// Need to scrub your pages of potential vulnerabilities
