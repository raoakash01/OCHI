/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function landingPage() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[90vh] bg-white-900 pt-2' >
        <div className='textstructure mt-52 px-10'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                return <div className='masker'>
                    <div className='w-fit flex'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="w-[9vw] h-[6vw] relative top-[1vw] bg-red-500 rounded-md"></motion.div>)}
                <h1 className='flex items-center uppercase text-[9vw] leading-[7vw] h-full font-["Founders Grotesk X-Condensed"] font-bold'>{item}</h1>
            </div>
            </div>
    })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
            ))}
            <div className="start flex item-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-600 font-light text-md rounded-full uppercase">start the project</div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full">
                    <span className="rotate-[45deg]">
                        <FaArrowUpLong />
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default landingPage