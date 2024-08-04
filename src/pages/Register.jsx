import HeroRegister from "../components/RegisterPage/HeroRegister"
import WhatAbstract from "../components/WhatAbstract"
import Requirement from "../components/RegisterPage/Requirement"
import Procedure from "../components/RegisterPage/Procedure"
import coverRegister from "../assets/cover/coverRegister.png"

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
            <Procedure />
        </section>
    )
}