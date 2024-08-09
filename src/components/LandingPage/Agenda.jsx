import React from "react";
import paperBlue from "../../assets/cover/paperBlue.png";
import Agenda1 from "../../assets/image/Agenda1.svg";
import Agenda2 from "../../assets/image/Agenda2.svg";
import layerRight from "../../assets/Timeline/Layer2Right.png";
import layerLeft from "../../assets/Timeline/layer2Left.png";

export default function Agenda() {
  return (
    <>
      <img src={layerLeft} className="absolute top-[1200px] left-0 h-[20rem] w-[22rem]" alt="" />
      <img src={layerRight} className="absolute top-[1200px] right-0 h-[20rem] w-[22rem]" alt="" />

      <div className="flex items-center justify-center mt-12 lg:mt-4 z-10 bg-paper-blue bg-cover bg-right md:bg-center bg-no-repeat w-full h-[1400px]">
        <div className="flex flex-col items-center justify-center relative pt-8 lg:pt-0 px-4 md:px-8 lg:px-0">
          <p className="text-center font-MadeMirage text-4xl md:text-6xl font-bold leading-[3rem] lg:leading-[4.5rem] md:h-16 lg:h-24  text-primary-50 h-auto w-full lg:w-[60rem]">
            Our Main Agenda
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-x-24 mt-8">
            <img
              src={Agenda1}
              className="w-full lg:w-auto h-[450px] lg:h-[700px] object-contain"
              alt="agenda1"
            />
            <img
              src={Agenda2}
              className="w-full lg:w-auto h-[450px] lg:h-[700px] object-contain"
              alt="agenda2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
