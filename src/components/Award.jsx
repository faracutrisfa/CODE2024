import React from "react";
import moneyMobile from "../assets/award/moneyMobile.svg";
import money from "../assets/award/money.svg";
import medalMobile from "../assets/award/medalMobile.svg";
import medal from "../assets/award/medal.svg";
import certificateMobile from "../assets/award/certificateMobile.svg";
import certificate from "../assets/award/certificate.svg";

export default function Award() {
  return (
    <section className="bg-paper-blue-light-mobile lg:bg-paper-blue-light w-full my-36 bg-cover bg-no-repeat">
      <div className="mx-6 xl:mx-28 lg:mx-18">
        <div className="flex flex-col text-primary-50 items-start lg:items-center">
          <h1 className="font-MadeMirage text-4xl lg:text-6xl leading-[120%] font-bold mt-4 lg:mt-12">
            Award of Participations
          </h1>
          <h6 className="font-MadeMirage text-base md:text-2xl lg:text-4xl font-medium leading-[120%] mb-6">
            Join the competition and win some great prizes!
          </h6>
        </div>

        <div className="hidden md:flex gap-5 justify-center">
          <div>
            <img src={money} alt="Money Award" className="w-full h-auto" />
          </div>
          <div className="flex flex-col xl:gap-5 gap-2">
            <img
              src={certificate}
              alt="Certificate Award"
              className="w-full h-auto"
            />
            <img src={medal} alt="Medal Award" className="w-full h-auto" />
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-10">
            <img src={moneyMobile} alt="Money Award" />
            <div className="flex flex-col gap-10">
              <img src={certificateMobile} alt="Certificate Award" />
              <img src={medalMobile} alt="Medal Award" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
