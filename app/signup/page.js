'use client'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import AddUser from '../components/addUser/AddUser';

export default function SignUpPage() {
  
    
    return (
      <div>
      <AddUser/>
      </div>
    );
}
