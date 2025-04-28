import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "@/lib/motion";
import styles from "@/lib/styles";

const projects = [
  {
    title: "One Apps",
    description:
      "Mobile and web app for bill reconciliation with image capture, reporting, and supervision.",
    tech: ["React Native", ".NET", "PostgreSQL", "Kubernetes", "GCP"],
  },
  {
    title: "Taldio",
    description:
      "Job seeking platform connecting talents with employers. Built mobile and backend systems.",
    tech: ["React Native", ".NET Core", "MSSQL"],
  },
  {
    title: "eBrochure",
    description:
      "iOS app to present and calculate insurance product offerings.",
    tech: ["React Native", "XCode"],
  },
];

const FeaturedProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Featured Projects</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const FeaturedProjectsSection = SectionWrapper(FeaturedProjects, "projects");
export default FeaturedProjectsSection;
