import React, { useState } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe,  handleWantToCook}) => {

  
    // console.log(recipe)
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border-2 border-[#28282833] rounded-lg mb-3 p-5'>
          {/* image here */}
          <div className='rounded-lg mb-3'> <img className='rounded-md' src={recipe_image} alt="" /></div>
          {/* header here */}
          <div className='border-b-2 pb-5 mb-2'>
            <h3 className=' text-start text-lg font-semibold'>{recipe_name}</h3>
            <p className='text-start text-sm text-[#150B2B99]'>{short_description}</p>
          </div>
          <div className='text-start border-b-2 pb-3'>
            <p className='text-base font-semibold'>Ingredients : {ingredients.length}</p>
            { 
                ingredients.map(ingred => <span><li className='ml-5'>{ingred}</li></span>)
            }
          </div>
          <div className='flex justify-between mt-5 mb-5'>
            <span className='flex items-center gap-1'><IoTimeOutline /> {preparing_time} minutes</span>
            <span className='flex items-center gap-1'><FaFire /> {calories}</span>
          </div>

          <button onClick={() => handleWantToCook(recipe)}  className='bg-[#0BE58A] rounded-3xl text-black
           font-semibold border-2 border-[#0BE58A]
           flex justify-start p-2 px-3'>Want to cook</button>
            
               
       </div>
    );
};

export default Recipe;