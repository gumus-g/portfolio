import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';

function RecipesPage({ setRecipe }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('/recipes');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        redirect("/update");
    }


    // DELETE a single recipe  
    const onDeleteRecipe = async _id => {
        const response = await fetch(`/recipes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/recipes');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`You could not delete recipe = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>
            <h2>List of Recipes</h2>
            <p>This page creates a list of recipes. When you want to edit or delete the recipes, 
                just click on the icons next to them.</p>
            <Link to="/create">Add Recipe</Link>
            <RecipeList 
                recipes={recipes} 
                onEdit={onEditRecipe} 
                onDelete={onDeleteRecipe} 
            />
        </>
    );
}

export default RecipesPage;