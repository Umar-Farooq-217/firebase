import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <button className=" mt-10 bg-green-500 py-3 btn px-4">click</button>

      <button className="ml-10 bg-red-600 text-xl p-3 anima ">Users</button>

      <Image width={100}  height={100}  src='/flower.avif' className='bg-white flex m-auto rotation' />
    </div>
  )
}
