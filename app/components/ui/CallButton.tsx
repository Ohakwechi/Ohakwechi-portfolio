import Image from 'next/image'
import React from 'react'

const CallButton = () => {
  return (
    <>
       <button className='border border-black mt-[2rem] w-[286px] h-[45px] rounded-full px-4 py-2 flex items-center gap-2 justify-center'> 
      <Image src="/icons/call.png" height={50} width={50} alt='menu' className='w-[24px]' />
        {/* <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0C0C0C] to-[#727070] opacity-70 pointer-events-none">button</span> */}
        Book a call</button>
    </>
  )
}

export default CallButton
