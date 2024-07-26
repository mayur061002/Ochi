import React from 'react'

import { FaArrowUp } from "react-icons/fa6";


const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-[#f1f1f1] pt-1'>
        <div className='textstructure mt-36 px-16'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                return <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <div className='w-[10vw] h-[5.5vw] rounded-md bg-red-500 relative -top-[.1vw]'>
                                img
                            </div>
                        )}
                        <h1 className="pt-[.1vw] -md-[1vw] uppercase text-[6vw] leading-[6vw] tracking-tighter font-[Roboto,sans-serif] font-bold">
                            {item}
                        </h1>
                    </div>
                </div>
            })}

        </div>
        <div className='border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center pr-5'>
            {["For public and private companies", "Form the first pitch to IPO"
                
            ].map((item, index) => {
               return <p className='text-md px-14 py-4 font-[20px] text-[17px] tracking-tight leading-none'>{item}</p>
            })}
            <div className='start flex items-center gap-2 mt-2 pr-8'>
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