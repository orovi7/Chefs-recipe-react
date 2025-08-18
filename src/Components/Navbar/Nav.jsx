import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
    return (
        <div>
             <nav className='md:flex justify-between p-7 items-center'>
      {/* name part */}
      <div>
       <h1 className='text-3xl text-center md:mb-0 mb-4 font-bold'>Recipe Calories</h1>
      </div>
{/* option part */}
       <div className='md:flex md:mb-0 mb-3 text-center  gap-5'>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Home</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Recipes</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">About</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Search</a></li></ul>
      </div>
{/* search bar & user part */}
       <div className="flex justify-between items-center gap-3 bg-[#150B2B0D] px-4 py-2 rounded-3xl">
       <div className='flex items-center gap-3'>
        <IoSearchSharp />
        <input className="bg-transparent outline-none placeholder:text-black" type="text" placeholder='Search' />
       </div>
        <div className='text-[#0BE58A] text-xl '><FaRegCircleUser /></div>
      </div>
     
     </nav>
        </div>
    );
};

export default Nav;