function AddRecipeForm() {
  return (
    <form style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Add a New Recipe</h3>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="cuisine">Cuisine: </label>
        <input type="text" id="cuisine" required />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;