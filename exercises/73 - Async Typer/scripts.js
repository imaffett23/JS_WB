function wait(ms = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// METHOD 1: Async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// METHOD 2: Recursion
// Recursion is a function calling itself until exit condition
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // Exit condition
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
      // Wait for some time
    }
  }

  // When this function draw() runs, kick off drawLetter()
  drawLetter();
}

const els = document.querySelectorAll('[data-type]');
els.forEach(draw);
