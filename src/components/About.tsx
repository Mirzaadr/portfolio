import { fadeIn, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import styles from "@/lib/styles";

import type { AboutContent } from "@/content/portfolio.types";

const About = ({ content }: { content: AboutContent }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <h2 className="text-2xl font-semibold mb-4"></h2> */}
        <p className={styles.sectionSubText}>{content.eyebrow}</p>
        <h2 className={styles.sectionHeadText}>{content.heading}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-700 dark:text-gray-300 max-w-3xl mt-4 text-[17px] leading-[30px]"
      >
        {content.description}
      </motion.p>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
