import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    instructions: [],
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInstructionsChange = (e) => {
    const instructions = e.target.value.split("\n");
    setFormData({ ...formData, instructions });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",");
    setFormData({ ...formData, tags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      authid: "fY1nROHGBXP8FhBPqnISUIEnNAu2",
      "Content-Type": "application/json",
    };

    const tagsArray = Array.isArray(formData.tags)
      ? formData.tags
      : [formData.tags];

    const instructionsString =
      typeof formData.instructions === "string"
        ? formData.instructions
        : formData.instructions.toString();

    const instructionsArray = instructionsString
      .split("\n")
      .map((instruction) => instruction.trim());

    const recipeData = {
      title: formData.title,
      dateCreated: "2023-01-01",
      authorId: "yDk0b0ZOc3SfSzSdErsaBjkLm813",
      instructions: instructionsArray,
      tags: tagsArray,
    };

    try {
      const response = await axios.post(
        "https://addrecipe-zazjbx7nka-uc.a.run.app/",
        recipeData,
        { headers }
      );

      console.log("Recipe added:", response.data);
    } catch (error) {
      console.error("Recipe addition error:", error);
    }
  };

  return (
    <div className='container'>
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Recipe Title'
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name='instructions'
          placeholder='Instructions (Separate steps with new lines)'
          value={formData.instructions.join("\n")}
          onChange={handleInstructionsChange}
          required></textarea>
        <input
          type='text'
          name='tags'
          placeholder='Tags (comma-separated)'
          value={formData.tags.join(",")}
          onChange={handleTagsChange}
        />
        <button type='submit'>Create Recipe</button>
      </form>
      <Link to='/dashboard'>Go to Dashboard</Link>
    </div>
  );
};

export default CreateRecipe;
