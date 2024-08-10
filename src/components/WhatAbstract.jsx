import React from "react";
import { motion } from "framer-motion";

export default function WhatAbstract() {
  return (
    <div
      className="relative flex items-start mt-36 bg-paper-blue-abstract-2 lg:bg-paper-blue-abstract bg-contain lg:bg-no-repeat bg-center w-full h-[36rem] lg:h-[60rem] lg:bg-cover"
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-evenly lg:justify-between w-full h-full px-4 lg:px-20">
        <div className="flex items-center"></div>

        <div className="flex flex-col justify-center w-full lg:w-[47rem] h-screen text-primary-50">
          <h1
            className="leading-[3rem] lg:leading-[4rem] font-MadeMirage md:px-0 md:py-0 text-2xl text-justify md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 flex justify-center md:text-center lg:justify-start flex-shrink-0 items-stretch"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            What Extended Abstract Is?
          </h1>
          <p className="font-Metropolis py-4 px-2 md:px-0 md:p-0 text-sm md:text-lg lg:text-xl font-medium leading-normal mb-12 lg:mb-16 items-stretch text-center lg:text-justify">
            Extended Abstract is a longer summary of a paper which is more
            comprehensive than a typical abstract. The purpose is to provide a
            more detailed overview of the paper or research, allowing readers to
            understand the essence and contribution of the study without having
            to read the entire document.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-x-12 lg:gap-5">
            <a
              href="https://drive.google.com/drive/folders/15PghpvgzbzGSTqZBMyzbHdY1Er-kmIt3"
              target="_blank"
              className="bg-primary-50 w-[9rem] h-[3rem] md:w-auto md:h-auto gap-2 rounded-[3.75rem] md:rounded-[4rem] text-secondary-90 text-center font-Metropolis leading-5 text-sm lg:text-md font-semibold md:py-2 lg:py-3 md:px-8 lg:px-16 flex justify-center items-center hover:bg-secondary-70 hover:text-primary-50 hover:border-primary-50 border border-transparent"
            >
              Guidebook
            </a>
            <a
              href="https://bit.ly/m/CODE2024"
              target="_blank"
              className="bg-primary-50 w-[9rem] h-[3rem] md:w-auto md:h-auto gap-2 rounded-[3.75rem] md:rounded-[4rem] text-secondary-90 text-center font-Metropolis leading-5 text-sm lg:text-md font-semibold md:py-2 lg:py-3 md:px-8 lg:px-16 flex justify-center items-center hover:bg-secondary-70 hover:text-primary-50 hover:border-primary-50 border border-transparent"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
