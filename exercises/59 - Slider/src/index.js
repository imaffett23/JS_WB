function Slider(sliderEl) {
  if (!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in!');
  }

  // Create some variables for working with the slider
  let current;
  let prev;
  let next;

  // Select the elements needed for the slider
  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  function startSlider() {
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip off all the classes from the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      // Make a new array of the new values and destructure them over
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  // When this slider is created, run the startSlider() function (this is a constructor)
  startSlider();
  applyClasses();

  // Event listeners

  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
