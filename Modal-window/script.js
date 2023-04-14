'use strict';

// --- Declare variables
// The text box that appears
const modal = document.querySelector('.modal');
// Overlay from the text box
const overlay = document.querySelector('.overlay');
// The X button
const btnCloseModal = document.querySelector('.close-modal');
// 3 modal buttons
const btnsOpenModal = document.querySelectorAll('.show-modal');

// --- Declare functions
// Add the content, remove the hidden class that makes it dissapear
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Remove the conten, add the hidden class that makes it dissapear
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// --- Implement functionality
// For every modal button that is clicked, run function openModal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close modal by clicking X button
btnCloseModal.addEventListener('click', closeModal);
// Close modal by clicking on the overlay
overlay.addEventListener('click', closeModal);

// Close the modal by pressing ESC
// In the case that a key is pressed on the website
document.addEventListener('keydown', function (e) {
  // If the key pressed is escape and the modal hidden class is off, then close the modal
  // console.log(e.key); => Escape
  // e runs when keyboard is pressed and .key shows the name of the pressed key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
