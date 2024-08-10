import HeroRegister from "../components/RegisterPage/HeroRegister";
import WhatAbstract from "../components/WhatAbstract";
import Requirement from "../components/RegisterPage/Requirement";
import coverRegister from "../assets/cover/coverRegister.png";
import ProcedureRegistration from "../components/RegisterPage/ProcedureRegistration";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Register() {
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
      <HeroRegister />
      <WhatAbstract />
      <Requirement />
      <ProcedureRegistration />
    </section>
  );
}
