import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-96">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1380&t=st=1682969018~exp=1682969618~hmac=4db21d7bdea7ae7c0995ad5d84405ef9a0db9739d093bf4abfab9c543df4abcc"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Fried Chicken with Salad</h1>
            <p className="text-lg md:text-2xl text-white mt-2">You will get a full Fried Chicken with Salad.</p>
            <button className="btn btn-primary mt-4">Click here to Order</button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?w=1380&t=st=1682972995~exp=1682973595~hmac=df076f5bdaaee33a6a64fd11b330eb3f5b6e71b6eb119bf30c7b29bfb48ff783"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center text-green-100">
            <h1 className="text-3xl md:text-5xl font-extrabold">Mexican Salad </h1>
            <p className="text-lg md:text-3xl mt-2 font-bold">In this menu we will serving you Mexican Salad for full family</p>
            <button className="btn btn-primary mt-4 font-bold text-red-500">Click Here to Order</button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=1380&t=st=1682973057~exp=1682973657~hmac=7e7b9f3a00fc9934ec477faa64c1bccccc666469a065a5cf0c29eb32dac561aa"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-auto">
          <div className="text-center text-black">
            <h1 className="text-3xl md:text-5xl font-extrabold">Pizza and Burger for Lunch</h1>
            <p className="text-lg md:text-3xl mt-2 font-bold">In this menu we will serve you your lunch food with Pizza and Burger</p>
            <button className="btn btn-primary mt-4 font-bold text-red-600">Click Here to Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
