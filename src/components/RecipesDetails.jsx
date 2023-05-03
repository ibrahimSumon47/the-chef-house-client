import React from "react";
import { FaHeart } from "react-icons/fa";

const RecipesDetails = ({ recipeCard }) => {
  return (
    <div className="grid grid-cols-1 md:flex md:flex-col-3 gap-5 mx-5">
      {/* Card 1 */}
      <div
        className="card card-compact md:w-2/3 shadow-xl p-5"
        style={{ backgroundColor: "#f5ebd3" }}
      >
        <figure>
          <img src={recipeCard[0].recipe_img} alt="Shoes" />
        </figure>
        <div
          className="mt-5"
          style={{ backgroundColor: "#f5ebd3", color: "#4e4b4d" }}
        >
          <h2 className="card-title text-3xl italic">
            {recipeCard[0].recipe_name}
          </h2>
          <p className="mt-10 font-semibold text-2xl">
            Ingredients: <br />
            {recipeCard[0].ingredients}
          </p>
          <p className="mt-10 font-semibold text-2xl">
            Cooking Method: <br />
            {recipeCard[0].cooking_method}
          </p>
          <div>
            <p className="flex justify-between text-2xl mt-10 font-semibold">
              Rating: {recipeCard[0].rating}{" "}
              <button>
                <FaHeart className="text-red-500 " />
              </button>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div
        className="card card-compact md:w-2/3 bg-base-100 shadow-xl p-5"
        style={{ backgroundColor: "#eeedee" }}
      >
        <figure>
          <img src={recipeCard[1].recipe_img} alt="Shoes" />
        </figure>
        <div
          className="mt-5"
          style={{ backgroundColor: "#eeedee", color: "#18b6b1" }}
        >
          <h2 className="card-title text-3xl italic">
            {recipeCard[1].recipe_name}
          </h2>
          <p className="mt-10 font-semibold text-2xl">
            Ingredients: <br />
            {recipeCard[1].ingredients}
          </p>
          <p className="mt-10 font-semibold text-2xl">
            Cooking Method: <br />
            {recipeCard[1].cooking_method}
          </p>
          <div>
            <p className="flex justify-between mt-10 font-semibold text-2xl">
              Rating: {recipeCard[1].rating}{" "}
              <button>
                <FaHeart className="text-red-500 " />
              </button>
            </p>
            <p></p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div
        className="card card-compact md:w-2/3 bg-base-100 shadow-xl p-5"
        style={{ backgroundColor: "#9adced" }}
      >
        <figure>
          <img src={recipeCard[2].recipe_img} alt="Shoes" />
        </figure>
        <div
          className="mt-10"
          style={{ backgroundColor: "#9adced", color: "#ef751e" }}
        >
          <h2 className="card-title text-3xl italic">
            {recipeCard[2].recipe_name}
          </h2>
          <p className="mt-10 font-semibold text-2xl">
            Ingredients: <br />
            {recipeCard[2].ingredients}
          </p>
          <p className="mt-10 font-semibold text-2xl">
            Cooking Method: <br />
            {recipeCard[2].cooking_method}
          </p>
          <div>
            <p className="flex justify-between mt-10 font-semibold text-2xl">
              Rating: {recipeCard[2].rating}{" "}
              <button>
                <FaHeart className="text-red-500 " />
              </button>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
