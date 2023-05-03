import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import banner from "../../../assets/Images/detailsBanner.jpg";
import "./ChefDetails.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage/LoadingPage";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const ChefDetail = useLoaderData();
  console.log(ChefDetail);
  const [message, setMassage] = useState("");
  const handleToast = () => {
    const message = toast(ChefDetail.recipe_name);
    setMassage(message);
  };
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingPage />;
  }
  return (
    <div className="my-10 w-full mx-0">
        {/* header start */}
      <header className="bg-white w-full relative">
        <img src={banner} alt="" />
        <div className="chefAll">
          <div className="chefImg">
            <LazyLoad offset={0}>
              <img src={ChefDetail.image} alt="" />
            </LazyLoad>
          </div>
          <div className="chefInfo bg-black w-[400px] mt-4 p-5 bg-opacity-60">
            <h1 className="text-red-500 font-bold">{ChefDetail.chef_name}</h1>
            <p className="text-sm">{ChefDetail.bio}</p>
            <div className="bg-white flex text-sm justify-between py-2 px-4 mt-3 text-red-500 font-semibold">
              <h3>Likes : {ChefDetail.likes}</h3> ||
              <h3>Number of Recipe : {ChefDetail.number_of_recipes} ||</h3>
              <h3>Experience : {ChefDetail.years_of_experience}</h3>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* chef details table start */}
      <div className="w-full my-12">
        <table className="table border my-6 w-full">
          <thead>
            <tr className="text-center">
              <th>Recipes</th>
              <th>Ingredients</th>
              <th>Cooking Method</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">
                <div className="flex flex-col">
                  <div className="flex justify-evenly">
                    {ChefDetail.recipe_name.map((recipe) => (
                      <p className="text-white text-lg border-b px-2 pb-2">
                        {recipe}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-evenly">
                    {ChefDetail.recipeImg.map((recipeImg) => (
                      <LazyLoad offset={800}>
                        <img
                          className="h-28 rounded-full w-28 border-opacity-20 border-black border-[12px] m-5"
                          src={recipeImg}
                        />
                      </LazyLoad>
                    ))}
                  </div>
                </div>
              </td>
              <td className="border">
                {ChefDetail.ingredients.map((ingred) => (
                  <p className="text-white my-2 text-lg">{ingred}</p>
                ))}
              </td>
              <td className="border">
                <p className="text-white text-lg">
                  {ChefDetail.cooking_method}
                </p>
              </td>
              <td className="border">
                {ChefDetail.rating.map((r) => (
                  <div>
                    <p className="text-white my-1">{r}</p>
                    <p>
                      <Rating
                        placeholderRating={r}
                        readonly
                        emptySymbol={<FaRegStar className="text-orange-500" />}
                        placeholderSymbol={
                          <FaStar className="text-orange-500" />
                        }
                        fullSymbol={<FaStar className="text-orange-500" />}
                      ></Rating>
                    </p>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full text-center">
          <button
            disabled={message}
            onClick={handleToast}
            className="btn bg-red-500 border-none text-white"
          >
            Favorite
          </button>
        </div>
      </div>
      {/* chef details table end */}
    </div>
  );
};

export default ChefDetails;
