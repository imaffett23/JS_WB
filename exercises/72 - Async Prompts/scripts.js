function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
}

function ask(options) {
  return new Promise(async function (resolve) {
    // First we need to create a pop up with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
        <fieldset>
            <label>${options.title}</label>
            <input type="text" name="input"/>
            <button type="submit">Submit</button>
        </fieldset>
    `
    );

    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // Listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // Listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        // Remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );

    // When someone does submit, resolve the data in the input box

    // Insert that popup into the DOM
    document.body.appendChild(popup);
    // Put a very small timeout before we add the open class (otherwise it might run into issues
    // with the popup class being added at the same time)
    await wait(50);
    popup.classList.add('open');
  });
}

// Select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

// Want to ask multiple questions
const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// Bad solution because it pops all three of them at once on page load and out of order
// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(
//   (answers) => {
//     console.log(answers);
//   }
// );

// Also bad because UI still pops up at page load
// Promise.all(questions.map(ask)).then((data) => {
//   console.log(data);
// });

async function asyncMap(array, callback) {
  // Make an array to store our results
  const results = [];
  // Loop over our array
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  // When we are done with the loop, return
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// Map over it asynchronously instead
// FOR OF allows you to pause a for loop by awaiting inside of it
// async function askMany() {
//   for (question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
