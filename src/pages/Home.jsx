import Hero from "../components/LandingPage/Hero"
import Agenda from "../components/LandingPage/Agenda"
import Timeline from "../components/Timeline"
import Award from "../components/Award"
import Partner from "../components/LandingPage/Partner"
import WhatsCode from "../components/LandingPage/WhatsCode"
import paperTop from "../assets/cover/paperTop.png"

export default function Home() {
    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(${paperTop})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat"
                }}>
                <Hero />
                <WhatsCode />
            </div>
            <Agenda />
            <Timeline />
            <Award />
            <Partner />
        </section>
    )
}