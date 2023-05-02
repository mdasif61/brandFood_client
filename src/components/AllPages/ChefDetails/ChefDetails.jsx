import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../../assets/Images/detailsBanner.jpg'
import './ChefDetails.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ChefDetails = () => {
    const ChefDetail = useLoaderData()
    console.log(ChefDetail)
    return (
        <div className='my-10 w-full mx-0'>
            <header className='bg-white w-full relative'>
                <img src={banner} alt="" />
                <div className='chefAll'>
                    <div className='chefImg'>
                        <img src={ChefDetail.image} alt="" />
                    </div>
                    <div className='chefInfo bg-black w-[400px] mt-4 p-5 bg-opacity-60'>
                        <h1 className='text-red-500 font-bold'>{ChefDetail.chef_name}</h1>
                        <p className='text-sm'>{ChefDetail.bio}</p>
                        <div className='bg-white flex text-sm justify-between py-2 px-4 mt-3 text-red-500 font-semibold'>
                            <h3>Likes : {ChefDetail.likes}</h3> ||
                            <h3>Number of Recipe : {ChefDetail.number_of_recipes} ||</h3>
                            <h3>Experience : {ChefDetail.years_of_experience}</h3>
                        </div>
                    </div>
                </div>
            </header>
            <div className='w-full my-12'>
                <table className='table border my-6 w-full'>
                    <thead className='border'>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Ingredients</th>
                            <th>Cooking Method</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border'>{ChefDetail.recipe_name.map(recipe=><p>{recipe}</p>)}</td>
                            <td className='border'>{ChefDetail.ingredients.map(ingred=><p>{ingred}</p>)}</td>
                            <td className='border'>{ChefDetail.cooking_method}</td>
                            <td className='border'>
                            {ChefDetail.rating}
                                <p><Rating
                                placeholderRating={ChefDetail.rating}
                                readonly
                                emptySymbol={<FaRegStar className='text-orange-500'/>}
                                placeholderSymbol={<FaStar className='text-orange-500'/>}
                                fullSymbol={<FaStar className='text-orange-500'/>}
                                >
                                </Rating></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='w-full text-center'>
                <button className='btn bg-red-500 border-none text-white'>Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;