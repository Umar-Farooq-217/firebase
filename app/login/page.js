'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async () => {
     

        try { 
            if (!email || !password) {
                alert('Fill All Fields');
                return;
            }

            const user= await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
    };
  return (
    <div>
    <form onSubmit={(e)=>e.target.value}>
    
        <input
            className='border-red-500 px-10 border-2 my-5'
            type="email"
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            required
        /><br />
        <input
            className='border-red-500 px-10 border-2 my-5'
            type="password"
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            required
        /><br />
        <button onClick={loginHandler} className='bg-blue-400 font-bold py-2 px-3 rounded-lg hover:text-white'>login</button>
    </form>
</div>
  )
}
