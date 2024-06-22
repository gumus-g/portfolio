// Controllers for the  Collection

import 'dotenv/config';
import express from 'express';
import * as recipes from './recipes-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/recipes', (req,res) => { 
    recipes.createRecipe(
        req.body.recipTitle, 
        req.body.prepTime, 
        req.body.ingredients,
        req.body.date
        )
        .then(recipe => {
            console.log(`"${recipe.recipTitle}" was added to the recipe list.`);
            res.status(201).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The recipe could not added to the recipe list.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/recipes', (req, res) => {
    recipes.retrieveRecipes()
        .then(recipes => { 
            if (recipes !== null) {
                console.log(`All recipes were retrieved from the recipe list.`);
                res.json(recipes);
            } else {
                res.status(404).json({ Error: 'Recipes could not be retrieved from the recipe recipe list.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Please make sure you entered the correct recipe.' });
        });
});


// RETRIEVE by ID controller***********************
app.get('/recipes/:_id', (req, res) => {
    recipes.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            console.log(`"${recipe.recipTitle}" was retrieved, based on recipe's ID.`);
            res.json(recipe);
        } else {
            res.status(404).json({ Error: 'Recipes could not be retrieved from the recipe list by ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Please enter corect recipe ID.' });
    });

});


// UPDATE controller ************************************
app.put('/recipes/:_id', (req, res) => {
    recipes.updateRecipe(
        req.params._id, 
        req.body.recipTitle, 
        req.body.prepTime, 
        req.body.ingredients,
        req.body.date
    )
    .then(recipe => {
        console.log(`"${recipe.recipTitle}" was updated.`);
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Recipe could not be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} recipe was deleted.`);
                res.status(200).send({ Success: 'Recipe was succesfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Recipe was not deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Please enter corect recipe ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});