// Closure is ability to create a function with scope
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    // check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open!');
      return;
    }

    modal.classList.add('open');

    // Event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // Handle event listeners for clicks and keyboards
    window.removeEventListener('keyup', handleKeyUp);
    prevButton.removeEventListener('click', showPrevImage);
    nextButton.removeEventListener('click', showNextImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
    }
    // update the modal with this info
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  // Event listeners

  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );
  // Loop over each image and attach an event listener for each image
  images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      // When that is keyup-ed, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show image
        showImage(e.currentTarget);
      }
    })
  );
  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
