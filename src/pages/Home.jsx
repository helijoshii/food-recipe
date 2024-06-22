import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCards from "../components/FoodCards";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />

        <div className="flex justify-center flex-wrap gap-5 m-1">
          <FoodCards />
          <FoodCards />
          <FoodCards />
          <FoodCards />
          <FoodCards />
          <FoodCards />
        </div>
      </div>
    </>
  );
};

export default Home;
