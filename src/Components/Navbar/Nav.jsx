import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Nav = () => {
    return (
        <div>
             <nav className='flex justify-between p-7 items-center'>
      {/* name part */}
      <div>
       <h1 className='text-3xl font-bold'>Recipe Calories</h1>
      </div>
{/* option part */}
       <div className='flex gap-5'>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Home</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Recipes</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">About</a></li></ul>
      <ul><li><a className="cursor-pointer text-[#150B2B99]">Search</a></li></ul>
      </div>
{/* search bar & user part */}
       <div className="flex items-center gap-3 bg-[#150B2B0D] px-4 py-2 rounded-3xl">
       <IoSearchSharp />
        <input className="bg-transparent outline-none placeholder:text-black" type="text" placeholder='Search' />
      </div>
     </nav>
        </div>
    );
};

export default Nav;