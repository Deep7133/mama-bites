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
  