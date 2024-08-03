import HeroImage from "../../assets/image/Hero.svg"
import StarsPath from "../../assets/image/starsPath.png"
import StarsPathWhite from "../../assets/image/starsPathWhite.png"
import HeroMobile from "../../assets/cover/heroMobile.svg"

export default function Hero() {
    return (
        <section>
            <div className="hidden lg:block mx-5 lg:mx-18">
                <div className="flex">
                    <div className="flex flex-col justify-center text-secondary-90 gap-8 xl:w-7/12 lg:w-9/12">
                        <img src={StarsPath} className="w-24" />
                        <h1 className="font-bold leading-[57.60px] xl:text-5xl lg:text-4xl">Competition of Outstanding Creativity and Exploration (CODE)</h1>
                        <p className="font-medium leading-[28.80px] xl:text-2xl lg:text-xl">Sustainable Technologies for a Better World: Global Collaboration in Innovation and Creativity to Achieve the SDGs</p>
                        <a
                            href=""
                            className="font-sans lg:text-base w-48 h-11 pb-1 justify-center flex items-center text-primary-50 font-semibold leading-tight border rounded-3xl bg-secondary-90 border-secondary-90">
                            Contact Us
                        </a>
                    </div>
                    <div>
                        <img src={HeroImage} alt="image" />
                    </div>
                </div>
            </div>
            <div
                className="block lg:hidden"
                style={{
                    backgroundImage: `url(${HeroMobile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="flex flex-col justify-center text-primary-50 gap-4 md:gap-5 mx-5 lg:mx-18 w-8/12 pt-16 pb-40 md:pb-80">
                    <img src={StarsPathWhite} className="w-11" />
                    <h1 className="font-bold leading-[28.80px] text-2xl md:text-3xl">Competition of Outstanding Creativity and Exploration (CODE)</h1>
                    <p className="font-medium leading-[14.40px] text-xs md:text-sm">Sustainable Technologies for a Better World: Global Collaboration in Innovation and Creativity to Achieve the SDGs</p>
                    <a
                        href=""
                        className="font-sans text-xs md:text-sm w-36 h-12 justify-center flex items-center text-secondary-90 font-semibold leading-tight border rounded-3xl bg-primary-50 border-primary-50">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    )
}