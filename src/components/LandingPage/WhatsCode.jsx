import { motion } from "framer-motion";
import crownPath from "../../assets/image/crownPath.svg";

export default function WhatsCode() {
  return (
    <section>
      <div className="mx-5 lg:mx-18 flex flex-col gap-5 lg:gap-15 justify-center items-center text-center text-secondary-90 mt-19 pb-36">
        <motion.img
          src={crownPath}
          className="xl:w-[700px] lg:w-[600px] w-[400px]"
          data-aos="zoom-in"
          data-aos-duration="800"
        />
        <p className="font-normal text-xl leading-normal lg:text-[32px] lg:leading-[38.40px]" >
          Competition of Outstanding Creativity and Exploration (CODE) 2024 is
          an extended abstract competition held by Student Research Group
          (K-RISMA) of the Computer Science Faculty at Brawijaya University.
          CODE 2024 focuses on innovations and creativity in informations and
          communication technology, and other related areas.
        </p>
      </div>
    </section>
  );
}
