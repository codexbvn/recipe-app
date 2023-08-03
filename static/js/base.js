// Add active class to current nav link
$(document).ready(function() {
  var url = window.location.pathname;
  var activePage = url.substring(url.lastIndexOf('/') + 1);
  $('.nav-link').each(function(){
    var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);
    if (activePage == linkPage) {
      $(this).addClass('active');
    }
  });
});

// Show/hide password
$(document).ready(function() {
  $('#show-password').click(function() {
    var passwordField = $('#password');
    var passwordFieldType = passwordField.attr('type');
    if (passwordFieldType === 'password') {
      passwordField.attr('type', 'text');
    } else {
      passwordField.attr('type', 'password');
    }
  });
});
// This is a sample code for the base.js file in recipe-app

// Toggle the navigation menu
function toggleMenu() {
  var nav = document.getElementById("navigation");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Close the navigation menu if clicked outside
window.onclick = function(event) {
  var nav = document.getElementById("navigation");
  if (event.target != nav && event.target.parentNode != nav) {
    nav.style.display = "none";
  }
}

// Scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get the current year
var currentYear = new Date().getFullYear();

// Set the footer year
document.getElementById("footer-year").innerHTML = currentYear;
