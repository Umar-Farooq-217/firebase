import React from 'react'
import { IoLogoCodepen } from "react-icons/io";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center px-10'>
        <div className='flex justify-center items-center'>
        <IoLogoCodepen className='color-blue-400 text-5xl pr-2 ' />
        <h1 className='text-xl font-bold'>Umar Farooq</h1>
        </div>
        <ul className='flex text-xl font-bold '>
          <Link href=''><li className='ml-7 py-2 px-3 hover:text-gray-500 hover:bg-blue-400 hover:rounded-2xl flex justify-center'>home</li></Link>
          <Link href=''><li className='ml-7 py-2 px-3 hover:text-gray-500 hover:bg-blue-400 hover:rounded-2xl flex justify-center'>home</li></Link>
          <Link href=''><li className='ml-7 py-2 px-3 hover:text-gray-500 hover:bg-blue-400 hover:rounded-2xl flex justify-center'>home</li></Link>
          <Link href=''><li className='ml-7 py-2 px-3 hover:text-gray-500 hover:bg-blue-400 hover:rounded-2xl flex justify-center'>home</li></Link>
          <Link href=''><li className='ml-7 py-2 px-3 hover:text-gray-500 hover:bg-blue-400 hover:rounded-2xl flex justify-center'>home</li></Link>
        </ul>
      </nav>
      
    </div>
  )
}
