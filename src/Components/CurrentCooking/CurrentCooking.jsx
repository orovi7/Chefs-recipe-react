import React from "react";
import CurrentCook from "../CurrentCook/CurrentCook";

const CurrentCooking = ({currentCooking, time, calorie}) => {
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
            <p className='text-[#878787]'>Name</p>
          </div>
          <div>
            <p className='text-[#878787]'>Time</p>
          </div>
          <div>
            <p className='text-[#878787]'>Calories</p>
          </div>
        </div>
        {/* second part */}
        <div>
         {
            currentCooking.map((curCook, idx) => <CurrentCook idx={idx + 1} curCook ={curCook}></CurrentCook>)
         }
        </div>
        {/* total section */}
         <div className="flex justify-end mr-4 mb-3 gap-4">
                <div><p>Total time =</p> <p>{time} minutes</p></div>
                <div><p>Total time =</p> <p>{calorie} calories</p></div>
            </div>
      </div>
    </div>
  );
};

export default CurrentCooking;
