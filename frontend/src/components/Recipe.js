import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Recipe({ recipe, onEdit, onDelete }) {
    return (
        <tr>
            <td>{recipe.recipTitle}</td>
            <td>{recipe.prepTime}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.date}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(recipe._id)} /></td>
            <td><MdEdit onClick={() => onEdit(recipe)} /></td>
        </tr>
    );
}

export default Recipe;