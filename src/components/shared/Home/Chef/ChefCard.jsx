import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefDetailsCard, setChefDetailsCard] = useState([]);

  useEffect(() => {
    fetch(
      "https://the-chef-house-server-ibrahimsumon47.vercel.app/chef_details"
    )
      .then((res) => res.json())
      .then((data) => setChefDetailsCard(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2
        className="text-4xl font-extrabold text-center py-10"
        style={{ backgroundColor: "#273262" }}
      >
        Best <span style={{ color: "#c69860" }}>Chefs</span> in Our{" "}
        <span style={{ color: "#ffc811" }}>Chef House</span>
      </h2>
      <div className="md:grid grid-cols-2 place-items-center place-self-auto px-14 py-5 md:px-10 bg-white">
        {chefDetailsCard.map(
          ({ id, chef_picture1, chef_name, experience, recipes, Likes }) => (
            <div key={id}>
              <div className="card lg:card-side bg-base-100 shadow-xl my-5 mx-5">
                <figure>
                  <LazyLoad height={325} width={384}>
                    <img
                      className="w-96 h-auto md:h-96"
                      src={chef_picture1}
                      alt="Chef"
                    />
                  </LazyLoad>
                </figure>
                <div className="mx-5">
                  <h2 className="card-title mt-10 md:mt-20">{chef_name}</h2>
                  <p className="mb-5">Experience: {experience}</p>
                  <p>Recipes: {recipes.recipes_number}</p>
                  <div className="">
                    <div className="flex mt-5">
                      <p className="">Likes: {Likes}</p>
                    </div>
                    <Link to={`chef_details/${id}`}>
                      <button className="btn btn-primary mt-5 w-56 my-10">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChefCard;
