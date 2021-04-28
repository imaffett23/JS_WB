// TRAVERSING AND REMOVING NODES
const ian = document.querySelector('.ian');

// Element properties
console.log(ian.children); // Returns HTMLCollection of the children
console.log(ian.firstElementChild); // First element child
console.log(ian.lastElementChild); // Last element child
console.log(ian.previousElementSibling); // Gives the item before the current one
console.log(ian.nextElementSibling); // Gives the item after the current one
console.log(ian.parentElement); // Gives the overarching parent element relative to the current one

// Node properties
console.log(ian.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();

// Paragraph element is still in JS memory even though we removed it
console.log(p);

// Can add it back in
document.body.appendChild(p);
