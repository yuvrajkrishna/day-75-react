import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw]  bg-white text-black rounded-xl px-8 py-8 text-center flex flex-col items-center '>
      <img className='h-24 w-24 rounded-full' src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className='text-2xl mt-2 font-semibold'>Yuvraj Krishna</h1>
      <h5 className='text-lg text-blue-500 font-semibold my-3'>Developer</h5>
      <p className='text-sm font-medium leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ut.</p>
      <button className='px-4 py-2 bg-red-600 text-white text-xs cursor-pointer active:scale-95 font-semibold mt-3'>Remove</button>
    </div>
  )
}

export default Card
