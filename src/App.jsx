import React, { useState } from 'react'

const App = () => {
  const [userName,setUserName] = useState('')
  const submitHandler = (e)=>{
    console.log("form submitted");
    e.preventDefault();
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form className='p-2 flex flex-wrap justify-center' onSubmit={submitHandler}>  
        < input
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" placeholder='Enter your name'/>
        < input
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" placeholder='Image URL'/>
        < input 
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" placeholder='Enter Role'/>
        < input
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' 
          type="text" placeholder='Enter Description'/>
        <button 
          className='bg-emerald-500 active:scale-95 border-2 px-5 py-2 rounded m-2 w-[90%]'>Create User</button>
      </form>
    </div>
  )
}

export default App
