import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const FoodMarquee = () => {
    const [foodMarquee, setFoodMarquee] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/food_details")
          .then((res) => res.json())
          .then((data) => setFoodMarquee(data))
          .catch((error) => console.error(error));
      }, []);


  return (
    <div className="p-5">
        <h2 className="text-5xl my-10 text-center font-extrabold">All of our food collections</h2>
      <Marquee speed={70} direction="left" pauseOnHover autoFill >
        {
            foodMarquee.map((marqueeFood) => (<div key={marqueeFood.id}>
                <img className="w-96 h-96 rounded-full mx-5" src={marqueeFood.image_url} alt="" />
                <h3 className="mt-5 text-center font-extrabold text-3xl">{marqueeFood.food_name}</h3>
            </div>))
        }
      </Marquee>
    </div>
  );
};

export default FoodMarquee;
