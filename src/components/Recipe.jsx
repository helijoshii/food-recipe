import React, { useEffect } from "react";
import burger from "../assets/burger.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Recipe = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState([]);

  if (id) {
    async function ingredientsData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=657a5d8319f94e9791258f69b7034779`
      );
      setIngredients(response.data.ingredients);
      console.log(response);
    }

    useEffect(() => {
      ingredientsData();
    }, []);
  }

  return (
    <div className="mt-10 mx-20">
      <div>
        <p className="font-medium text-sm leading-6 text-slate-500">
          Classic burger, 15 mins cook time
        </p>
        <p className="font-bold text-7xl uppercase text-red-500">Hamburger</p>
      </div>
      <div className="mt-10  flex justify-around gap-0">
        <img
          src={burger}
          className="h-[360px] w-[400px] bg-red-500 object-cover"
          alt=""
          srcset=""
        />
        <div className="text-left pr-28">
          <ul className="text-base text-slate-600 font-medium">
            {ingredients.map((e) => {
              return (
                <li>
                  {e.amount.metric.value} {e.amount.metric.unit} {e.name}
                </li>
              );
            })}

            {/* <li> 1 cup finely chopped cabbage</li>
            <li>1 cup finely chopped carrot</li>
            <li>1 cup finely chopped capsicum</li>
            <li>1 cup finely chopped onion</li>
            <li>1 cup finely chopped tomato</li>
            <li>1 cup finely chopped lettuce</li>
            <li>beef</li>
            <li>cheese</li>
            <li>bread</li>
            <li>mayo</li>
            <li>mustard</li>
            <li>pickles</li>
            <li>lettuce</li> */}
          </ul>
        </div>
      </div>
      <div className="uppercase mt-4 flex gap-20 font-semibold text-slate-700 text-base">
        <div className="flex flex-col">
          <p className="text-slate-500">Calories</p>
          <p className="pt-2 text-4xl lowercase">650</p>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-500">Protein</p>
          <p className="pt-2 text-4xl lowercase">31g</p>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-500">Fat</p>
          <p className="pt-2 text-4xl lowercase">27g</p>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-500">Carbs</p>
          <p className="pt-2 text-4xl lowercase">42g</p>
        </div>
      </div>

      <div className="mb-24 mt-20">
        <p className="font-semibold text-3xl leading-8 text-slate-800 uppercase">
          Preparation
        </p>
        <hr className="border-red-500 border-1 " />
        <p className="font-normal text-base leading-6 text-slate-500 mt-4">
          The hamburger is a sandwich consisting of one or more cooked patties
          of ground meat, usually beef, placed inside a sliced bread roll or
          bun. The patty may be pan fried, grilled, smoked or flame broiled.
          Hamburgers are often served with cheese, lettuce, tomato, onion,
          pickles, bacon, or chiles; condiments such as ketchup, mayonnaise,
          mustard, relish, or "special sauce"; and are frequently placed on
          sesame seed buns.
        </p>
        <p className="font-normal text-base leading-6 text-slate-500 mt-4">
          The hamburger is a sandwich consisting of one or more cooked patties
          of ground meat, usually beef, placed inside a sliced bread roll or
          bun. The patty may be pan fried, grilled, smoked or flame broiled.
          Hamburgers are often served with cheese, lettuce, tomato, onion,
          pickles, bacon, or chiles; condiments such as ketchup, mayonnaise,
          mustard, relish, or "special sauce"; and are frequently placed on
          sesame seed buns.
        </p>
      </div>
    </div>
  );
};

export default Recipe;
