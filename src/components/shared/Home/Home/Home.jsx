import React from "react";
import ChefCard from "../Chef/ChefCard";
import FoodDetails from "./FoodDetails";
import FoodMarquee from "./FoodMarquee";
import Banner from "./Banner";

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
