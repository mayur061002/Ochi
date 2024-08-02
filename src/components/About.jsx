import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <div className="w-[80vw]">
        <h1 className=" text-[3.5vw] max-md:text-[30px] leading-none tracking-normal">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="w-full h-full border-t-[1px] border-b-[1px] border-[#a1b562] mt-14  flex max-md:block ">
        <div className=" w-[50vw] h-[22vw] p-5">
          <h3 className="text-[1.2vw] max-md:text-[3.5vw]">
            What you can expect:
          </h3>
        </div>
        <div className=" w-[50vw] h-full p-5 flex max-md:block max-md:w-full max-md:p-0">
          <div className="w-[50%] max-md:w-full  overflow-hidden px-5 mt-18">
            <h3>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
              <br />
              <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h3>
          </div>
          <div className="flex flex-col p-20 justify-center max-md:-ml-14">
            <h3>S:</h3>
            <br />
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (item, index) => (
                <a href="#" className="underline">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex max-md:flex-col ">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] max-md:text-2xl ">Our approach:</h1>
          <button className="px-6 py-4 bg-zinc-900 mt-2 rounded-full flex items-center gap-10 text-white max-md:px-2 max-md:py-3">
            READ MORE
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>

        <div className=" w-[50vw] mt-5 rounded-xl bg-red-300 max-md:w-[70vw] ">
        <img className="w-full h-full object-cover rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
