import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCards from "../components/FoodCards";
import Joke from "../components/Joke";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
      <div className="skewed"></div>
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

        <Joke />
        <div className="min-h-[200px] bg-white"></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
