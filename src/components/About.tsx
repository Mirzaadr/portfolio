import { fadeIn, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import styles from "@/lib/styles";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <h2 className="text-2xl font-semibold mb-4"></h2> */}
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-700 dark:text-gray-300 max-w-3xl mt-4 text-[17px] leading-[30px]"
      >
        I’m a detail-oriented fullstack developer with solid experience in
        mobile and web development. I specialize in building scalable
        applications using React, React Native, and .NET Core. I have
        contributed to several impactful projects and enjoy creating smooth,
        user-centric digital solutions.
      </motion.p>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
