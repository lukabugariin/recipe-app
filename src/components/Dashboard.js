import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeModal from "./RecipeModal";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

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
        setFilteredRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterRecipes(query);
  };

  const filterRecipes = (query) => {
    const filteredRecipes = recipes.filter((recipe) => {
      const titleMatch = recipe.title.toLowerCase().includes(query);
      const tagsMatch = recipe.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );
      return titleMatch || tagsMatch;
    });

    setCurrentPage(1);
    setFilteredRecipes(filteredRecipes);
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <h1>Recipe Dashboard</h1>

      <div className='recipe-grid'>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <Link to='/create-recipe'>
          <button className=''>Create New Recipe</button>
        </Link>
        {currentRecipes.map((recipe) => (
          <div className='recipe-card' key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Tags: {recipe.tags.join(", ")}</p>
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

      <div className='recipe-grid'>
        <button
          style={{ width: "175px" }}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous Page
        </button>
        <button
          style={{ width: "175px" }}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastRecipe >= filteredRecipes.length}>
          Next Page
        </button>
        <p>Page {currentPage}</p>
      </div>
    </div>
  );
};

export default Dashboard;
