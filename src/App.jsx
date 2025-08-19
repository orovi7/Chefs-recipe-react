

import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import WantToCook from './Components/Cooking/WantToCook';
import Nav from "./Components/Navbar/Nav";
import OurRecipe from './Components/our-recipe/OurRecipe';
import Recipes from './Components/Recipes/Recipes';

function App() {
  const [cooking, setCooking] = useState([]);
  const [clickTime, setClickTime] = useState(0);
  const [toast, setToast] = useState(false);

  const handleWantToCook = (recipe) => {
    // console.log(recipe);
    const newCooking = [...cooking, recipe]
      setCooking(newCooking);
      // setClicked([...clicked, value.recipe_id]) 
  }

  useEffect(() => {
   if(clickTime > 1){
   setToast(true);
   const timer = setTimeout(() => setToast(false), 3000);
   return () => clearTimeout(timer);
   }

  }, [clickTime]);

  const handleToast = () => {
    setClickTime(prev => prev +1);
  }
 

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <OurRecipe></OurRecipe>
    <div className='md:flex mt-10 gap-7 px-9'>
      <Recipes   handleWantToCook={ handleWantToCook}></Recipes>
    <WantToCook cooking={cooking}></WantToCook>
    </div>

      
    </>
  )
}

export default App
