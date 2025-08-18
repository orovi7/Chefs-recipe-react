import React from 'react';
// import bannerImage from './chef1.png'


const Banner = () => {
    return (
        // <div style={{backgroundImage : `url(${bannerImage})`}}>
        <div  className=' h-[500px] md:h-[600px] mb-10 bg-cover bg-center bg-no-repeat ' style={{backgroundImage : "url('/chef1.png')"}}>
             
           <div className='text-center  items-center pt-36 flex-row justify-center'>
        
             <h1 className='md:text-5xl text-2xl font-bold text-white leading-tight'>Discover an exceptional cooking <br />  class tailored for you!</h1>
          <p className='text-white md:text-base text-sm pt-4 pb-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
             Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
         
           </div>
           <div className='flex justify-center gap-4 '>
            <button className='bg-[#0BE58A]  text-black font-bold text-base md:p-4 p-2  rounded-full '>Explore Now</button>
            <button className='bg-transparent text-white border-2 font-bold text-base md:p-4 p-2  rounded-full'>Our Feedback</button>
           </div>
          
        </div>
    );
};

export default Banner;