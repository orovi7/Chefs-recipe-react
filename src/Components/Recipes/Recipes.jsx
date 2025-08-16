import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
            
    // declare state and useEffect to load data
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
         fetch('recipes.json')
         .then(res => res.json())
         .then(data => setRecipes(data));
    }, [])
         

    return (
        <div>
            <header className='text-center px-7'>
                <h1 className='text-3xl font-bold'>Our Recipes</h1>
                <p className='text-[#150B2B99]'>
                    Welcome to a world of flavor, where every dish tells a story. 
                    Our recipes are crafted with love, tested in real kitchens, 
                     and designed <br /> to bring joy to your table—Explore, experiment, and make each recipe your own. Happy cooking 
                </p>
           <div className='grid grid-cols-2 w-2/3 gap-5 mt-12'>
             {
                recipes.map(recipe => <Recipe recipe={recipe}></Recipe>)
            }
           </div>
                
            </header>
         

        </div>
    );
};

export default Recipes;