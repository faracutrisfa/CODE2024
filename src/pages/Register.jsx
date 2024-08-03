import HeroRegister from "../components/RegisterPage/HeroRegister"
import WhatAbstract from "../components/WhatAbstract"
import Requirement from "../components/RegisterPage/Requirement"
import Procedure from "../components/RegisterPage/Procedure"

export default function Register() {
    return (
        <section>
            <HeroRegister />
            <WhatAbstract />
            <Requirement />
            <Procedure />
        </section>
    )
}