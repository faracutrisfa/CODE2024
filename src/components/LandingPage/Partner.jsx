import Partner1 from "../../assets/partner/Partner1.png";
import Partner2 from "../../assets/partner/Partner2.png";
import Partner3 from "../../assets/partner/Partner3.png";
import Partner4 from "../../assets/partner/Partner4.png";
import Partner5 from "../../assets/partner/Partner5.png";
import Partner6 from "../../assets/partner/Partner6.png";
import Partner7 from "../../assets/partner/Partner7.png";
import Partner8 from "../../assets/partner/Partner8.png";

export default function Partner() {
  return (
    <section>
      <div className="text-secondary-50 flex flex-col justify-between items-center mx-5 lg:mx-18 mt-12" >
        <h1
          className="font-bold tracking-wide text-3xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px]"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Media Partner
        </h1>
        <div className="border bg-primary-10 border-primary-10 lg:rounded-2xl rounded-3xl w-full my-14">
          <div className="flex flex-col md:flex-row justify-center items-center xl:gap-20 gap-10 my-5">
            <div className="flex xl:gap-20 gap-10">
              <img src={Partner1} className="w-10" />
              <img src={Partner2} className="w-10" />
              <img src={Partner3} className="w-10" />
              <img src={Partner4} className="w-10" />
            </div>
            <div className="flex xl:gap-20 gap-10">
              <img src={Partner5} className="w-10" />
              <img src={Partner6} className="w-10" />
              <img src={Partner7} className="w-10" />
              <img src={Partner8} className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
