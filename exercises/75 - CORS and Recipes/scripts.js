// CORS - Cross Origin Resource Sharing
// By default, not allowed to share data between origins (e.g. github.com and wesbos.com)
// The origin needs a CORS policy to allow data access
// Need to run from a server

// BUTTTTT... localhost -> recipepuppy is still blocked
// So we need a "proxy", which takes data from localhost and proxy makes the serverside request and
// sends back to localhost
// We will use a CORS proxy to make things easier (BE CAREFUL - DON'T USE THIS FOR SENSITIVE INFO)
// IF YOU NEED TO SEND/RECEIVE SENSITIVE INFO, YOU MUST HOST YOUR OWN SERVER

const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}/?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  fetchAndDisplay(el.query.value);
}

async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
                <h2>${recipe.title}</h2>
                <p>${recipe.ingredients}</p>
                ${
                  recipe.thumbnail &&
                  `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
                }
                <a href"${recipe.href}">View Recipe</a>
              </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// On page load run it with pizza
fetchAndDisplay('pizza');
