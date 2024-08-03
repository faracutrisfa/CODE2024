import Hero from "../components/LandingPage/Hero"
import Agenda from "../components/LandingPage/Agenda"
import Timeline from "../components/Timeline"
import Award from "../components/Award"
import Partner from "../components/LandingPage/Partner"

export default function Home() {
    return(
        <section>
            <Hero />
            <Agenda />
            <Timeline />
            <Award />
            <Partner />
        </section>
    )
}