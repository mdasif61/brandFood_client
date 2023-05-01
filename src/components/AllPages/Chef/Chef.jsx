import React from "react";
import "./Chef.css";

const Chef = ({ chef }) => {
  const { chef_name, image, years_of_experience, number_of_recipes, likes } =
    chef;
  return (
    <div className="bg-white p-10 h-[550px] rounded-b-2xl flex flex-col justify-between">
      <div className="h-[250px] bg-black overflow-hidden rounded-b-2xl">
        <img className="chef" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-black text-xl font-bold mb-4 mt-7">
          Chef Name : {chef_name}
        </h1>
        <div className="p-5 bg-gradient-to-r rounded-l-xl from-red-100 to-transparent text-gray-800">
          <h3>Experience : {years_of_experience}</h3>
          <h3>Numbers of recipes : {number_of_recipes}</h3>
          <h3>Likes : {likes}</h3>
        </div>
      </div>
      <button className="btn mt-4 bg-red-500 border-none w-full text-white">
        View Recipes
      </button>
    </div>
  );
};

export default Chef;
