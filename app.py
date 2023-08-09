from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
app.config['DEBUG'] = True

DATABASE = 'recipes.db'

# Home page route
@app.route('/')
def home():
    return render_template('home.html')

# Add new recipe route
@app.route('/new_recipe', methods=['GET', 'POST'])
def new_recipe():
    if request.method == 'POST':
        # Get form data
        name = request.form['name']
        description = request.form['description']
        instructions = request.form['instructions']
        # Save to database
        conn = sqlite3.connect(DATABASE)
        c = conn.cursor()
        c.execute("INSERT INTO recipes (name, description, instructions) VALUES (?, ?, ?)",
                  (name, description, instructions))
        conn.commit()
        conn.close()
        return jsonify({'success': True})
    else:
        return render_template('new_recipe.html')

# Recipe details route
@app.route('/recipe/<int:recipe_id>')
def recipe(recipe_id):
    conn = sqlite3.connect(DATABASE)
    c = conn.cursor()
    c.execute("SELECT * FROM recipes WHERE id=?", (recipe_id,))
    recipe = c.fetchone()
    conn.close()
    if recipe:
        return render_template('recipe.html', recipe=recipe)
    else:
        return render_template('404.html'), 404

# All recipes route
@app.route('/recipes')
def recipes():
    conn = sqlite3.connect(DATABASE)
    c = conn.cursor()
    c.execute("SELECT * FROM recipes ORDER BY name")
    recipes = c.fetchall()
    conn.close()
    return render_template('recipes.html', recipes=recipes)

if __name__ == '__main__':
    app.run()

