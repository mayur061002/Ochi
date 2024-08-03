import React, { useEffect, useState } from 'react'

const Eyes = () => {
  

  const [rotate, setRotate] = useState(0);

  const [dx, setdx] = useState(0)
  const [dy, setdy] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;  

      setdx(deltaX/40)
      setdy(deltaY/40)

      var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);

      setRotate(angle-180)

    })
  })



  return (
    <div className='eyes w-full h-screen overflow-hidden max-md:w-full max-md:h-[50%]'>
      <div data-scroll data-scroll-speed="-0.5" className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]  '>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
          <div data-scroll
            data-scroll-speed="0.08" className='w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-50 rounded-full max-md:w-28 max-md:h-28  '>
            <div style={{ transform: `translate(${dx}px, ${dy}px` }} className='w-[10vw] h-[10vw] relative bg-black rounded-full max-md:w-20 max-md:h-20'>
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] text-white">PLAY</h2>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                <div className='w-5 h-5  bg-zinc-50 rounded-full'></div>
              </div>
            </div>
          </div>
          <div data-scroll
            data-scroll-speed="0.08" className='w-[13vw] h-[13vw] flex items-center justify-center bg-zinc-50 rounded-full max-md:w-28 max-md:h-28 '>
            <div style={{ transform: `translate(${dx}px, ${dy}px` }} className='w-[10vw] h-[10vw] relative bg-black rounded-full max-md:w-20 max-md:h-20 '>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.5vw] text-white">PLAY</h2>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 text-white '>
                <div className='w-5 h-5  bg-zinc-50 rounded-full '></div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Eyes