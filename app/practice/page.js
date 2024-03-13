import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <button className=" mt-10 bg-green-500 py-3 btn px-4">click</button>

      <button className="ml-10 bg-red-600 text-xl p-3 anima ">Users</button>

      <Image width={100}  height={100}  src='/flower.avif' className='bg-white flex m-auto rotation' />

      <div className="flex m-auto">
        <button className="px-7 py-2 text-white font-bold colors flex m-auto mt-7">Colors</button>
      </div>
<div className="w-10 h-10 square"></div>

    </div>
  )
}
