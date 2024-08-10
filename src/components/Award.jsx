import React from "react";
import moneyMobile from "../assets/award/moneyMobile.svg"
import money from "../assets/award/money.svg"
import medalMobile from "../assets/award/medalMobile.svg"
import medal from "../assets/award/medal.svg"
import certificateMobile from "../assets/award/certificateMobile.svg"
import certificate from "../assets/award/certificate.svg"

export default function Award() {
  return (

    <div className="bg-paper-blue-light-mobile lg:bg-paper-blue-light w-full my-36 bg-cover bg-no-repeat self-stretch">
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center px-8 pt-24 md:px-32 md:pt-32">
        <h1 className="font-MadeMirage text-4xl lg:text-6xl leading-[120%] text-primary-50 font-bold self-stretch mt-4 lg:mt-12">
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

    <section>
      <div className="mx-6 xl:mx-28 lg:mx-18">
        <div className="flex flex-col text-primary-50">
          <h1 className="font-bold tracking-wide text-3xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px]">Award of Participations</h1>
          <h6 className="text-base font-bold leading-tight lg:text-3xl lg:leading-[38.40px] md:mb-3 mb-8">Join the competition and win some great prizes!</h6>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <div>
              <img src={money} alt="" />

            </div>
            <div className="flex flex-col xl:gap-5 gap-2">
              <img src={certificate} alt="" />
              <img src={medal} alt="" />
            </div>
          </div>  
        </div>
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-10">
            <div>
              <img src={moneyMobile} alt="" />
            </div>
            <div className="flex flex-col gap-10">
              <img src={certificateMobile} alt="" />
              <img src={medalMobile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}