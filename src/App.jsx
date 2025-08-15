

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
       <div>
        
        <input type="text" placeholder='Search' />
      </div>
     </nav>
      
    </>
  )
}

export default App
