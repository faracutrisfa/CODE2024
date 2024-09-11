import HeroImage from "../../assets/image/Hero.svg";
import StarsPath from "../../assets/image/starsPath.png";
import StarsPathWhite from "../../assets/image/starsPathWhite.png";
import HeroMobile from "../../assets/cover/heroMobile.svg";
import { motion } from "framer-motion";

export default function HeroRegister() {
  return (
    <section>
      <div className="hidden md:block mx-5 lg:mx-18">
        <div className="flex">
          <div className="flex flex-col justify-center text-secondary-90 xl:gap-8 lg:gap-5 gap-2 xl:w-7/12 lg:w-9/12 w-11/12 mt-10 xl:mt-0">
            <motion.img
              src={StarsPath}
              className="w-24"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
            />
            <motion.h1
              className="font-bold tracking-wide leading-[57.60px] xl:text-5xl lg:text-4xl md:text-3xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
            >
              Extended Abstract Competition
            </motion.h1>
            <motion.p
              className="font-medium tracking-wide leading-[28.80px] xl:text-2xl lg:text-xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 25, duration: 1.5 }}
              delay={1}
            >
              Sustainable Technologies for an Enhanced World: Global Collaboration
              in Innovation and Creativity, Embracing AI to Achieve the SDGs
            </motion.p>
            <motion.a
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 25, duration: 1.5 }}
              delay={1}
              href="https://wa.me/6282332648369"
              target="blank"
              className="font-Metropolis md:text-base w-48 h-11 justify-center flex items-center text-primary-50 font-semibold leading-tight border rounded-3xl bg-secondary-90 border-secondary-90 hover:text-secondary-90 hover:bg-primary-50"
            >
              Contact Us
            </motion.a>
          </div>
          <div>
            <motion.img
              src={HeroImage}
              alt="Hero"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              delay={0.5}
            />
          </div>
        </div>
      </div>
      <div
        className="block md:hidden"
        style={{
          backgroundImage: `url(${HeroMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center text-primary-50 gap-4 md:gap-5 mx-5 lg:mx-18 w-9/12 pt-16 pb-64 md:pb-[330px]">
          <motion.img
            src={StarsPathWhite}
            className="w-11"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
            delay={1}
          />
          <motion.h1
            className="font-bold tracking-wider leading-[28.80px] text-2xl md:text-3xl"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, duration: 1.5 }}
            delay={1}
          >
            Competition of Outstanding Creativity and Exploration (CODE)
          </motion.h1>
          <motion.p
            className="font-normal tracking-wider leading-[14.40px] text-xs md:text-sm"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 25, duration: 1.5 }}
            delay={1}
          >
            Sustainable Technologies for a Better World: Global Collaboration in
            Innovation and Creativity to Achieve the SDGs
          </motion.p>
          <motion.a
            href="https://wa.me/6282332648369"
            target="blank"
            className="font-Metropolis text-xs md:text-sm w-36 h-12 justify-center flex items-center text-secondary-90 font-semibold leading-tight border rounded-3xl bg-primary-50 border-primary-50 hover:text-primary-50 hover:bg-secondary-90"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 25, duration: 1.5 }}
            delay={1}
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
