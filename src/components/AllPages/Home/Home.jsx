import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <>
      <div className="bg-black bg-opacity-40 rounded-xl flex p-12 mt-10">
        <div className="w-[50%] flex items-center">
          <div className="">
            <h1 className="text-7xl font-bold text-white mb-10">
              Amazing Cooking{" "}
            </h1>
            <p className="mt-5 leading-8">
              Chinese cuisine is known for its unique blend of flavors,
              textures, and colors that create
              <br />a delicious and harmonious dining experience. It is
              characterized by the use of fresh
              <br />
              ingredients, delicate seasoning, and a wide range of cooking
              techniques, including
              <br />
              stir-frying, steaming, and braising.
            </p>
            <button className="btn bg-red-500 text-white border-none mt-10">
              Choose Your Chef
            </button>
          </div>
        </div>
        <div className="w-[50%] p-10">
          <img
            className="border-2 rounded-tl-2xl rounded-br-2xl"
            src="https://i.ibb.co/94sxL90/13-20.jpg"
            alt=""
          />
        </div>
      </div>
      <section>
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </section>
    </>
  );
};

export default Home;
