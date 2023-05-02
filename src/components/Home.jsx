import React from "react";
import Banner from "./Banner";
import ChefCard from "./chefCard";
import FoodDetails from "./FoodDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodDetails/>
      <ChefCard />
    </div>
  );
};

export default Home;
