// Closure is ability to create a function with scope
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  this.gallery = gallery;

  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');
  let currentImage;

  // Bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event listeners

  this.images.forEach((image) =>
    image.addEventListener('click', (e) => this.showImage(e.currentTarget))
  );
  // Loop over each image and attach an event listener for each image
  this.images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      // When that is keyup-ed, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show image
        this.showImage(e.currentTarget);
      }
    })
  );
  this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function () {
  // check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Modal already open!');
    return;
  }

  this.modal.classList.add('open');

  // Event listeners to be bound when we open the modal
  window.addEventListener('keyup', this.handleKeyUp);
  this.prevButton.addEventListener('click', this.showPrevImage);
  this.nextButton.addEventListener('click', this.showNextImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  // Handle event listeners for clicks and keyboards
  window.removeEventListener('keyup', this.handleKeyUp);
  this.prevButton.removeEventListener('click', this.showPrevImage);
  this.nextButton.removeEventListener('click', this.showNextImage);
};

Gallery.prototype.handleClickOutside = function (e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') this.closeModal();
  if (e.key === 'ArrowRight') this.showNextImage();
  if (e.key === 'ArrowLeft') this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no image to show');
  }
  // update the modal with this info
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

// Use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
