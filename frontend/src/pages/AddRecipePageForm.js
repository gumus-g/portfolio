import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRecipePageForm = () => {

    const [recipTitle, setRecipTitle]       = useState('');
    const [prepTime, setTime]               = useState('');
    const [ingredients, setIngredients]     = useState('');
    const [date, setDate]                   = useState('');

    const redirect = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { recipTitle, prepTime, ingredients, date };
        const response = await fetch('/recipes', {
            method: 'post',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You successfully added a recipe in the log`);
            redirect("/log");
        } else {
            alert(`This login failed due to missing data = ${response.status}`);
            redirect("/log");
        }
    };


    return (
        <>
        <article>
            <h2>Add a recipe</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which recipe are you adding?</legend>
                    <label for="recipTitle">Recipe title</label>
                    <input
                        type="text"
                        placeholder="Title of the recipe"
                        value={recipTitle}
                        onChange={e => setRecipTitle(e.target.value)} 
                        id="recipTitle" />
                    
                    <label for="prepTime">Prep Time</label>
                    <input
                        type="number"
                        value={prepTime}
                        placeholder="Prep time of recipe"
                        onChange={e => setTime(e.target.value)} 
                        id="prepTime" />

                    <label for="ingredients">Ingredients</label>
                    <input
                        type="text"
                        placeholder="Ingredients of the recipe"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)} 
                        id="ingredients" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="Date of recipe"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />    

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addRecipe}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddRecipePageForm;