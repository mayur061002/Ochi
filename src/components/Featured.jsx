import React, { useState } from "react";
import {  motion } from "framer-motion";

const Featured = () => {
  const Data = [
    {
      id: "1",
      name: "FYDE",
      image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
      tags: ["audit", "copywriting", "sales deck", "slides design"],
    },
    {
      id: "2",
      name: "VISE",
      image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
      tags: ["agency", "compony presentation"],
    },
    {
      id: "3",
      name: "TRAWA",
      image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
      tags: ["brand identity", "design research", "invester deck"],
    },
    {
      id: "4",
      name: " PREMIUM BLEND",
      image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
      tags: ["branded tamplate"],
    },
  ];

  const [zoomed, hoverd] = useState("");
  
  return (
    <div className="w-full bg-zinc-100 rounded-tl-3xl rounded-tr-3xl  pt-20">
      <h1 className="text-[3.6vw] px-14 border-b-[2px] p-10 ">Featured projects</h1>

      <div className=" w-full  mt-5  max-md:px-0 relative max-md:   ">
        {Data.map((item, index) => {
          return (
            <div onMouseEnter={() => hoverd(index)} onMouseLeave={() => hoverd("")} className="w-1/2 h-[45vw]  inline-block p-10 max-md:p-5  max-md:mb-5 align-top relative max-md: ">
              <div className=" flex gap-2 items-center ">
                <div className="w-2 h-2 rounded-full bg-[#212121]"></div>
                <h1 className="uppercase">{item.name}</h1>
              </div>
              <div className={`group mt-2 mb-2 rounded-xl duration-700 hover:scale-90  overflow-hidden  `}>
                <img className="rounded-xl group-hover:scale-125 duration-500 " src={item.image} alt="" />
              </div>
              <div className="flex items-center gap-2 overflow-hidden max-md:flex   ">
                {item.tags.map((tag, index) => (
                  <div className="px-3 py-2 max-md:px-[2px] max-md:py-[2px] border-2 border-[#2121219a] rounded-full text-[1rem] max-md:text-[1.5vw] whitespace-nowrap uppercase">
                    <div>{tag}</div>
                  </div>
                ))}
              </div>
              <div className={`absolute flex items-center justify-center    w-[80vw] top-[50%]  ${item.id % 2 == 0 ? "left-[-70%]" : "right-[-70%]"} z-[999] pointer-events-none  whitespace-nowrap overflow-hidden  translate-y-[-50%] text-[6vw] font-bold tracking-tighter text-[#ccea69]`} >
                <h1 className="">
                  {item.name.split("").map((item, inx) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={zoomed === index ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: inx * 0.07,
                      }}
                      className="inline-block pointer-events-none ">{item}
                    </motion.span>))}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-20 max-md:p-10 " >
        <button className="px-6 py-4 bg-zinc-900 mt-20 ml-[40%] rounded-full flex items-center gap-10 text-white max-md:px-2 max-md:py-3 max-md:ml-[20%] max-md:gap-3 ">VIEW ALL CASE STUDIES
          <div className="w-3 h-3 rounded-full bg-zinc-100 max-md:w-2 max-md:h-2"></div>
        </button>
      </div>
      
      
    </div>
  );
};

export default Featured;
