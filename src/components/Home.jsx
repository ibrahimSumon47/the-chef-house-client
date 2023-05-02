import React from "react";
import Banner from "./Banner";
import ChefCard from "./chefCard";
import FoodDetails from "./FoodDetails";
import FoodMarquee from "./FoodMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodDetails/>
      <FoodMarquee/>
      <ChefCard />
    </div>
  );
};

export default Home;
