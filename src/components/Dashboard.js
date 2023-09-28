import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeModal from "./RecipeModal";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const uid = "fY1nROHGBXP8FhBPqnISUIEnNAu2";
        const response = await axios.get(
          "https://getrecipes-zazjbx7nka-uc.a.run.app/",
          {
            headers: { authid: uid },
          }
        );
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <h1>Recipe Dashboard</h1>

      <div className='recipe-grid'>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <Link to='/create-recipe'>
          <button className=''>Create New Recipe</button>
        </Link>
        {filteredRecipes.map((recipe) => (
          <div className='recipe-card' key={recipe.id}>
            <h3>{recipe.title}</h3>
            <button
              className='view-details-button'
              onClick={() => openRecipeModal(recipe)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeRecipeModal} />
      )}
    </div>
  );
};

export default Dashboard;
