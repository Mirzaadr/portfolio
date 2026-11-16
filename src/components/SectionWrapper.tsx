import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

const SectionWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName: string,
) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-6 max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
