import React from "react";

export default function Requirement() {
  const data = [
    {
      desc: "Participants should be an active bachelor degree or vocational degree (D4/S1) students of any University or Institutions in Indonesia and abroad.",
    },
    {
      desc: "This competition is open to active students from all semesters.",
    },
    {
      desc: "The team consists of a minimum of 2 people and a maximum of 3 people with 1 person as leader who are allowed to come from the same/different majors and faculties but within the same university.",
    },
    {
      desc: "Participants must be mentored by a supervisor",
    },
    {
      desc: "Registered team members cannot be replaced for any reason.",
    },
    {
      desc: "Each individual can only represent one.",
    },
    {
      desc: "Participants may not change team leaders or members.",
    },
    {
      desc: "Participants must register online and upload their work on the registration link.",
    },
    {
      desc: "Each team in the process of registration, payment and submission of works can be done by the team leader at the link provided.",
    },
    {
      desc: "Participants must have an instagram account that is not set in private mode.",
    },
    {
      desc: "Participants pay the registration fee and if there are problems in the payment process can contact the contact number provided.",
    },
  ];

  return (
    <section>
      <div className="text-secondary-90 flex flex-col justify-center items-center text-center mx-5 lg:mx-18">
        <h1
          className="font-bold tracking-wide text-3xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px]"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Registrant Requirement
        </h1>
        <ul className="flex flex-col justify-start items-start text-start mt-8 lg:mt-12 lg:gap-5 gap-3">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 lg:gap-5 text-xs font-normal leading-[14.40px] lg:text-3xl lg:leading-[38.40px]"
            >
              <div className="w-1 h-1 lg:w-2 lg:h-2 bg-secondary-90 rounded-full flex-shrink-0"></div>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
