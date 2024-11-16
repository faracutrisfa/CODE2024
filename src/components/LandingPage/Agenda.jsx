import React from "react";
import Agenda1 from "../../assets/image/Agenda1.svg";
import Agenda2 from "../../assets/image/Agenda2.svg";

export default function Agenda() {
  return (
    <>
      <div className="flex items-center justify-center lg:mt-4 z-10 bg-paper-blue-mobile h-[1200px] lg:bg-paper-blue bg-cover lg:bg-contain bg-no-repeat w-full lg:h-[1400px]">
        <div className="flex flex-col items-center justify-center relative py-auto px-5 md:px-8">
          <p
            className="text-center font-MadeMirage text-4xl md:text-6xl font-bold leading-[3rem] lg:leading-[4.5rem] md:h-16 lg:h-12 text-primary-50 h-auto w-full lg:w-[60rem]"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            Our Main Agenda
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-x-24 mt-8">
            <img
              src={Agenda1}
              className="w-[360px] md:w-[300px] lg:w-[420px] xl:w-full transition-transform duration-300 transform hover:scale-105"
              alt="agenda1"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
            <img
              src={Agenda2}
              className="w-[360px] md:w-[300px] lg:w-[420px] xl:w-full transition-transform duration-300 transform hover:scale-105"
              alt="agenda2"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
          </div>
        </div>
      </div>
    </>
  );
}
