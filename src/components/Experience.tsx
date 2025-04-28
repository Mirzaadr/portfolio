import { experiences } from "@/config/constants";
import { textVariant } from "@/lib/motion";
import styles from "@/lib/styles";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-6 mt-20">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-8 h-full border-l-2 border-primary opacity-30" />

        {/* Experience entries */}
        <div className="flex flex-col space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row md:items-start md:gap-10 relative"
            >
              {/* Dot + logo */}
              <div className="flex flex-col items-center md:w-24 md:justify-start">
                {/* <div className="w-6 h-6 rounded-full bg-primary shadow-lg z-10" /> */}

                <motion.div
                  className="w-6 h-6 rounded-full bg-primary shadow-lg z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.8)",
                      "0 0 0px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 mt-4 object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-6 md:mt-0 md:flex-1">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                  <h3 className="text-3xl font-bold">{exp.company}</h3>
                  <span className="text-sm text-textSecondary mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-xl font-semibold mt-2 text-primary">
                  {exp.title}
                </h4>

                <ul className="list-disc list-inside text-textSecondary mt-4 space-y-2 text-md leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
