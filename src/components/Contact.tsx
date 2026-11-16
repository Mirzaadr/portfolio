import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import type { ContactContent, SocialLinks } from "@/content/portfolio.types";

const Contact = ({
  content,
  socialLinks,
}: {
  content: ContactContent;
  socialLinks: SocialLinks;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mt-20"
  >
    <h2 className="text-2xl font-semibold mb-2">{content.heading}</h2>
    <p className="mb-4">{content.description}</p>
    <div className="flex justify-center gap-6">
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6" />
      </a>
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  </motion.div>
);

const ContactSection = SectionWrapper(Contact, "contact");

export default ContactSection;
