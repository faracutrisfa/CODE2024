import React from "react";
import paperBlueLight from "../assets/cover/paperBlueLight.svg";

const Award = () => {
  return (
    <div className="bg-paper-blue-light w-full md:h-[60rem] h-auto my-36 lg:bg-cover bg-no-repeat self-stretch">
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center px-8 pt-16 md:px-24 md:pt-24">
        <h1 className="font-MadeMirage text-4xl lg:text-6xl leading-[120%] text-primary-50 font-bold self-stretch">
          Award of Participations
        </h1>
        <h6 className="font-MadeMirage text-base md:text-2xl lg:text-4xl font-medium leading-[120%] text-primary-50 self-stretch mb-6">
          Join the competition and win some great prizes!
        </h6>

        <div className="flex flex-col lg:flex-row items-center justify-center md:gap-x-4  mb-4 gap-4 md:gap-8 lg:gap-4">
          <div className="border-4 border-secondary-50 rounded-[2rem] w-[20rem] md:w-[30rem] h-[16rem] lg:w-[40rem] lg:h-[34.5rem] p-3 flex flex-col items-center gap-2 flex-shrink-0 self-stretch">
            <div
              className="border bg-money-mobile md:bg-cover md:bg-money bg-no-repeat w-full h-full flex flex-col justify-center items-center gap-2 flex-shrink-0 rounded-[2rem]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="flex flex-col items-center justify-between w-full gap-4 lg:gap-8">
            <div className="border-4 border-secondary-50 rounded-[2rem] w-[20rem] md:w-[30rem] h-[11rem] lg:w-[40rem] lg:h-[16rem] p-3 flex flex-col items-center gap-2 flex-shrink-0 self-stretch">
              <div
                className="border bg-certificate-mobile md:bg-certificate bg-cover bg-no-repeat bg-center w-full h-full flex flex-col justify-center items-center gap-2 flex-shrink-0 rounded-[2rem]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="border-4 border-secondary-50 rounded-[2rem] w-[20rem] md:w-[30rem] h-[11rem] lg:w-[40rem] lg:h-[16rem] p-3 flex flex-col items-center gap-2 flex-shrink-0 self-stretch">
              <div
                className="border bg-medal-mobile md:bg-medal bg-cover bg-no-repeat bg-center w-full h-full flex flex-col justify-center items-center gap-2 flex-shrink-0 rounded-[2rem]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
