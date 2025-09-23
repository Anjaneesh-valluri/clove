import { useState, useEffect } from 'react';
import './App.css'; // We'll use this later for styling

function App() {
  // Create a 'memory slot' (state) to hold our recipes
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the backend when the component loads
  useEffect(() => {
    fetch('http://localhost:3000/api/recipes/')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Look for this in your browser's console!
        setRecipes(data); // Store the fetched recipes in our state
      });
  }, []); // The empty array [] means "run this only once"

  return (
    <div>
      <h1>Welcome to Clove! 🌿</h1>
      <h2>Our Recipes:</h2>
      <ul>
        {/* Loop over the recipes array and display each one */}
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name} - ({recipe.cuisine})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;