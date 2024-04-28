import { motion } from 'framer-motion'
import React from 'react'

function cards() {
  motion
  return (
    <div className='stick data-scroll data-scroll-speed="-.7" w-full h-screen flex gap-5 px-20 items-center'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className="card relative  w-full h-full  bg-[#004D43] flex items-center justify-center">
              <img className='w-32' src='/img/logo001.svg'></img>
              <button className='absolute px-5 py-1 border-[#81B05A] border-2 rounded-full left-10 bottom-10 text-[#81B05A]'>©2019–2022</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-10'>
            <div className="card relative w-1/2 h-full  bg-[#212121] flex items-center justify-center">
            <img className='w-32' src='/img/logo003.svg'></img>
            <button className='absolute px-5 py-1  border-2 rounded-full left-10 bottom-10 text-zinc-100'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative w-1/2 h-full  bg-[#212121] flex items-center justify-center">
            <img className='w-32' src='/img/logo004.png'></img>
            <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-zinc-100'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>

        </div>
    </div>
  )
}

export default cards