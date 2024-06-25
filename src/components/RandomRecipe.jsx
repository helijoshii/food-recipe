import React from "react";
import FoodCards from "./FoodCards";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandomRecipe = () => {
  const [randomRecipe, setRandomRecipe] = useState([]);

  const randomRecipeapi = async () => {
    const randomRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=6&tags=vegetarian,dessert&excludeIngredients=quinoa&apiKey=657a5d8319f94e9791258f69b7034779`
    );
    console.log(randomRecipes?.data?.recipes);
    setRandomRecipe(randomRecipes.data.recipes);
  };

  useEffect(() => {
    randomRecipeapi();
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-5 m-1">
      {randomRecipe?.map((recipe) => {
        // <FoodCards recipe = {}/>
        return (
          <Link to={`/recipe/${recipe.id}`}>
            <FoodCards
              key={recipe.id}
              foodType={recipe.dishtypes}
              foodName={recipe.title}
              foodDescription={recipe.summary}
              foodImage={recipe.image}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RandomRecipe;
