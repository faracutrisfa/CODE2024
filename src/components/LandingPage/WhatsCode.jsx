import gelombangPath from "../../assets/image/gelombangKiri.png"
import gelombangKananPath from "../../assets/image/gelombangKanan.png"


export default function WhatsCode() {
    return (
        <section>
            <div className="mx-5 lg:mx-18 flex flex-col gap-5 lg:gap-15 justify-center text-center text-secondary-90 mt-19 pb-36">
                <h1 className="font-bold leading-[38.40px] lg:leading-[72px] text-[32px] lg:text-6xl">What is CODE?</h1>
                <p className="font-normal text-xl leading-normal lg:text-[32px] lg:leading-[38.40px]">Competition of Outstanding Creativity and Exploration (CODE) 2024 is an extended abstract competition held by Student Research Group (K-RISMA) of the Computer Science Faculty at Brawijaya University. CODE 2024 focuses on innovations and creativity in informations and communication technology, and other related areas.</p>
            </div>
            <div className="hidden lg:block">
                <div className="flex justify-between">
                    <img src={gelombangPath} className="" />
                    <img src={gelombangKananPath} className="" />
                </div>
            </div>
        </section>
    )
}