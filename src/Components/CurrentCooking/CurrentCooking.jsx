import React from "react";
import CurrentCook from "../CurrentCook/CurrentCook";

const CurrentCooking = ({currentCooking}) => {
  return (
    <div className=" border-2 border-[#28282833] rounded-lg">
      <div className="my-5 pb-3 border-b-2">
        <h2 className="text-center font-bold text-2xl">
          Currently Cooking : {currentCooking.length}
        </h2>
      </div>

      <div>
        <div className="flex justify-start gap-12 mb-3 px-16">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Time</p>
          </div>
          <div>
            <p>Calories</p>
          </div>
        </div>
        {/* second part */}
        <div>
         {
            currentCooking.map(curCook => <CurrentCook curCook ={curCook}></CurrentCook>)
         }
        </div>
      </div>
    </div>
  );
};

export default CurrentCooking;
