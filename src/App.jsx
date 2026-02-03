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
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[45%]' 
          type="text" placeholder='Enter your name'/>
        < input
          value={imgURL}
          onChange={(e)=>{
          setImgURL(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[45%]' 
          type="text" placeholder='Image URL'/>
        < input 
          value={userRole}
          onChange={(e)=>{
            setUserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[45%]' 
          type="text" placeholder='Enter Role'/>
        < input
          value={userDesc}
          onChange={(e)=>{
            setUserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-1 w-[45%]' 
          type="text" placeholder='Enter Description'/>
        <button 
          className='bg-emerald-500 active:scale-95 border-2 px-5 py-2 rounded m-2 w-[90%]'>Create User</button>
      </form>

      <div className='px-4 py-10 flex flex-wrap '>
          {
            allUsers.map(function(){
              return <Card/>
            })
          }
      </div>
    </div>
    
  )
}

export default App
