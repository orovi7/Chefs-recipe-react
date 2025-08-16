import React from 'react';

const WantToCook = ({cooking}) => {
    return (
        <div className='w-1/3 border-2 border-[#28282833] rounded-lg'>
            <div className='my-5 pb-3 border-b-2'>
                <h2 className='text-center font-bold text-2xl'>Want to Cook : {cooking.length}</h2>
            </div>
            <table className='ml-20 items-center '>
                <tr className=''>
                    <th className='text-[#878787] pr-16  font-medium'>Name</th>
                    <th className='text-[#878787] pr-10 font-medium'>Time</th>
                    <th className='text-[#878787]  font-medium'>Calories</th>
                </tr>
                <tr>
                    <td>hello</td>
                    <td>new</td>
                    <td>here</td>
                </tr>
            </table>
        </div>
    );
};

export default WantToCook;