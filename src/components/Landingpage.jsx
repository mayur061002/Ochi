import React from 'react'
import "../App.css"
import img from "../assets/images/image01.jpg"

import { FaArrowUp } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Landingpage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.5" className='w-full h-screen bg-[#f1f1f1] pt-1 max-md:pt-20  '>
        <div className='changef mt-36 px-16  '>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                return <div className='masker '>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div
                                initial={{width: "0"}}
                                animate={{width: "9vw"}} 
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 1.5}}
                                
                                className=' h-[6vw] relative mr-3 '>

                                <img className='w-[9vw] h-[6vw] rounded-md object-cover' src={img} alt="" />
                            </motion.div>
                        )}
                        <motion.h1
                            initial={{y: "100%"}}
                            animate={{y: "0"}}
                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}

                         className="pt-[.1vw] -md-[1vw] uppercase text-[9vw] leading-[6.7vw] max-md:text-[60px] max-md:leading-[9vw] tracking-normal">
                            {item}
                        </motion.h1>
                    </div>
                </div>
            })}

        </div>
        <div className='border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center pr-5 max-md:flex-col max-md:items-start max-md:pt-8 '>
            {["For public and private companies", "Form the first pitch to IPO"
                
            ].map((item, index) => {
               return <p className='text-md px-14 py-4 font-[20px] text-[17px] tracking-normal leading-none'>{item}</p>
            })}
            <div className='start flex items-center gap-2 mt-2 pr-8 max-md:ml-12'>
                <div className='px-3 py-1 border-[1px] border-black rounded-full'>START THE PROJECT</div>
                <div className='w-8 h-8 flex items-center justify-center rounded-full border-black border-[1px]'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage;