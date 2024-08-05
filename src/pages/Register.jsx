import HeroRegister from "../components/RegisterPage/HeroRegister"
import WhatAbstract from "../components/WhatAbstract"
import Requirement from "../components/RegisterPage/Requirement"
import coverRegister from "../assets/cover/coverRegister.png"
import ProcedureRegistration from "../components/RegisterPage/ProcedureRegistration"

export default function Register() {
    return (
        <section style={{
            backgroundImage: `url(${coverRegister})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat"
        }}
        >
            <HeroRegister />
            <WhatAbstract />
            <Requirement />
            <ProcedureRegistration />
        </section>
    )
}