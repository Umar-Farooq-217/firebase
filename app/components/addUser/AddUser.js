import React, { useState } from 'react';
import { db } from '@/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            if (!email || !password) {
                alert('Fill All Fields');
                return;
            }

            const user = {
                email,
                password
            };

            const usersCollection = collection(db, 'users');
            const newUserRef = await addDoc(usersCollection, user);
            console.log('Document added with ID: ', newUserRef.id);

            // Reset form fields after successful signup
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
    };

    return (
        <div>
            <form onSubmit={signupHandler}>
                <input
                    className='border-red-500 px-10 border-2 my-5'
                    type="email"
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />
                <input
                    className='border-red-500 px-10 border-2 my-5'
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <button type="submit" className='bg-blue-400 font-bold py-2 px-3 rounded-lg hover:text-white'>Sign Up</button>
            </form>
        </div>
    );
}
