# recipe-app

# Recipe App

This is a simple recipe app built using the Flask web framework and SQLite database.

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Routes](#routes)
- [Database](#database)
- [Functionality](#functionality)
- [Templates](#templates)
- [Error Handling](#error-handling)
- [How to Run](#how-to-run)

## Introduction

The Recipe App allows users to view a list of recipes, view individual recipe details, and add new recipes to the database.

## Dependencies

The following dependencies are required to run the project:

- Flask
- SQLite

## Routes

The app defines the following routes:

- `/`: Home page route, where users can start browsing recipes.
- `/new_recipe`: Route for adding a new recipe to the database via a form. Supports both GET and POST methods.
- `/recipe/<int:recipe_id>`: Route for displaying the details of a specific recipe.
- `/recipes`: Route to view all available recipes.

## Database

The app uses an SQLite database named `recipes.db` to store recipe information. It has a table named `recipes` that contains columns for the recipe name, description, and instructions.

## Functionality

The app provides the following functionality:

- `new_recipe()`: Handles the addition of new recipes to the database. It retrieves the form data submitted via POST and inserts it into the `recipes` table.
- `recipe(recipe_id)`: Retrieves a specific recipe from the database based on the provided `recipe_id` and renders the recipe details on the `recipe.html` template.
- `recipes()`: Fetches all recipes from the database and renders them on the `recipes.html` template, displaying a list of available recipes.

## Templates

The app uses HTML templates to render the different pages with data from the database:

- `home.html`: The home page template.
- `new_recipe.html`: The form template for adding new recipes.
- `recipe.html`: The template to display the details of a specific recipe.
- `recipes.html`: The template to display the list of available recipes.

## Error Handling

If a recipe with the specified ID is not found in the database, the app renders a custom `404.html` template for better user experience.

## How to Run

To run the project, make sure you have the required dependencies installed. Then, execute the `app.py` file. The app will start running, and you can access it in your web browser at `http://127.0.0.1:5000/`.
