import React from "react";
import star1 from "../assets/image/Group85.svg";
import star2 from "../assets/image/Group84.svg";
import timeline1 from "../assets/Timeline/Timeline1.svg";
import timeline2 from "../assets/Timeline/Timeline2.svg";
import timeline3 from "../assets/Timeline/Timeline3.svg";
import timeline4 from "../assets/Timeline/Timeline4.svg";
import timeline5 from "../assets/Timeline/Timeline5.svg";
import timeline6 from "../assets/Timeline/Timeline6.svg";
import stick from "../assets/Timeline/Stick.svg";
import stick2 from "../assets/Timeline/StickMobile.svg";
import Circle from "../assets/Timeline/Circle.svg";
import layer1 from "../assets/Timeline/layer1.png";
import layer2Left from "../assets/Timeline/layer2Left.png";
import layer2Right from "../assets/Timeline/Layer2Right.png";

const events2 = [
  { desc: "Abstract Submission", date: "August 18-31, 2024" },
  { desc: "Abstract Elimintaion", date: "September 6, 2024" },
  { desc: "Final Paper Submission", date: "September - October 21-2, 2024" },
  { desc: "Finalist Announcement", date: "October 4, 2024" },
  { desc: "Final Pitching", date: "October 19, 2024" },
  { desc: "Webinar and Awarding", date: "October 20, 2024" },
];

const totalEvents = events2.length;
const displayLimit = totalEvents - 2; 

const Timeline = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-16">
      <h1 className="flex items-center justify-center text-4xl lg:text-6xl font-bold leading-[120%] font-MadeMirage text-secondary-90 text-center mb-16">
        <img src={star2} className="hidden md:block mr-4" alt="Star Icon 2" />
        Timeline CODE 2024
        <img src={star1} className="hidden md:block ml-4" alt="Star Icon 1" />
      </h1>

      {/* Desktop */}
      <div className="hidden lg:block relative w-full h-full ">
        <div className="absolute inset-28 flex justify-center">
          <img src={stick} className="h-full w-full" alt="Stick" />
        </div>

        {events2.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-start h-[300px] ${
              index % 2 === 0
                ? "justify-start lg:pl-20"
                : "justify-end lg:pr-20"
            } w-full`}
          >
            {index !== 4 && index !== 5 && (
              <>
                {index % 2 === 0 && (
                  <img
                    className="absolute top-72 h-[32rem] w-[18rem] left-0"
                    src={layer2Left}
                    alt="Layer Left"
                  />
                )}
                {index % 2 !== 0 && (
                  <img
                    className="absolute top-72 h-[32rem] w-[18rem] right-0"
                    src={layer2Right}
                    alt="Layer Right"
                  />
                )}
              </>
            )}

            <div className=" border-4 border-secondary-50 rounded-[2rem] w-[34rem] p-3 flex flex-col items-start gap-2 ">
              <div className="border bg-secondary-50 h-40 flex flex-col justify-center items-center gap-2 flex-shrink-0 self-stretch rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-MadeMirage text-[2.5rem] font-bold leading-[120%] self-stretch text-primary-50 text-center">
                    {event.desc}
                  </h2>
                  <h6 className="font-MadeMirage text-[2rem] font-medium leading-[120%] self-stretch text-primary-50 text-center ">
                    {event.date}
                  </h6>
                </div>
              </div>
            </div>
            <img className="absolute top-56" src={layer1} alt="" />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className=" lg:hidden relative flex flex-col items-center justify-center">
        <img
          src={stick2}
          className="absolute top-28 left-1/2 transform -translate-x-1/2 h-[58rem] md:h-[63rem] w-full"
          alt="Stick"
        />
        <div className="relative flex flex-col justify-center gap-y-24 container">
          {events2.map((event, index) => (
            <div
              key={index}
              className="relative border-4 border-secondary-50 rounded-[2rem] h-30 w-[20rem] md:w-[30rem] md:h-32 p-3 flex flex-col items-start gap-2 flex-shrink-0"
            >
              <div className="border bg-secondary-50 h-20 md:h-24 px-7 py-7 flex flex-col justify-center items-center gap-2 flex-shrink-0 self-stretch rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-MadeMirage text-xl md:text-2xl font-bold leading-[120%] self-stretch text-primary-50 text-center">
                    {event.desc}
                  </h2>
                  <h6 className="font-MadeMirage text-base md:text-lg font-normal leading-[120%] self-stretch text-primary-50 text-center ">
                    {event.date}
                  </h6>
                </div>
              </div>
              {index < events2.length - 1 && (
                <img
                  src={Circle}
                  className="absolute top-32 md:top-36 left-1/2 transform -translate-x-1/2 h-12 w-12"
                  alt="Circle"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
