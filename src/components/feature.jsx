import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function feature() {
  const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({y:"0"});
  };
  const handleHoverExit = (index) => {
    cards[index].start({y:"100%"});
  }
  
  
  return (
    
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2 pb-20 border-zinc-150'>
            <h1 className='text-7xl font-["Neue Montreal "] tracking-tighter font-semibold'>Featured Project</h1></div>
            <div className='px-20'>
            <div className="cards s-full flex gap-20 mt-10">
              <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverExit(0)} className="cardContainer relative w-1/2 h-[75vh]">
                  <h1 className="absolute  flex overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                  {"FYDE".split('').map((item, index)=>(
                  <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className="inline-block">
                    {item}</motion.span>))}
                </h1>
                
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/Fyde.png'></img>
                </div>
              </motion.div>
              <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverExit(1)} className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute  flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                {"VISE".split('').map((item, index)=>(
                <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className="inline-block">
                {item}</motion.span>))}
                </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/vise.jpg'></img></div>
              </motion.div>
              
            </div>
            <div className="cards s-full flex gap-20 mt-10">
              <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverExit(2)} className="cardContainer relative w-1/2 h-[75vh]">
                  <h1 className="absolute  flex overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                  {"PREMIUM".split('').map((item, index)=>(
                  <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className="inline-block">
                    {item}</motion.span>))}
                </h1>
                
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/Premium.png'></img>
                </div>
              </motion.div>
              <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverExit(3)} className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute  flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                {"TRAWA".split('').map((item, index)=>(
                <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className="inline-block">
                {item}</motion.span>))}
                </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/trawa.jpg'></img></div>
              </motion.div>
              
            </div>
            </div>
            
    </div>
  )
}

export default feature