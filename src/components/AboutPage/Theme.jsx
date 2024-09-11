import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bintangKiri from "../../assets/image/bintangKiri.png";
import bintangKanan from "../../assets/image/bintangKanan.png";
import topPath from "../../assets/image/topPathAbout.png";
import subTheme from "../../assets/image/subTheme.svg";
import satu from "../../assets/image/1.svg";
import dua from "../../assets/image/2.svg";
import tiga from "../../assets/image/3.svg";
import empat from "../../assets/image/4.svg";
import lima from "../../assets/image/5.svg";
import satuA from "../../assets/image/1a.svg";
import duaA from "../../assets/image/2a.svg";
import tigaA from "../../assets/image/3a.svg";
import empatA from "../../assets/image/4a.svg";
import limaA from "../../assets/image/5a.svg";

const imageVariants = {
  hover: { scale: 1.1 },
};

const containerVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 0.9 },
};

const containerVariants2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Theme() {
  return (
    <section>
      <div className="text-secondary-90">
        <motion.img
          src={topPath}
          className="absolute w-full top-0 z-0 hidden lg:block"
        />
        <div className="mx-5 lg:mx-18 lg:gap-11 gap-8 flex flex-col lg:pt-40 pt-28 ">
          <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
          <div className="flex justify-center">
            <img
              src={bintangKiri}
              className="hidden md:block"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            />
            <motion.div
              className="flex flex-col justify-center items-center text-center gap-4"
              variants={containerVariants2}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.8,
                staggerChildren: 0.4,
                ease: "easeInOut",
              }}
            >
              <motion.h1
                className="font-bold tracking-wide text-3xl leading-[38.40px] md:text-5xl xl:text-6xl lg:leading-[72px]"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                Our Theme
              </motion.h1>
              <motion.p
                className="text-base font-medium leading-tight md:text-2xl lg:text-4xl xl:text-5xl lg:leading-[57.60px]"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                Sustainable Technologies for an Enhanced World: Global Collaboration
                in Innovation and Creativity, Embracing AI to Achieve the SDGs
              </motion.p>
            </motion.div>
            <img
              src={bintangKanan}
              className="hidden md:block"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            />
          </div>
          <hr className="border-t-4 border-secondary-90 lg:mx-20 mx-10" />
        </div>

        <div className="lg:mt-32 mt-20 flex flex-col justify-center items-center">
        <motion.img
          src={subTheme}
          className="xl:w-[700px] lg:w-[600px] w-[400px]"
          variants={containerVariants2}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3,  
            ease: "easeInOut", 
          }}
        />
          <motion.div
            className="hidden md:block mt-20"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col justify-center items-center gap-20 md:gap-10">
              <div className="flex gap-8">
                <motion.img
                  src={satu}
                  className="w-52 lg:w-64 xl:w-96 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.img
                  src={dua}
                  className="w-52 lg:w-64 xl:w-96 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.img
                  src={tiga}
                  className="w-52 lg:w-64 xl:w-96 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
              <div className="flex gap-8">
                <motion.img
                  src={empat}
                  className="w-52 lg:w-64 xl:w-96 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.img
                  src={lima}
                  className="w-52 lg:w-64 xl:w-96 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
            </div>
          </motion.div>

          <div className="block md:hidden mt-10">
            <motion.div
              className="flex flex-col justify-center items-center gap-10"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-3 sm:gap-10">
                <motion.img
                  src={satuA}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.img
                  src={duaA}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
              <div className="flex gap-3 sm:gap-10">
                <motion.img
                  src={tigaA}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.img
                  src={empatA}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
              <div className="flex gap-3 sm:gap-10">
                <motion.img
                  src={limaA}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
