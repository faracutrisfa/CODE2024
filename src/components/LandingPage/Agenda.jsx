import paperBlue from "../../assets/cover/paperBlue.png"
import abstract from "../../assets/image/Abstract.svg"
import webinar from "../../assets/image/Webinar.svg"

export default function Agenda() {
    return (
        <section className="bg-secondary-50"
            // style={{
            //     backgroundImage: `url(${paperBlue})`,
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat"
            // }}
            >
            <div className="flex flex-col mx-5 lg:mx-18 justify-center items-center text-primary-50 pb-20px">
                <h1 className="font-bold leading-[38.40px] text-3xl lg:text-6xl lg:leading-[72px]">Our Main Agenda</h1>
                {/* <div className="flex flex-col lg:flex-row gap-19 justify-center items-end">
                    <img src={abstract} />
                    <img src={webinar} />
                </div> */}
            </div>
        </section>
    )
}