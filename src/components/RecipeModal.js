import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  const instructionsString = recipe.instructions.join(", ");
  const tagsString = recipe.tags.join(", ");

  return (
    <div className='recipe-modal'>
      <div className='modal-content'>
        <h2>{recipe.title}</h2>
        <p>{recipe.authorId}</p>
        <p>Instructions: {instructionsString}</p>
        <p>Date Created: {recipe.dateCreated}</p>
        <p>Tags: {tagsString}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
