import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCards from "../components/FoodCards";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import RandomRecipe from "../components/RandomRecipe";

const Home = () => {
  return (
    <>
      <div>
        <div className="skewed"></div>
        <Navbar />
        <Hero />
        <RandomRecipe />
        <Joke />
        <div className="min-h-[200px] bg-white"></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
