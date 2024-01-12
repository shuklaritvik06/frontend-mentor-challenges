"use client";

import React, { useState } from "react";

const FAQS = () => {
  let data = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum."
    },
    {
      title: "Is Frontend Mentor free?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum."
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum."
    },
    {
      title: "How can I get help if I'm stuck on a challenge?",
      data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi beatae rerum."
    }
  ];
  const [current, setCurrent] = useState<null | number>(null);
  const handleClick = (elementIndex: number) => {
    if (elementIndex === current) {
      setCurrent(null);
      return;
    }
    setCurrent(elementIndex);
  };
  return (
    <div className="bg-pink-100 h-screen w-screen">
      <img
        src="/background-pattern-desktop.svg"
        alt=""
        className="w-full h-80 object-cover"
      />
      <div className="absolute bg-white rounded-xl top-[20%] max-w-lg w-full left-1/2 -translate-x-1/2 p-6 shadow-md shadow-faq">
        <div className="flex space-x-3 items-center">
          <img src="/icon-star.svg" alt="" className="w-8 h-8" />
          <div className="text-4xl font-extrabold text-faqtext">FAQs</div>
        </div>
        <div className="flex flex-col space-y-8 mt-8">
          {data.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-col space-y-3 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <div className="flex justify-between space-x-3">
                  <div className="text-faqtext text-base font-bold">
                    {element.title}
                  </div>
                  {index === current ? (
                    <img src="/icon-minus.svg" alt="" />
                  ) : (
                    <img src="/icon-plus.svg" alt="" />
                  )}
                </div>
                {index === current && (
                  <div className="text-sm text-faqdata mr-5 leading-6">
                    {element.data}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
