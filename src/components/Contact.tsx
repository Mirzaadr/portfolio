import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-20"
    >
      <h2 className="text-2xl font-semibold mb-2">Let’s Connect</h2>
      <p className="mb-4">
        Interested in working together or have a question? Reach out!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/Mirzaadr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirza-adr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
