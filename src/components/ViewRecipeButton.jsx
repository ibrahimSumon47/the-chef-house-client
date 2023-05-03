import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipesDetails from "./RecipesDetails";

const ViewRecipeButton = () => {
  const recipeDetails = useLoaderData();
  const {
    id,
    chef_picture2,
    chef_name,
    experience,
    bio_description,
    Likes,
    recipes,
  } = recipeDetails;

  const recipeCard = recipes.recipes_details;

  return (
    <div className="">
      <div className="card lg:card-side bg-base-100 shadow-xl md:mx-96">
        <figure>
          <img
            src={chef_picture2}
            alt="Album"
          />
        </figure>
        <div className="card-body my-auto">
          <h2 className="card-title">{chef_name}</h2>
          <p className="font-bold">{bio_description}</p>
          <p className="font-bold">Experience: {experience}</p>
          <p className="font-bold">Likes: {Likes}</p>
          <p>{recipes.recipes_number} Recipes</p>
        </div>
      </div>
      <div>
        <h2>Recipes</h2>
        <RecipesDetails recipeCard={recipeCard}></RecipesDetails>
      </div>
    </div>
  );
};

export default ViewRecipeButton;
