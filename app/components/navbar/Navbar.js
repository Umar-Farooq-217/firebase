'use client'
import React, { useState } from 'react';
import { IoLogoCodepen } from "react-icons/io";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  let Links = [
    { name: 'Home', link: "/" },
    { name: 'About', link: "/about" },
    { name: 'Contact', link: "/contact" },
    { name: 'Blog', link: "/blog" },
  ]

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className='md:flex md:justify-between sm:block md:items-center md:px-10 pt-4 bg-green-400'>
        <div className='flex justify-center items-center   sm:bg-green-400 md:w-auto sm:w-full'>
          <IoLogoCodepen className='color-blue-400 text-5xl pr-2 ' />
          <h1 className='text-xl font-bold'>Umar Farooq</h1>
        </div>
        <ul className={`md:flex md:mt-0 sm:mt-16 md:pb-0 sm:pb-8 font-bold text-xl  ${open? 'block transition-all ease-in duration-500':'hidden'}`}>
          {Links.map((link) => (
            <li className='hover:bg-black rounded-3xl sm:mt-6 md:mt-0  py-2 px-6  text-center hover:text-white sm:text-center' key={link.name}>
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
  );
}

