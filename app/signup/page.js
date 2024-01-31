'use client'
import React, { useState } from 'react'

export default function page() {
    const [userName,setUserName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);

    const signupHandler = async()=>{
        if(!email || !password || !userName){
            alert('Fill All Fields')
        }
    }
  return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}>
    <input className='border-red-500 px-10 border-2 my-5' type="text" onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Name' /><br />
    <input className='border-red-500 px-10 border-2 my-5' type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}  /><br />
    <input className='border-red-500 px-10 border-2 my-5' type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}  /><br />
    <button className='bg-blue-400 font-bold py-2 px-3 rounded-lg hover:text-white ' onClick={signupHandler}>Sign Up</button>
    
    
    
    </form>
    
    </div>
  )
}
