import Image from 'next/image'
import React from 'react'

const   Nav = () => {
  return (
    <>
    <nav className="row-start-1 flex justify-between items-center px-4 py-4 border-b border-gray-300">
        <Image src="/img/Brand.png" height={100} width={400} alt='menu' className='h-[67px] w-[153px]' />
        
      {/* <h1 className="text-2xl font-bold">Portfolio</h1> */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="hover:underline hover:underline-offset-4 cursor-pointer">Home</li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer">About</li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer">Services</li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer">Portfolio</li>
        <li className="hover:underline hover:underline-offset-4 cursor-pointer">Contact</li>
      </ul>
      {/* <button className="md:hidden flex items-center px-2 py-1 border rounded" aria-label="Open menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}
        <Image src="/img/menu.png" height={50} width={50} alt='menu' className='w-[24px]' />
    </nav>
    </>
  )
}

export default Nav
