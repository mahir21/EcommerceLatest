import React from "react";
import ThirdCarousel from "./ThirdCarousel";

const Hero = () => {
  return (
    <div className="">
      <section className="relative bg-[#E6D5B8] bg-center flex items-center justify-center text-white">
        <div className="flex justify-start w-full pl-8">
          <span className="text-gray-600 text-4xl font-extrabold flex text-left">
            One Stop Destination For Your EveryDay Fashion
          </span>
        </div>
        <ThirdCarousel></ThirdCarousel>
      </section>
    </div>
  );
};

export default Hero;
