import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({ handleWantToCook,}) => {
            
    // declare state and useEffect to load data
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
         fetch('recipes.json')
         .then(res => res.json())
         .then(data => setRecipes(data));
    }, [])
         

    return (
       
           <div className='grid md:grid-cols-2 grid-cols-1 md:w-2/3  gap-5'>
             {
                recipes.map(recipe => <Recipe   handleWantToCook={ handleWantToCook} recipe={recipe}></Recipe>)
            }
           </div>
                
            
         

       
    );
};

export default Recipes;