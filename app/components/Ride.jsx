import React from 'react'

const Ride = () => {
  return (
    <div className='bg-[#D9D9D9] py-9 w-[420px] m-auto '>
      <div className='m-auto items-center justify-center w-[357px]'>
        <h1 className='text-[19px] '>1. Ride-Sharing App</h1>
        <p className='text-[10px]'><span className='font-bold'>Role:</span> Lead Full Stack Developer</p>
        <p className='text-[10px]'><span className='font-bold'>Technologies:</span> JavaScript, React, Node.js, MongoDB, Express.js, Tailwind CSS</p>
        <p className='text-[10px]'><span className='font-bold'>Description: </span>I am currently leading the technical architecture and development of a robust ride-sharing platform for a state governor's office. This project focuses on building a secure, efficient, and reliable transportation service designed to scale.</p>

        <div>
            <span className='text-[10px] font-black'>Key Contributions:</span>
            <ul className="list-outside text-[10px] list-disc">
                <li><span className='font-black'>Architectural Design:</span> Designed the scalable and secure backend architecture, selecting a MongoDB database to handle a high volume of transactions and user data.</li>
                <li><span className='font-black'>Real-time Tracking: </span>Implemented and optimized real-time location services for both drivers and passengers, ensuring transparency and safety through a seamless user experience.</li>
                <li><span className='font-black'>Dynamic Fare Calculation:</span> Developed and refined a dynamic pricing algorithm based on real-time data, including distance, time, and demand.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Ride;
