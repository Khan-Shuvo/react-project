import React from 'react'
import bac_img from '../assets/background.jpeg'
export default function Herosection() {
  return (
    <>
      <div className="flex flex-col items-center" style={{
        backgroundImage: `url(${bac_img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vh"
      }}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"> Push Your
          <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> Limit </span>

        </h1>
        <p className='mt-10 tex-lg text-center tex-neutral-500 max-w-4xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis deleniti quis at. Iusto nisi rerum est vitae quasi!
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
            Sart For Free
          </a>
          <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
      </div>
    </>
  )
}
