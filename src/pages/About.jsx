import Procedure from "../components/AboutPage/Procedure";
import Theme from "../components/AboutPage/Theme";
import Award from "../components/Award";
import Timeline from "../components/Timeline";
import WhatAbstract from "../components/WhatAbstract";

export default function About() {
    return(
        <section>
            <Theme />
            <WhatAbstract />
            <Procedure />
            <Timeline />
            <Award />
        </section>
    )
}