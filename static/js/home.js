// Get the recipe search form and input field
const searchForm = document.querySelector('#recipe-search-form');
const searchInput = document.querySelector('#recipe-search-input');

// Add event listener to the search form
searchForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  
  // Get the search query
  const query = searchInput.value;
  
  // Redirect to the search results page with the query as a parameter
  window.location.href = `/search?query=${query}`;
});

// Get the login and signup modals
const loginModal = document.querySelector('#login-modal');
const signupModal = document.querySelector('#signup-modal');

// Get the login and signup links
const loginLink = document.querySelector('#login-link');
const signupLink = document.querySelector('#signup-link');

// Add event listener to the login link
loginLink.addEventListener('click', (e) => {
  // Prevent the default link behavior
  e.preventDefault();
  
  // Show the login modal
  loginModal.classList.add('show');
});

// Add event listener to the signup link
signupLink.addEventListener('click', (e) => {
  // Prevent the default link behavior
  e.preventDefault();
  
  // Show the signup modal
  signupModal.classList.add('show');
});

// Get the close buttons for the modals
const closeButtons = document.querySelectorAll('.modal .close');

// Add event listener to the close buttons
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Prevent the default button behavior
    e.preventDefault();
    
    // Hide the modal
    button.parentNode.parentNode.classList.remove('show');
  });
});
