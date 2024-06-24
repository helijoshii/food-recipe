import React from "react";
import food from "../assets/demofood.png";

const FoodCards = ({ foodType, foodName, foodDescription }) => {
  return (
    <>
    {/* <div className="skewed"></div> */}
      <div className="height-[563px] w-[306px] mb-[64px] cursor-pointer  transform transition-transform duration-300 hover:scale-95">
        <img src={food} alt="" srcset="" />
        <div className="mt-4">
          <h4 className="font-bold text-sm leading-4">Rice</h4>
          <h2 className="font-bold text-2xl leading-8">Rice with Chili Sauce and Chicken </h2>
          <p className="font-normal text-xs leading-4 text-slate-500">
            Chicken and chili sauce rice is a popular dish in Indonesia. It
            consists of rice cooked in a rich and spicy chicken sauce. Chicken
            sauce is often made from chicken that is fried to a crisp and then
            mixed with a special seasoning sauce.
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodCards;
