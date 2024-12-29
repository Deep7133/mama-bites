// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('offer-box-overlay');
    const closeButton = document.getElementById('close-offer-box');
    const noThanksButton = document.getElementById('no-thanks-button');
  
    // Close the offer box when clicking the close button or "No, Thanks"
    const closeModal = () => {
      document.body.classList.add('modal-closed'); // Hide modal
    };
  
    closeButton.addEventListener('click', closeModal);
    noThanksButton.addEventListener('click', closeModal);
  
    // Handle form submission
    const form = document.getElementById('offer-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Offer Unlocked! Check your email for details.');
      closeModal();
    });
  });


  // Get the menu icon element
const menuIcon = document.querySelector('.containerr');

// Listen to the scroll event
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {  // Change 50 to whatever scroll distance you want
        menuIcon.classList.add('hidden');  // Add the hidden class to hide the icon
    } else {
        menuIcon.classList.remove('hidden');  // Remove the hidden class to show the icon
    }
});
