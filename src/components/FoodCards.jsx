import React from "react";
import food from "../assets/demofood.png";

const FoodCards = ({ foodType, foodName, foodDescription }) => {
  return (
    <>
      <div className="height-[563px] w-[306px] ">
        <img src={food} alt="" srcset="" />
        <div>
          <h4>Rice</h4>
          <h2>Rice with Chili Sauce and Chicken </h2>
          <p>
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
