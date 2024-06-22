import React from "react";
import { FoodSVG, FoodSVG2, FoodSVG3, FoodSVG4, FoodSVG5 } from "../icons";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="max-w-[702px] text-center px-4 mt-24">
          <h1 className="font-bold text-6xl mb-4">
            Delicious Recipes For Home-Cooked Meals
          </h1>
          <p className="font-normal text-base text-gray-700">
            Elevate your home-cooked meals with our delicious recipes
            collection. From classic comfort foods to international dishes, we
            have something for every taste. Impress your loved ones with your
            culinary expertise and try our recipes today.
          </p>
        </div>
        <FoodSVG className=" absolute bottom-20 right-28 " />
        <FoodSVG2 className=" absolute bottom-[230px] right-48 " />
        <FoodSVG3 className=" absolute top-[100px] right-[100px] " />
        <FoodSVG4 className=" absolute top-28 left-20 " />
        <FoodSVG5 className=" absolute bottom-[100px] left-24 " />
      </div>
    </>
  );
};

export default Hero;
