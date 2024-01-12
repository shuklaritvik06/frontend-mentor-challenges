import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="bg-[#f5d35a] h-screen w-screen flex justify-center items-center">
      <div className="max-w-xs w-full mx-auto border border-black bg-white rounded-xl p-5 shadow-blogcard">
        <img
          src="/illustration-article.svg"
          alt=""
          className="rounded-md w-full"
        />
        <div className="text-black font-bold px-3 py-1 bg-[#f5d35a] mt-5 w-fit rounded-md">
          Learning
        </div>
        <div className="mt-5 text-sm">Published 21 Dec 2023</div>
        <div className="text-xl font-bold mt-3">HTML & CSS foundations</div>
        <div className="mt-5 text-gray-500 text-sm font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
          corrupti saepe corrupti saepe.
        </div>
        <div className="flex space-x-4 items-center mt-5">
          <img src="/image-avatar.webp" alt="" className="w-8 h-8" />
          <div className="text-black font-bold">Greg Hooper</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
