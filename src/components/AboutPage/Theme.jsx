import bintangKiri from "../../assets/image/bintangKiri.png";
import bintangKanan from "../../assets/image/bintangKanan.png";
import topPath from "../../assets/image/topPathAbout.png";

export default function Theme() {
    return (
        <section>
            <div className="text-secondary-90">
                <img src={topPath} className="absolute w-full top-0 z-0 hidden lg:block" />
                <div className="mx-5 lg:mx-18 lg:gap-11 gap-8 flex flex-col lg:pt-40 pt-28">
                    <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
                    <div className="flex">
                        <img src={bintangKiri} className="hidden lg:block"/>
                        <div className="flex flex-col justify-center items-center text-center gap-4">
                            <h1 className="font-bold tracking-wide text-3xl leading-[38.40px] lg:text-6xl lg:leading-[72px]">Our Theme</h1>
                            <p className="text-base font-medium leading-tight lg:text-5xl lg:leading-[57.60px]">Sustainable Technologies for a Better World: Global Collaboration in Innovation and Creativity to Achieve the SDGs</p>
                        </div>
                        <img src={bintangKanan} className="hidden lg:block"/>
                    </div>
                    <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
                </div>
            </div>
        </section>
    )
}