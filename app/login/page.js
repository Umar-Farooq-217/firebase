'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase/firebase'; // Assuming you have initialized Firestore in your firebase.js file

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Attempt to sign in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed in:', user.uid);
        } catch (error) {
            // Handle sign-in errors
            console.error('Sign-in error:', error.message);
        }
        
    };

    return (
        <div>
            <form onSubmit={loginHandler}>
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
                <button type="submit" className='bg-blue-400 font-bold py-2 px-3 rounded-lg hover:text-white'>login</button>
            </form>
        </div>
    );
}
