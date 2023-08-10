$(document).ready(function() {
    // handle delete recipe button click
    $('.delete-recipe-btn').click(function(e) {
      e.preventDefault();
      // get recipe ID from the button data attribute
      var recipe_id = $(this).data('recipe-id');
      // confirm delete action
      if (confirm("Are you sure you want to delete this recipe?")) {
        // send delete request to server
        $.ajax({
          url: '/recipes/delete/' + recipe_id,
          type: 'DELETE',
          success: function(result) {
            // redirect to recipes page on success
            window.location.href = '/recipes';
          },
          error: function(err) {
            console.log(err);
          }
        });
      }
    });
  
    // handle edit recipe button click
    $('.edit-recipe-btn').click(function(e) {
      e.preventDefault();
      // get recipe ID from the button data attribute
      var recipe_id = $(this).data('recipe-id');
      // redirect to the edit recipe page
      window.location.href = '/recipes/edit/' + recipe_id;
    });
  });
