import React, { useEffect, useState } from "react";

const Client = () => {
  return (
    <div className="w-full h-fit bg-zinc-100 px-14 py-16 max-md:pt-0 max-md:pb-40 max-md:px-5">
      <h1 className="text-[3.5vw] leading-none border-b-2 border-[#2121215f] pb-10">
        Client's reviews
      </h1>

      <div className="">
        <div className="flex max-md:h-[15vw]">
          <div className="w-[50vw]  h-[30vw]  p-5">
            <div className="w-full flex ">
              <div className="w-1/2 h-[30vw] ">
                <h1 className="text-lg max-md:text-base underline ">Karman Ventures</h1>
              </div>
              <div className="w-1/2  h-[30vw] ">
                <h1 className="mb-10 text-lg max-md:text-base max-md:hidden ">Services:</h1>
                <div className=" flex-col max-md:p-10 " >
                  <button className="px-4 py-2 bg-zinc-500 rounded-full max-md:hidden text-white max-md:px-2 max-md:py-3 max-md:ml-[20%] max-md:gap-3 ">INVESTOR DECK</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50vw]  h-[30vw] flex p-5 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">William Barnes</h1>
              <img
                className="w-[100px] h-[100px] max-md:hidden border-2 rounded-md mt-10 mb-5"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
              <p className="w-[70%] text-lg max-md:hidden ">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </p>
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190]">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline">Planetly</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Nina Walloch</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] underline text-lg max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190]">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline ">Workiz Easy</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Tomer Levy</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190]">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline ">Premium Blend</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Ellen Kim</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190]">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline ">Hypercare Systems</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Brendan Goss</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190] ">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline ">Officevibe</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3 ">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Raff Labrie</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex border-t border-[#21212190]">
          <div className="w-[50vw] p-3">
            <div className="w-full flex ">
              <div className="w-1/2 ">
                <h1 className="text-lg max-md:text-base underline ">Orderlion</h1>
              </div>
            </div>
          </div>
          <div className="w-[50vw] flex p-3">
            <div className="w-full ">
              <h1 className="text-lg max-md:text-base ">Stefan Strohmer</h1> 
            </div>
            <div>
              <h1 className=" text-[#21212181] text-lg underline max-md:text-base">
                READ
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
