import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../Cooking/WantToCook";
import { ToastContainer, toast } from "react-toastify";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Recipes = () => {
  const notify = () => toast("already added this item !");

  // declare state and useEffect to load data
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0);
  // handle want to cook counting
    // const [click, setClick] = useState(0);
  const [currentCooking, setCurrentCooking] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    // console.log(recipe);
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
    // setClick(...click, recipe.recipe_id);
    // want to cook counting here
    // const newSET = (click + 1);
    // setClick(newSET);

    for (const cooking of cook) {
      if (cooking.recipe_id === recipe.recipe_id) {
        console.log("already added");
        notify();
        return;
      }
    }
    setCook([...cook, recipe]);
  };
  const handleCurrentCooking = (recipe, preparing_time, calories) => {
    setCurrentCooking([...currentCooking, recipe]);
    const remaining = cook.filter(
      (recip) => recip.recipe_id !== recipe.recipe_id
    );
    setCook(remaining);
   const newTime = time + parseInt(preparing_time);
   setTime(newTime);
   const newCalorie = calorie + parseInt(calories);
   setCalorie(newCalorie);
   console.log(time);


  };

  return (
    <div className="md:flex mt-10 gap-7 px-9">
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/3  gap-5">
        {recipes.map((recipe) => (
          <Recipe handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>
        ))}
      </div>
      <div>
        <ToastContainer />
        <WantToCook   handleCurrentCooking={handleCurrentCooking} cook={cook}></WantToCook>
        <CurrentCooking time={time} calorie={calorie}  currentCooking ={currentCooking}></CurrentCooking>
       
      </div>
    </div>
  );
};

export default Recipes;
