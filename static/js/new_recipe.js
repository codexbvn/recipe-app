// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector("#recipe-form");
  
    // Listen for the form submission event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the form data
      const name = document.querySelector("#name").value.trim();
      const description = document.querySelector("#description").value.trim();
      const instructions = document.querySelector("#instructions").value.trim();
      const image_url = document.querySelector("#image-url").value.trim();
  
      // Validate the form data
      if (name === "" || description === "" || instructions === "" || image_url === "") {
        alert("Please fill out all fields"); // Show an error message
        return;
      }
  
      // Send an AJAX request to the server to create a new recipe
      fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          description: description,
          instructions: instructions,
          image_url: image_url
        })
      })
      .then(response => {
        if (response.ok) {
          alert("Recipe created successfully"); // Show a success message
          form.reset(); // Reset the form
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch(error => {
        alert("An error occurred"); // Show an error message
        console.error(error); // Log the error to the console
      });
    });
  });
  