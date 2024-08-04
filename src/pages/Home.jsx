import Hero from "../components/LandingPage/Hero"
import Agenda from "../components/LandingPage/Agenda"
import Timeline from "../components/Timeline"
import Award from "../components/Award"
import Partner from "../components/LandingPage/Partner"
import WhatsCode from "../components/LandingPage/WhatsCode"
import coverAbout from "../assets/cover/coverAbout.png"

export default function Home() {
    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(${coverAbout})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat"
                }}>
                <Hero />
                <WhatsCode />
                <Agenda />
                <Timeline />
                <Award />
                <Partner />
            </div>
        </section>
    )
}