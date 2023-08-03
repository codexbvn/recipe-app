// DOM elements
const recipeContainer = document.querySelector('.recipe-container');
const editButton = document.querySelector('.edit-recipe-button');
const deleteButton = document.querySelector('.delete-recipe-button');

// Fetch recipe data
const recipeId = recipeContainer.dataset.recipeId;

fetch(`/recipe/${recipeId}/json`)
  .then(response => response.json())
  .then(recipe => {
    // Update recipe details
    recipeContainer.querySelector('.recipe-title').textContent = recipe.title;
    recipeContainer.querySelector('.recipe-description').textContent = recipe.description;
    recipeContainer.querySelector('.recipe-instructions').textContent = recipe.instructions;

    // Update ingredients list
    const ingredientsList = recipeContainer.querySelector('.recipe-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
      const listItem = document.createElement('li');
      listItem.textContent = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
      ingredientsList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));

// Edit recipe button
editButton.addEventListener('click', () => {
  window.location.href = `/recipe/${recipeId}/edit`;
});

// Delete recipe button
deleteButton.addEventListener('click', () => {
  const confirmed = confirm('Are you sure you want to delete this recipe?');

  if (confirmed) {
    fetch(`/recipe/${recipeId}/delete`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/';
      }
    })
    .catch(error => console.error(error));
  }
});
