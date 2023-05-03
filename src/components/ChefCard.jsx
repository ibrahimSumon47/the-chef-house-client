import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefDetailsCard, setChefDetailsCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef_details")
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
          ({
            id,
            chef_picture1,
            chef_name,
            experience,
            bio_description,
            Likes,
          }) => (
            <div key={id}>
              <div className="card lg:card-side bg-base-100 shadow-xl my-5 mx-5">
                <figure>
                  <img
                    className="w-96 h-auto md:h-96"
                    src={chef_picture1}
                    alt="Chef"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{chef_name}</h2>
                  <p>Experience: {experience}</p>
                  <h3 className="w-52">Bio: {bio_description}</h3>
                  <div className="">
                    <div className="flex mt-5">
                      <p className="">Likes: {Likes}</p>
                      <button className="">
                        <FaRegHeart />
                      </button>
                    </div>
                    <Link to={`chef_details/${id}`}>
                      <button className="btn btn-primary mt-5 w-56">
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
