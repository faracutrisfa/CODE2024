import Procedure from "../components/AboutPage/Procedure";
import Theme from "../components/AboutPage/Theme";
import Award from "../components/Award";
import Timeline from "../components/Timeline";
import WhatAbstract from "../components/WhatAbstract";
import coverRegister from "../assets/cover/coverRegister.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${coverRegister})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Theme />
      <WhatAbstract />
      <Procedure />
      <Timeline />
      <Award />
    </section>
  );
}
