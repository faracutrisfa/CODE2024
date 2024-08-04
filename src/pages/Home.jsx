import Hero from "../components/LandingPage/Hero"
import Agenda from "../components/LandingPage/Agenda"
import Timeline from "../components/Timeline"
import Award from "../components/Award"
import Partner from "../components/LandingPage/Partner"
import WhatsCode from "../components/LandingPage/WhatsCode"
import coverRegister from "../assets/cover/coverRegister.png"

export default function Home() {
    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(${coverRegister})`,
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