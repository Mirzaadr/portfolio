import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { techGroups } from "@/config/constants";
import { textVariant, cardVariants } from "@/lib/motion";
import styles from "@/lib/styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I've worked with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 mt-4">
        {Object.entries(techGroups).map(([category, techs], index) => (
          <motion.div
            key={category}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants()}
          >
            <h3 className="text-2xl font-semibold mb-6">{category}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-12 h-12 mb-2 object-contain"
                  />
                  <span className="text-sm font-medium text-textSecondary">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const TechSection = SectionWrapper(Tech, "tech");
export default TechSection;
