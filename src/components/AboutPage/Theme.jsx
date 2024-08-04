import bintangKiri from "../../assets/image/bintangKiri.png";
import bintangKanan from "../../assets/image/bintangKanan.png";
import topPath from "../../assets/image/topPathAbout.png";
import subTheme from "../../assets/image/subTheme.svg"
import satu from "../../assets/image/1.svg"
import dua from "../../assets/image/2.svg"
import tiga from "../../assets/image/3.svg"
import empat from "../../assets/image/4.svg"
import lima from "../../assets/image/5.svg"
import satuA from "../../assets/image/1a.svg"
import duaA from "../../assets/image/2a.svg"
import tigaA from "../../assets/image/3a.svg"
import empatA from "../../assets/image/4a.svg"
import limaA from "../../assets/image/5a.svg"

export default function Theme() {
    return (
        <section>
            <div className="text-secondary-90">
                <img src={topPath} className="absolute w-full top-0 z-0 hidden lg:block" />
                <div className="mx-5 lg:mx-18 lg:gap-11 gap-8 flex flex-col lg:pt-40 pt-28 ">
                    <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
                    <div className="flex justify-center">
                        <img src={bintangKiri} className="hidden md:block" />
                        <div className="flex flex-col justify-center items-center text-center gap-4">
                            <h1 className="font-bold tracking-wide text-3xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px]">Our Theme</h1>
                            <p className="text-base font-medium leading-tight md:text-2xl lg:text-4xl xl:text-5xl lg:leading-[57.60px]">Sustainable Technologies for a Better World: Global Collaboration in Innovation and Creativity to Achieve the SDGs</p>
                        </div>
                        <img src={bintangKanan} className="hidden md:block" />
                    </div>
                    <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
                </div>

                <div className="lg:mt-32 mt-20 flex flex-col justify-center items-center">
                    <img src={subTheme} className="xl:w-[700px] lg:w-[600px] w-[400px]" />
                    <div className="hidden md:block mt-20">
                        <div className="flex flex-col justify-center items-center gap-20 md:gap-10">
                            <div className="flex gap-8">
                                <img src={satu} className="w-52 lg:w-64 xl:w-96" />
                                <img src={dua} className="w-52 lg:w-64 xl:w-96" />
                                <img src={tiga} className="w-52 lg:w-64 xl:w-96" />
                            </div>
                            <div className="flex gap-8">
                                <img src={empat} className="w-52 lg:w-64 xl:w-96" />
                                <img src={lima} className="w-52 lg:w-64 xl:w-96" />
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden mt-10">
                        <div className="flex flex-col justify-center items-center gap-10">
                            <div className="flex gap-3 sm:gap-10">
                                <img src={satuA} />
                                <img src={duaA} />
                            </div>
                            <div className="flex gap-3 sm:gap-10">
                                <img src={tigaA} />
                                <img src={empatA} />
                            </div>
                            <div className="flex gap-3 sm:gap-10">
                                <img src={limaA} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}