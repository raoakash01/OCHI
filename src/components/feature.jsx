import React from 'react'

function feature() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2 pb-20 border-zinc-150'>
            <h1 className='text-7xl font-["Neue Montreal "] tracking-tighter font-semibold'>Featured Project</h1></div>
            <div className='px-20'>
            <div className="cards s-full flex gap-20 mt-10">
              <div className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                  {"FYDE".split('').map((item, index)=>(<span>{item}</span>))}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/Fyde.png'></img>
                </div>
              </div>
              <div className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                {"VISE".split('').map((item, index)=>(<span>{item}</span>))}
                </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/vise.jpg'></img></div>
              </div>
              
            </div>
            <div className="cards s-full flex gap-20 mt-10">
              <div className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                {"TRAWA".split('').map((item, index)=>(<span>{item}</span>))}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/trawa.jpg'></img>
                </div>
              </div>
              <div className="cardContainer relative w-1/2 h-[75vh]">
                <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-['Founders Grotesk X-Condensed'] tracking-tighter font-bold text-8xl text-[#CDEA68]">
                {"PREMIUM".split('').map((item, index)=>(<span>{item}</span>))}
                </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full bg-cover" src='/img/Premium.png'></img></div>
              </div>
              
            </div>
            </div>
            
    </div>
  )
}

export default feature