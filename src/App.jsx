
import { IoSearchSharp } from "react-icons/io5";
import './App.css'

function App() {
 

  return (
    <>
     <nav className='flex justify-between p-7 items-center'>
      {/* name part */}
      <div>
       <h1 className='text-3xl font-bold'>Recipe Calories</h1>
      </div>
{/* option part */}
       <div className='flex gap-5'>
      <ul><li><a>Home</a></li></ul>
      <ul><li><a>Recipes</a></li></ul>
      <ul><li><a>About</a></li></ul>
      <ul><li><a>Search</a></li></ul>
      </div>
{/* search bar & user part */}
       <div className="flex items-center gap-3 bg-[#150B2B0D] px-4 py-2 rounded-3xl">
       <IoSearchSharp />
        <input className="bg-transparent outline-none placeholder:text-black" type="text" placeholder='Search' />
      </div>
     </nav>
      
    </>
  )
}

export default App
