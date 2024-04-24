import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 bg-[#004D43] mt-[5vh]">
      <div className='text border-t-2 border-zinc-300 border-b-2 flex whitespace-nowrap text-white overflow-hidden'>
        <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[22vw] leading-none font-["Founders Grotesk X-Condensed"] uppercase mb-10 pr-10 font-semibold' >WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[22vw] leading-none font-["Founders Grotesk X-Condensed"] uppercase mb-10 pr-10 font-semibold' >WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee