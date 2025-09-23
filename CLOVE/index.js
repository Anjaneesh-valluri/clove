const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/' , (req,res) => {
    res.send('Welcome back sir');
});


const recipes = [
    { id: 1, name: 'Spaghetti Carbonara' , cuisine: 'Italian'},
    { id: 2, name: 'Palak panner' , cuisine: 'Indian'},
    {id: 3, name: 'Tocos al Pastor' , cuisine: 'Mexican'}
]

app.get('/api/recipes/add/:id' , (req,res)=>{
    const idToFind = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === idToFind);

    if(!recipe){
        return res.status(404).json({message: 'Recipe not found'});
    }
    res.json(recipe);
});

app.get('/api/recipes' , (req,res) =>{
    res.status(200).json(recipes);
});


app.post('/api/recipes/create' , (req,res) => {
    if(!req.body.name || !req.body.cuisine){
        return res.status(400).json({message : 'Name and cuisine are required. '});
    }

    const newRecipe = {
        id : recipes.length+1,
        name: req.body.name,
        cuisine: req.body.cuisine
    };

    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

app.delete('/api/recipes/:id' , (req,res) =>{
    const idToDelete = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex(r => r.id === idToDelete);
    if(recipeIndex === -1){
        return res.status(404).json({message : 'Recipe not found'});
    }

    recipes.splice(recipeIndex , 1);
    res.status(204).send();
});

app.listen(port, ()=>{
    console.log(`Clove is running on ${port}`);
});