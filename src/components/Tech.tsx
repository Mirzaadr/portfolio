import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { tech } from "@/assets";
import { textVariant, cardVariants } from "@/lib/motion";
import styles from "@/lib/styles";
import type { TechContent } from "@/content/portfolio.types";

const assetLookup: Readonly<Record<string, string | undefined>> = tech;

const Tech = ({ content }: { content: TechContent }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{content.eyebrow}</p>
        <h2 className={styles.sectionHeadText}>{content.heading}</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 mt-4">
        {content.groups.map((group, index) => (
          <motion.div
            key={group.label}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants()}
          >
            <h3 className="text-2xl font-semibold mb-6">{group.label}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={assetLookup[item.asset]}
                    alt={item.name}
                    className="w-12 h-12 mb-2 object-contain"
                  />
                  <span className="text-sm font-medium text-textSecondary">
                    {item.name}
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
