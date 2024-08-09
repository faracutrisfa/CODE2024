import React from "react";
import moneyMobile from "../assets/award/moneyMobile.svg"
import money from "../assets/award/money.svg"
import medalMobile from "../assets/award/medalMobile.svg"
import medal from "../assets/award/medal.svg"
import certificateMobile from "../assets/award/certificateMobile.svg"
import certificate from "../assets/award/certificate.svg"

export default function Award() {
  return (
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