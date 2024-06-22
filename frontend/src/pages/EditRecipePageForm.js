import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRecipePageForm = ({ recipeToEdit }) => {
 
    const [recipTitle, setRecipTitle]   = useState(recipeToEdit.recipTitle);
    const [prepTime, setTime]           = useState(recipeToEdit.prepTime);
    const [ingredients, setIngredients] = useState(recipeToEdit.ingredients);
    const [date, setDate]               = useState(recipeToEdit.date.slice(0,10));
    ;
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                recipTitle: recipTitle, 
                prepTime: prepTime, 
                ingredients: ingredients,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You have succesfully edited the recipe.`);
        } else {
            const errMessage = await response.json();
            alert(`You failed to update due to status. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/log");
    }

    return (
        <>
        <article>
            <h2>Edit a recipe</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What recipe are you adding?</legend>
                    <label for="recipTitle">Recipe title</label>
                    <input
                        type="text"
                        value={recipTitle}
                        onChange={e => setRecipTitle(e.target.value)} 
                        id="recipTitle" />
                    
                    <label for="prepTime">Year released</label>
                    <input
                        type="number"
                        value={prepTime}
                        onChange={e => setTime(e.target.value)} 
                        id="prepTime" />

                    <label for="ingredients">Language</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)} 
                        id="ingredients" />

                    <label for="date">Language</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />   

                    <label for="submit">
                    <button
                        onClick={editRecipe}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditRecipePageForm;