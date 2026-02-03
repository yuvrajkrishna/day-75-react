import React, { useState } from 'react'
import Card from './Components/Card'
const App = () => {
  const [userName,setUserName] = useState('')
  const [userRole,setUserRole] = useState('')
  const [imgURL,setImgURL] = useState('')
  const [userDesc,setUserDesc] = useState('')

  const [allUsers,setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();

    const oldUsers = [...allUsers]
    oldUsers.push({userName,userRole,userDesc,imgURL})
    console.log("form submitted");
    // console.log(userName)
    console.log(oldUsers)
    setAllUsers(oldUsers)
    setUserName('')
    setUserRole('')
    setImgURL('')
    setUserDesc('')
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form className='p-2 flex flex-wrap ' onSubmit={submitHandler}>  
        < input
         value={userName}
         onChange={(e)=>{
          setUserName(e.target.value)
         }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[48%]' 
          type="text" placeholder='Enter your name'/>
        < input
          value={imgURL}
          onChange={(e)=>{
          setImgURL(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[48%]' 
          type="text" placeholder='Image URL'/>
        < input 
          value={userRole}
          onChange={(e)=>{
            setUserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[48%]' 
          type="text" placeholder='Enter Role'/>
        < input
          value={userDesc}
          onChange={(e)=>{
            setUserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[48%]' 
          type="text" placeholder='Enter Description'/>
        <button 
          className='bg-emerald-500 active:scale-95  px-2 py-2 rounded m-2 w-[96%]'>Create User</button>
      </form>

      <div className='px-4 py-10 flex flex-wrap gap-4 '>
          {
            allUsers.map(function(elem,idx){
              return <div key={idx} className='w-[23vw]  bg-white text-black rounded-xl px-8 py-8 text-center flex flex-col items-center '>
              <img className='h-24 w-24 rounded-full object-cover object-center' src={elem.imgURL} alt="" />
              <h1 className='text-2xl mt-2 font-semibold'>{elem.userName}</h1>
              <h5 className='text-lg text-blue-500 font-semibold my-3'>{elem.userRole}</h5>
              <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
              <button className='px-4 py-2 bg-red-600 text-white text-xs cursor-pointer active:scale-95 font-semibold mt-3'>Remove</button>
            </div>
            })
          }
      </div>
    </div>
    
  )
}

export default App
