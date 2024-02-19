'use client'
import React, { useState } from 'react'
import { IoLogoCodepen } from "react-icons/io";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
export default function Navbar() {
  let Links = [
    { name: 'Home', link: "/" },
    { name: 'About', link: "/" },
    { name: 'Contact', link: "/" },
    { name: 'Blog', link: "/" },
  ]

  const [open,setOpen]=useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
  return (
    <div>
    <nav className='md:flex justify-between items-center px-10 pt-4 lg:bg-slate-400 md:bg-red-300 sm:bg-green-200'>
      <div className='flex justify-center items-center md:static sm:absolute sm:left-2 sm:top-3'>
        <IoLogoCodepen className='color-blue-400 text-5xl pr-2 ' />
        <h1 className='text-xl font-bold'>Umar Farooq</h1>
      </div>
      <ul className={`md:flex sm:pt-12 md:pt-0 text-xl font-bold ${open ? 'top-20 opacity-100' : 'top-[-300px]'} md:opacity-100  `}>
        {Links.map((link) => (
          <li className='hover:bg-black rounded-3xl sm:mt-5 md:mt-0  py-2 px-6 ml-3 hover:text-white sm:text-center' key={link.name}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div onClick={toggleMenu}>
      {open ? (
        <IoMdClose className='text-3xl absolute right-5 top-6 md:hidden' />
      ) : (
        <IoMenu className='text-3xl absolute right-5 top-6 md:hidden' />
      )}
    </div>
  </div>
  )
}
