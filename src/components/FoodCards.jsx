import React from "react";
import food from "../assets/demofood.png";

const FoodCards = ({ foodType, foodName, foodDescription, foodImage }) => {
  return (
    <>
      {/* <div className="skewed"></div> */}
      <div className="height-[563px] w-[306px] mb-[64px] cursor-pointer  transform transition-transform duration-300 hover:scale-95">
        <img
          src={foodImage}
          className="aspect-video object-cover w-full"
          alt=""
          srcset=""
        />
        <div className="mt-4">
          <h4 className="font-bold text-sm leading-4">{foodType}</h4>
          <h2 className="font-bold text-2xl leading-8">{foodName}</h2>

          <p
            className="font-normal text-xs leading-4 text-slate-500 line-clamp-6"
            dangerouslySetInnerHTML={{ __html: foodDescription }}
          />
        </div>
      </div>
    </>
  );
};

export default FoodCards;
