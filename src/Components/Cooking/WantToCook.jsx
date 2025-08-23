import React from 'react';
import Cook from '../Cook/Cook';

const WantToCook = ({ cook,   handleCurrentCooking}) => {
    return (
        <div className=' border-2 border-[#28282833] mb-6 rounded-lg'>
            <div className='my-5 pb-3 border-b-2'>
                <h2 className='text-center font-bold text-2xl'>Want to Cook : {cook.length}</h2>
            </div>
            {/* <table className='ml-20 items-center '>
                <tr className=''>
                    <th className='text-[#878787] pr-16  font-medium'>Name</th>
                    <th className='text-[#878787] pr-10 font-medium'>Time</th>
                    <th className='text-[#878787]  font-medium'>Calories</th>
                </tr>
                {/* <tr>
                    <td>hello</td>
                    <td>new</td>
                    <td>here</td>
                </tr> */}
                {/* <tr>
                    
                    {
                        cooking.map(cook => <Cook cook={cook}></Cook>)
                    }
                   
               </tr>
            </table>  */}

            <div>
               <div  className='flex justify-start gap-12 mb-3 px-16'>
                 <div><p className='text-[#878787]'>Name</p></div>
                <div><p className='text-[#878787]'>Time</p></div>
                <div><p className='text-[#878787]'>Calories</p></div>
               </div>
               {/* second part */}
               <div>
                    {
                        cook.map((cook, idx) => <Cook idx={idx + 1}  handleCurrentCooking={handleCurrentCooking} cook={cook}></Cook>)
                    }
                   
               </div>
            </div>
        </div>
    );
};

export default WantToCook;