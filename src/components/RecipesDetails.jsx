import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Store } from "react-notifications-component";


const RecipesDetails = ({ recipeCard }) => {
  const [loveButton, setLoveButton] = useState({});

  const handleLoveButton = (id) => {
    setLoveButton({ ...loveButton, [id]: true });
    Store.addNotification({
      title: "Wonderful!",
      message: "This recipe has been added tp your favorites!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
  const isLoveButton = (id) => loveButton[id] || false;

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
              <span>
                {!isLoveButton(recipeCard[0]._id) ? (
                  <button
                    onClick={() => {
                      handleLoveButton(recipeCard[0]._id);
                    }}
                  >
                    <FaHeart className="text-red-600" />
                  </button>
                ) : (
                  <button disabled>
                    <FaHeart className="text-green-600" />
                  </button>
                )}
              </span>
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
              <span>
                {!isLoveButton(recipeCard[1]._id) ? (
                  <button
                    onClick={() => {
                      handleLoveButton(recipeCard[1]._id);
                    }}
                  >
                    <FaHeart className="text-red-600" />
                  </button>
                ) : (
                  <button disabled>
                    <FaHeart className="text-green-600" />
                  </button>
                )}
              </span>
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
              <span>
                {!isLoveButton(recipeCard[2]._id) ? (
                  <button
                    onClick={() => {
                      handleLoveButton(recipeCard[2]._id);
                    }}
                  >
                    <FaHeart className="text-red-600" />
                  </button>
                ) : (
                  <button disabled>
                    <FaHeart className="text-green-600" />
                  </button>
                )}
              </span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
