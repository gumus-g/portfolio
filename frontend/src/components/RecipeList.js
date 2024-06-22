import React from 'react';
import Recipe from './Recipe';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <table id="recipes">
            <caption>Add and Edit Recipes</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Prep Time</th>
                    <th>Ingredients</th>
                    <th>date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe, i) => 
                    <Recipe 
                        recipe={recipe} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RecipeList;
