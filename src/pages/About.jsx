import Procedure from "../components/AboutPage/Procedure";
import Theme from "../components/AboutPage/Theme";
import Award from "../components/Award";
import Timeline from "../components/Timeline";
import WhatAbstract from "../components/WhatAbstract";
import coverAbout from "../assets/cover/coverAbout.png"

export default function About() {
    return (
        <section
            style={{
                backgroundImage: `url(${coverAbout})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Theme />
            <WhatAbstract />
            <Procedure />
            <Timeline />
            <Award />
        </section>
    )
}