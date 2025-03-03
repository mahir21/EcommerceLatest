// "use client";
import React from "react";

const Steps = () => {
  const direction = [
    { number: "1", text: "Select Products" },
    { number: "2", text: "Add To Cart" },
    { number: "3", text: "Make Payment" },
    { number: "4", text: "Get Product Delivered At Your Home" },
  ];

  return (
    <div className="bg-[#FDF8EE] p-24">
      <p className="p-4  text-black flex justify-center text-2xl font-semibold">
        Get Product In Your Hand In 4 Steps
      </p>
      <div className="flex justify-between gap-20">
        {direction.map((step, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="w-12 h-12 flex text-black font-semibold justify-center items-center rounded-full bg-[#C396F7] hover:bg-yellow-500 border-white ">
              {step.number}
            </div>

            <div className="text-black mt-2s">{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
