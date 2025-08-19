import React from 'react';

const Cook = ({cook}) => {
    const {recipe_name, recipe_id, preparing_time, calories} = cook;
    console.log(cook)
    return (
        <div className='bg-[#28282808] mb-3'>
            
            {/* <td>{recipe_name}</td>
             <td>{preparing_time}</td>
            <td>{calories}</td> */}
            <div className='flex   md:pr-4 items-center'>
                <div className='flex  items-center md:gap-4 gap-2 pl-9 w-1/3 md:mr-5'>
                    <p>{recipe_id}</p>
                <p>{recipe_name}</p>
                </div>
                <div className='flex md:gap-10 gap-3'>
             <p>{preparing_time} min</p>
                <p className='mr-5'>{calories}</p>
          </div>
          <button className='bg-[#0BE58A] rounded-3xl text-black md:text-base text-sm font-semibold border-2 border-[#0BE58A] md:p-2 p-1 md:px-3'>Preparing</button>
                </div>
          
            {/* <ol className='flex justify-between px-16 '>
                <li>{recipe_name}</li>
                <li>{preparing_time}</li>
                <li>{calories}</li>
            </ol> */}
          
           
        </div>
    );
};

export default Cook;