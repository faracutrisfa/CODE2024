import { motion } from "framer-motion";

export default function Procedure() {
  return (
    <section>
      <div className="text-secondary-50 mt-36 flex flex-col justify-center text-center mx-5 lg:mx-18">
        <h1
          className="font-bold text-3xl leading-[38.40px] lg:text-6xl lg:leading-[72px] mb-2"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          Competition Procedures
        </h1>

        <h2
          className="text-base font-bold leading-tight lg:text-3xl lg:leading-[38.40px]"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          There are 3 stages of CODE 2024
        </h2>
        <div className="gap-9 flex flex-col lg:mt-20 mt-10">
          <div className="border-4 border-secondary-50 rounded-[54px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="border bg-secondary-50 text-primary-50 m-3 lg:m-5 rounded-[54px] p-10 lg:p-15 flex flex-col items-start text-start gap-4 lg:gap-0">
              <h2 className="font-bold text-xl leading-normal lg:text-4xl lg:leading-[48px]">
                Team Registrations and Abstract Submission
              </h2>
              <div className="font-normal text-xs leading-[14px] lg:text-3xl lg:leading-[38.40px] flex flex-col gap-3 lg:gap-0">
                <li>
                  Abstract submission are free of charge and team’s leader can
                  register and submit abstracts online via (
                  <span className="text-[#2ba6ff] underline">
                    <a href="https://bit.ly/m/CODE2024" target="blank">
                      registration and submission link
                    </a>
                  </span>
                  ).
                </li>
                <li>
                  The team's leader must fill out the registration form in
                  accordance with the guidelines stated in the <span className="text-[#2ba6ff]">
                    <a
                      href="https://drive.google.com/drive/folders/15PghpvgzbzGSTqZBMyzbHdY1Er-kmIt3"
                      target="blank"
                    >
                      guidebook
                    </a>
                  </span>
                </li>
              </div>
            </div>
          </div>

          <div className="border-4 border-secondary-50 rounded-[54px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="border bg-secondary-50 text-primary-50 m-3 lg:m-5 rounded-[54px] p-10 lg:p-15 flex flex-col items-start text-start gap-4 lg:gap-0">
              <h2 className="font-bold text-xl leading-normal lg:text-4xl lg:leading-[48px]">
                Extended Abstract Submission
              </h2>
              <div className="font-normal text-xs leading-[14px] lg:text-3xl lg:leading-[38.40px] flex flex-col gap-3 lg:gap-0">
                <li>
                  Participants are required to pay the extended abstract
                  registration fee after being declared to have passed the
                  abstract stage.
                </li>
                <li>
                  Participants can see the requirements for writing extended
                  abstracts in the guidebook contained in the sub-writing
                  requirements.
                </li>
              </div>
            </div>
          </div>

          <div className="border-4 border-secondary-50 rounded-[54px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="border bg-secondary-50 text-primary-50 m-3 lg:m-5 rounded-[54px] p-10 lg:p-15 flex flex-col items-start text-start gap-4 lg:gap-0">
              <h2 className="font-bold text-xl leading-normal lg:text-4xl lg:leading-[48px]">
                Final Pitching
              </h2>
              <div className="font-normal text-xs leading-[14px] lg:text-3xl lg:leading-[38.40px] flex flex-col gap-3 lg:gap-0">
                <li>
                  Participants who become finalists must submit posters and
                  powerpoints according to the specified time
                </li>
                <li>
                  Participants can see the poster format requirements in the
                  guidebook contained in the poster sub-requirements.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
