'use client'
import React, { useState } from 'react'
import '../../app/globals.css'
import Image from 'next/image'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';


export default function page() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [students, setStudents] = useState([])

  const addData = async ()=>{
    if(!name || !email){

      alert('add all fields')
      return
    }
    const user = {
      email,
      name
    }
    try {
      const collectionName = collection(db,'students');
      await addDoc(collectionName,user)
      setStudents([...students,user])
      setEmail('')
      setName('')
alert('success')

} catch (error) {
  console.log('error',error);
  alert('sorry')
    }

  }

  const fetchDate = async () => {
    try {
      const getStudents = collection(db, 'students');
      const querySnapshot = await getDocs(getStudents);
      const studentsData = [];
  
      querySnapshot.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
  
      setStudents(studentsData);
      console.log('studentsData', studentsData);
  
      // Show alert when data is fetched successfully
      alert('Data fetched successfully!');
      
    } catch (error) {
      console.log('error', error);
      alert('Data is not fetched successfully!');
    }
  };
  const deleteHandler = async (id, email) => {
    const docRef = doc(db, 'students', id);
    try {
      await deleteDoc(docRef);
      const newStudents = students.filter((student) => student.id !== id);
      setStudents(newStudents);
    } catch (error) {
      console.log('error', error);
    }
  };
  

  return (
    <div>
      <div className="w-[350px]">
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input type="text" id="input-group-1" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        </div>
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-l-md border-gray-300 rounded-r-none dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input type="text" id="website-admin" onChange={(e) => setName(e.target.value)} className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
        </div>
        <button onClick={addData} className=" mt-10 bg-green-500 py-3 px-4 btn">Add Student</button>
      </div>

      <button className="ml-10 bg-red-600 text-xl p-3 anima">Users</button>


      <Image width={100} height={100} src='/flower.avif' className='bg-white flex m-auto rotation' alt='pic' />

      <div className="flex m-auto">
        <button onClick={fetchDate} className="px-7 py-2 text-white font-bold colors flex m-auto mt-7">Get Students</button>
      </div>
      <div className="w-10 h-10 square border"></div>


<div>
  {
    students.map((student)=>{
      return(
        <div key={student.id} className='grid lg:grid-cols-4 bg-green-400'>

        <span>{student.name}</span>
        <span>{student.email}</span>
        <button className='bg-yellow-400 text-white font-bold my-3 hover:bg-yellow-200'>Update</button>
        <button className='bg-red-400 text-white font-bold my-3 hover:bg-red-200' onClick={()=>deleteHandler(student.id)}>Delete</button>
        </div>
      )
    })
  }
</div>







    </div>
  );
}
