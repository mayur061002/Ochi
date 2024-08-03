import React, { useEffect, useState } from "react";

const Ready = () => {

  const [rotate, setRotate] = useState(0);

  const [dx, setdx] = useState(0);
  const [dy, setdy] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      setdx(deltaX / 40);
      setdy(deltaY / 40);

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="w-full relative rounded-tl-3xl rounded-tr-3xl max-md:h-fit bg-[#ccea69]">
      <div className="changef  w-full pt-16 text-center text-[15vw] leading-[11.5vw] uppercase font-extrabold tracking-tight text-[#202021]">
        {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
          return (
            <div className="masker">
              <div className="overflow-hidden">{item}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full mt-16 items-center justify-center">
        <button className="px-6 py-4 bg-zinc-900 mt-2 rounded-full flex items-center gap-10 text-white max-md:px-2 max-md:py-3 max-md:gap-4 ">
          START THE PROJECT
          <div className="w-2 h-2 rounded-full bg-zinc-100 max-md:w-2 max-md:h-2 "></div>
        </button>
        <h3>OR</h3>
        <button className="px-6 py-4 bg-zinc-900 mt-2 rounded-full flex items-center gap-10 text-white max-md:px-2 max-md:py-3 max-md:gap-4 ">
          HELLO@OCHI.DESIGN
          <div className="w-2 h-2 rounded-full bg-zinc-100 max-md:w-2 max-md:h-2 "></div>
        </button>
      </div>
      <br />
      <br />

      <div className="eyes w-full  overflow-hidden max-md:w-full max-md:h-[50%]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div  data-scroll
            data-scroll-speed="0.2" className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-50 rounded-full max-md:w-28 max-md:h-28  ">
            <div style={{ transform: `translate(${dx}px, ${dy}px` }}className="w-[10vw] h-[10vw] relative bg-black rounded-full max-md:w-20 max-md:h-20">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] text-white">PLAY</h2>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`,}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                <div className="w-5 h-5  bg-zinc-50 rounded-full"></div>
              </div>
            </div>
          </div>
            <div data-scroll
            data-scroll-speed="0.2" className="w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-50 rounded-full max-md:w-28 max-md:h-28 ">
             <div style={{ transform: `translate(${dx}px, ${dy}px` }} className="w-[10vw] h-[10vw] relative bg-black rounded-full max-md:w-20 max-md:h-20 ">
                <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] text-white">PLAY</h2>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`, }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 text-white ">
                <div className="w-5 h-5  bg-zinc-50 rounded-full "></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
