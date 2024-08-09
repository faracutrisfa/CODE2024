import React from "react";
import Rectangle from "../assets/image/Rectangle.svg";
import paperBlue from "../assets/cover/paperBlue.png";
import intersect from "../assets/image/intersect.svg";

export default function WhatAbstract() {
  return (
    <div
      className="relative flex items-start mt-36"
      style={{
        backgroundImage: `url(${paperBlue})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-evenly lg:justify-between w-full h-full px-4 lg:px-20">
        <div className="flex items-center z-20">
          <img
            src={Rectangle}
            className="absolute hidden lg:block w-[20rem] h-[35rem] mt-20"
            alt="Rectangle"
          />
        </div>

        <div className="flex flex-col justify-center w-full lg:w-[48rem] h-auto lg:h-[12rem] text-primary-50 container z-30">
          <h1 className="leading-[3rem] lg:leading-[4rem] font-MadeMirage text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 flex justify-center text-center lg:justify-start flex-shrink-0 items-stretch">
            What Extended Abstract Is?
          </h1>
          <p className="font-Metropolis text-lg lg:text-xl font-medium leading-normal mb-12 lg:mb-16 items-stretch text-center lg:text-justify">
            Extended Abstract is a longer summary of a paper which is more
            comprehensive than a typical abstract. The purpose is to provide a
            more detailed overview of the paper or research, allowing readers to
            understand the essence and contribution of the study without having
            to read the entire document.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-12 lg:gap-5">
            <button className="bg-primary-50 rounded-[4rem] text-secondary-90 text-center font-Metropolis leading-5 text-sm lg:text-md font-semibold py-2 lg:py-3 px-8 lg:px-16 flex justify-center items-center hover:bg-secondary-70 hover:text-primary-50">
              Guidebook
            </button>
            <button className="bg-primary-50 rounded-[4rem] text-secondary-90 text-center font-Metropolis leading-5 text-sm lg:text-md font-semibold py-2 lg:py-3 px-8 lg:px-16 flex justify-center items-center hover:bg-secondary-70 hover:text-primary-50">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
