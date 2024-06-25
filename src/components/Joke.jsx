import React, { useEffect } from "react";
import pizza from "../assets/pizza.jfif";
import axios from "axios";
import { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const jokeapi = async () => {
    const jokes = await axios.get(
      `https://api.spoonacular.com/food/trivia/random?apiKey=657a5d8319f94e9791258f69b7034779&includeNutrition=true`
    );
    setJoke(jokes.data.text);
  };

  useEffect(() => {
    jokeapi();
  }, []);

  return (
    <div className="max-h-[500px] mt-20 relative flex justify-center items-center">
      <img src={pizza} className="h-[500px] w-full object-cover" alt="Pizza" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute bg-white w-[377px] h-[362px]">
        <div className="mx-20 my-14 text-center">
          <p className="font-medium text-2xl leading-8 pb-4">Joke of the day</p>
          <p className="font-light text-sm leading-5 text-slate-500">{joke}</p>
        </div>
      </div>
    </div>
  );
};

export default Joke;
