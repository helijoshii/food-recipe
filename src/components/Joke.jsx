import React from "react";
import pizza from "../assets/pizza.jfif";

const Joke = () => {
  return (
    <div className="max-h-[500px] mt-20 relative flex justify-center items-center">
      <img src={pizza} className="h-[500px] w-full object-cover" alt="Pizza" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute bg-white w-[377px] h-[362px]">
        <div className="mx-20 my-14 text-center">
          <p className="font-medium text-2xl leading-8 pb-4">Joke of the day</p>
          <p className="font-light text-sm leading-5 text-slate-500">
            Delicious pizza with sausage and mushroom topping with tomato sauce,
            very recommended recipes.Delicious pizza with sausage and mushroom topping with tomato sauce,
            very recommended recipes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joke;