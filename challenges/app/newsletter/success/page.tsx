"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Success = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = () => {
    router.replace("/newsletter", { scroll: true });
  };

  if (!params.has("email")) {
    router.replace("/newsletter");
    return null;
  }

  const ConfirmationMessage = () => (
    <div className="flex flex-col justify-center flex-1">
      <img src="/icon-success.svg" alt="" className="w-16" />
      <div className="text-newsletterbg font-bold text-4xl sm:text-5xl mt-8">
        Thanks for <br />
        subscribing!
      </div>
      <div className="text-newsletterbg mt-5 text-base w-full sm:w-5/6">
        A confirmation mail has been sent to{" "}
        <strong>{params.get("email")}</strong>. Please open and click the button
        inside to confirm your subscription.
      </div>
    </div>
  );

  return (
    <div className="bg-newsletterbg flex justify-center items-center h-screen w-screen">
      <div className="w-full h-full sm:h-fit sm:max-w-md sm:rounded-[30px] bg-white mx-auto p-10 flex flex-col">
        <ConfirmationMessage />
        <div
          className="bg-newsletterbg rounded-md text-white cursor-pointer font-bold text-center p-3 w-full hover:bg-gradient-to-r hover:from-pink-800 hover:to-newslettertomato hover:shadow-lg hover:shadow-newslettertomato mt-8"
          onClick={handleClick}
        >
          Dismiss message
        </div>
      </div>
    </div>
  );
};

export default Success;
