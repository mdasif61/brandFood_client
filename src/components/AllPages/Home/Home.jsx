import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import chef from "../../../assets/Icons/chef.png";
import service from "../../../assets/Icons/service.png";
import quality from "../../../assets/Icons/quality.png";
import Lottie from "lottie-react";
import render from "../../../../public/kitchen.json";

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
            <a href="#chef">
              <button className="btn bg-red-500 text-white border-none mt-10">
                Choose Your Chef
              </button>
            </a>
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
      <section className="my-20">
        <h1 className="text-4xl text-center text-white font-semibold my-5">
          Why Us?
        </h1>
        <p className="text-center">
          Because we ensure you the best quality food and best Chef
        </p>
        <div className="flex justify-evenly mt-20">
          <div>
            <img className="w-20 mb-5" src={chef} alt="" />
            <h1 className="text-xl text-white mb-2">Get Best Chef</h1>
            <p>
              You can get best Chef on
              <br />
              your choose
            </p>
          </div>
          <div>
            <img className="w-20 mb-5" src={service} alt="" />
            <h1 className="text-xl text-white mb-2">Get Best Service</h1>
            <p>
              You can get best Service on
              <br />
              your choose Chef
            </p>
          </div>
          <div>
            <img className="w-20 mb-5" src={quality} alt="" />
            <h1 className="text-xl text-white mb-2">Get Best Quality</h1>
            <p>
              You can get best Quality on
              <br />
              Our Chef
            </p>
          </div>
        </div>
      </section>

      <section id="chef" className="grid grid-cols-3 my-20 gap-7">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </section>

      <section className="my-20">
        <fieldset className="border-2 flex p-5">
          <legend className="border-2 bg-gray-600 rounded-full text-4xl text-white py-3 px-10 font-bold">
            Another Chef
          </legend>
          <div className="w-[60%] p-5">
            <div className=" bg-white bg-opacity-20 my-5 border text-white rounded-lg hover:bg-opacity-90 hover:text-black hover:border p-5">
              <h1 className="font-bold text-lg">Martin Yan</h1>
              <p className="border-b pb-2 border-gray-400">
                Celebrity Chef and Restaurateur
              </p>
              <p>
                <small>
                  Martin Yan is a Chinese-American chef, author, and television
                  host. He is best known for hosting the cooking show "Yan Can
                  Cook," which aired on public television in the United States
                  for over 30 years. Yan is a member of the James Beard
                  Foundation and has published numerous cookbooks.
                </small>
              </p>
            </div>

            <div className=" bg-white bg-opacity-20 my-5 border text-white rounded-lg hover:bg-opacity-90 hover:text-black hover:border p-5">
              <h1 className="font-bold text-lg">Ming Tsai</h1>
              <p className="border-b pb-2 border-gray-400">
                {" "}
                Chef and Restaurateur
              </p>
              <p>
                <small>
                  Ming Tsai is a Chinese-American chef and restaurateur. He is
                  the owner of Blue Dragon, a restaurant in Boston, and the
                  author of several cookbooks. Tsai is also known for his
                  television appearances on the cooking shows "East Meets West
                  with Ming Tsai" and "Simply Ming."
                </small>
              </p>
            </div>

            <div className=" bg-white bg-opacity-20 my-5 border text-white rounded-lg hover:bg-opacity-90 hover:text-black hover:border p-5">
              <h1 className="font-bold text-lg">Danny Bowien</h1>
              <p className="border-b pb-2 border-gray-400">
                {" "}
                Chef and Restaurateur
              </p>
              <p>
                <small>
                  Danny Bowien is a Chinese-American chef and restaurateur. He
                  is the owner of Mission Chinese Food, a restaurant in San
                  Francisco and New York City. Bowien has been recognized by
                  several food industry publications, including Food & Wine and
                  Bon Appétit.
                </small>
              </p>
            </div>
          </div>
          <div className="w-[40%] bg-opacity-60 p-10 flex items-center justify-center bg-white rounded-lg">
            <Lottie animationData={render} loop={true} />
          </div>
        </fieldset>
      </section>
    </>
  );
};

export default Home;
