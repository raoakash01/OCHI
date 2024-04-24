import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-[3vw]'>Our Approach:</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 text-white rounded-full uppercase'>Read More
                <div className='w-2.5 h-2.5 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'></div>
        </div>
    </div>
  )
}

export default About