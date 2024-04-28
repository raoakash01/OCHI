import React from "react";
import  { useEffect , useState } from 'react'

function Ready() {
    const [rotate , setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
      setRotate(angle-180);
  })
})
    return(
        <div className=" data-scroll data-scroll-section data-scroll-speed='.1' ready relative h-screen w-full bg-[#CDEA68]">
            <div className="text_part pt-20"><h1 className='flex items-center uppercase text-[14vw] leading-[13vw] h-full font-["Founders Grotesk X-Condensed"] font-bold text-center justify-center'>READY <br/>TO START <br/>THE PORJECT?</h1></div>
            <div className=' flex -mt-10 absolute gap-10 left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
                <div className='relative w-4/5 h-4/5 rounded-full bg-zinc-900'><h1 className='text-center py-[4.5vw] font-["Founders Grotesk"] font-bold text-zinc-100 '>Play</h1>
                  <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full'>
                <div className='w-[2.5vw] h-[2.5vw] rounded-full bg-zinc-100'></div>
                </div>
                </div>
                </div>
                <div className='flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
                <div className='relative w-4/5 h-4/5 rounded-full bg-zinc-900'><h1 className='text-center py-[4.5vw] font-["Founders Grotesk"] font-bold text-zinc-100 '>Play</h1>
                  <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full '>
                <div className='w-[2.5vw] h-[2.5vw] rounded-full bg-zinc-100'></div>
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Ready