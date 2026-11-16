import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import styles from "@/lib/styles";
import type { HeroContent, SocialLinks } from "@/content/portfolio.types";

export default function Hero({
  content,
  socialLinks,
}: {
  content: HeroContent;
  socialLinks: SocialLinks;
}) {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background dark:bg-darkBackground flex flex-col justify-center items-center text-center p-6">
      <ParticlesBackground />
      <div className="relative z-10">
        <motion.h2
          className={`${styles.heroHeadText} text-primary mb-4`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {content.heading}
        </motion.h2>
        <motion.p
          className={`${styles.heroSubText} text-textSecondary font-body mb-6 max-w-2xl`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {content.subtitleLine1} <br />
          {content.subtitleLine2}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-xl transition"
            href="#about"
          >
            {content.aboutLabel}
          </a>
          <a
            href="#projects"
            className="border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-8 rounded-xl transition"
          >
            {content.projectsLabel}
          </a>
        </motion.div>
        <motion.div
          className="flex gap-6 mt-8 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
            <Github className="w-6 h-6" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
