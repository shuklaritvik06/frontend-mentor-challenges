"use client";

import {
  EmailInputProps,
  NewsletterContentProps,
  SubscribeButtonProps
} from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewsletterContent: React.FC<NewsletterContentProps> = ({ data }) => (
  <div className="flex flex-col justify-center items-start px-8">
    <div className={`text-newsletterbg font-bold text-4xl md:text-5xl`}>
      Stay updated!
    </div>
    <div className="text-lg mt-5 text-newsletterbg">
      Join 60,000+ product managers receiving monthly updates on:
    </div>
    <div className="mt-5 space-y-5">
      {data.map(({ title }, index) => (
        <div className="flex items-center space-x-3" key={index}>
          <img src="/icon-list.svg" alt="" />
          <div className="text-newsletterbg">{title}</div>
        </div>
      ))}
    </div>
  </div>
);

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  handleEmail,
  error
}) => (
  <div className="flex flex-col mt-10 w-full space-y-1 px-8">
    <div className="flex justify-between items-center">
      <div className="text-sm font-bold text-newsletterbg">Email address</div>
      {error && (
        <div className="text-sm font-bold text-red-700">
          Valid email required
        </div>
      )}
    </div>
    <div
      className={`w-full rounded-md border ${
        error ? "border-red-500" : "border-gray-200"
      }`}
    >
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        id="email"
        placeholder="email@company.com"
        className={`p-3 border-none rounded-md outline-none w-full ${
          error ? "bg-red-200/50 placeholder:text-red-800" : ""
        }`}
      />
    </div>
  </div>
);

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  error,
  handleClick
}) => (
  <div className="px-8">
    <div
      className={`bg-newsletterbg rounded-md text-white cursor-pointer font-bold text-center p-3 mt-5 w-full ${
        !error &&
        "hover:bg-gradient-to-r hover:from-pink-800 hover:to-newslettertomato hover:shadow-lg hover:shadow-newslettertomato"
      }`}
      onClick={handleClick}
    >
      Subscribe to the monthly newsletter
    </div>
  </div>
);

const NewsLetter = () => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const imageSrc = "/illustration-sign-up-desktop.svg";
  const data = [
    { title: "Product discovery and building what matters" },
    { title: "Measuring to ensure updates are a success" },
    { title: "And much more!" }
  ];

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(false);
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (!email.match(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))) {
      setError(true);
      return;
    }
    router.replace(`/newsletter/success?email=${email}`, { scroll: true });
  };

  return (
    <div className="h-screen w-screen bg-newsletterbg flex items-center justify-center">
      <div className="h-full w-full lg:max-w-5xl md:h-fit md:p-5 md:rounded-[30px] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3">
          <div className="flex flex-col justify-center order-2 md:order-1 py-5">
            <NewsletterContent data={data} />
            <EmailInput email={email} handleEmail={handleEmail} error={error} />
            <SubscribeButton error={error} handleClick={handleClick} />
          </div>
          <div className="order-1 md:order-2">
            <img
              src={imageSrc}
              alt="Newsletter illustration"
              className="w-full h-fit md:h-full object-cover md:rounded-2xl -mt-80 md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
