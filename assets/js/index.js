function toggleBookEffect() {
    const book = document.querySelector('.book');
    book.classList.toggle('open');
  }
  
  window.addEventListener('load', () => {
    const book = document.querySelector('.book');
    book.classList.remove('open'); // Start with a closed book
  
    setTimeout(() => {
      toggleBookEffect(); // Open the book after a short delay
      setInterval(toggleBookEffect, 3000); // Toggle the effect every few seconds
    }, 1000);
  });
  