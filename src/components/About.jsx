import { motion } from 'framer-motion'
import React from 'react'

function About() {
  motion
  return (
    <div  className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full gap-5 border-t-[1px] mt-20 pt-20 border-[#a1b562]'>
          <div className="second_part flex">
          <h1 className='font-["Neue Montreal"] w-1/2 font-semibold align-top text-[1vw] leading-[4.5vw] tracking-tight'>
        What you can expect:
        </h1>
        <div className='w-1/2 flex'><h1 className='font-["Neue Montreal"] w-1/2  align-top text-[1vw] tracking-tight'>
        
        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
        <br></br><br></br><br></br>
        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
        </h1>
        <div className='pl-32 py-20'>
            <p className="font-['Founders Grotesk'] mb-15 mt-5">S:</p>
            <div className="dels font-['Neue Montreal']">
                <a text-xl block font-light>Facebook</a><br></br>
                <a text-xl block font-light>Twitter</a><br></br>
                <a text-xl block font-light>LinkedIn</a><br></br>
                <a text-xl block font-light>Instagram</a><br></br>
            </div>
            </div>
        </div>
        
         
          </div>
        
        <div className='w-full flex gap-5 border-t-[1px] mt-10 pt-10 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-[3vw]'>Our Approach:</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 text-white rounded-full uppercase'>Read More
                <div className='w-2.5 h-2.5 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'></div>
        </div>
        </div>
    </div>
  )
}

export default About