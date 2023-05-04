import React, { useEffect, useState } from "react";
import { FaEye } from 'react-icons/fa';

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food_details")
      .then((res) => res.json())
      .then((data) => setFoodDetails(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="text-center my-10 font-extrabold">
        <h2 className="text-4xl">
          <span style={{color: "#c69860"}}>Special Food's</span> that you will <span style={{color: "#e94a8b"}}>Love</span>
        </h2>
        <h3 className="text-3xl mt-5" style={{color: "#ffc811"}}>Check out!!</h3>
      </div>
      <div className="md:grid grid-cols-4 place-items-center place-self-auto px-14 py-5 md:px-10 " style={{backgroundColor: "#fff3ed"}}>
        {foodDetails.map((food) => (
          <div key={food.id}>
            <div className="card card-compact w-96 shadow-xl my-10 font-semibold" style={{backgroundColor: "#343736"}}>
              <figure>
                <img className="w-96 h-52" src={food.image_url} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-extrabold">{food.food_name}</h2>
                <p className="mb-5">{food.post_title}</p>
                <hr />
                <div className="card-actions mt-5">
                  <div className="flex gap-60">
                    <div className="flex gap-2">
                      <img
                        className="h-10 w-10 rounded-full "
                        src={food.user_img}
                        alt=""
                      />
                      <p className="mt-1">{food.user_name}</p>
                    </div>
                    <p className="flex gap-2"><FaEye className="mt-1"/> {food.viewers}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDetails;
