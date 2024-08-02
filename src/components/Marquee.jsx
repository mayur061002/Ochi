import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div className='w-full py-28 rounded-tl-2xl rounded-tr-2xl  bg-[#004d43fe]'>
        <div className='text font-bold border-t-[.5px] border-b-[.5px] leading-none border-white-200 gap-10 text-[white] overflow-hidden flex whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[28vw] -mb-[3vw] -mt-[6vw] '>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[28vw] -mb-[3vw] -mt-[6vw] '>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[28vw] -mb-[3vw] -mt-[6vw] '>WE ARE OCHI</motion.h1>

        </div>
    </div>
  )
}

export default Marquee;