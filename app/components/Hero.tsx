import Image from 'next/image'
import React from 'react'
import DownloadButton from './ui/DownloadButton'
import CallButton from './ui/CallButton'

const Hero = () => {
  return (
    <div className='min-w-[390px] flex flex-col justify-between  items-center relative mt-[49px]'>

      <div className='flex items-end '>

      {/* social icons */}
      <div className='absolute left-[20px] flex flex-col gap-6 mt-10 ml-5'>
        <Image src="/social-icons/linkedin-01.png" height={25} width={25} alt='menu' className='' />
        <Image src="/social-icons/twitter.png" height={25} width={25} alt='menu' className='' />
        <Image src="/social-icons/instagram.png" height={25} width={25} alt='menu' className='' />
        <Image src="/social-icons/tiktok.png" height={25} width={25} alt='menu' className='' />
      </div>

      {/* ohakwechi image */}
      <Image src="/img/ohakwechi-img.png" height={300} width={200} alt='menu' className='w-[281px] h-[291px] m-auto' />
      </div>
     

     {/* come on let's talk */}
      <Image src="/img/side-circle.png" height={200} width={100} alt='menu' className='w-[139.2px] absolute right-0 top-[-6rem]' />

      {/* Hero Text */}
      <div className='m-auto text-center flex flex-col mt-10'>
        <span>Portfolio of</span>
        <div className='text-[40px] font-black leading-[48px] flex'>

        <span>Chigozie Ohakwe</span>
        
        </div>
        <span className='w-[258px] m-auto'>Senior Full Stack & AI Integration Specialist</span>
      </div>
      <div>
        <DownloadButton />
        <CallButton />
        <div className='flex items-center gap-2 justify-center mt-4 text-sm text-[#535151]'>
                <Image src="/icons/download2.png" height={50} width={50} alt='menu' className='w-[24px]' />
          
          <span className='underline'>Download CV.</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
