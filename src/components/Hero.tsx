import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import styles from "@/lib/styles";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background dark:bg-darkBackground flex flex-col justify-center items-center text-center p-6">
      <ParticlesBackground />

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          // className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4"
          className={`${styles.heroHeadText} text-primary mb-4`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm Mirza Andre
        </motion.h2>

        {/* Subheading */}
        <motion.p
          // className="text-lg md:text-xl text-textSecondary font-body mb-6 max-w-2xl"
          className={`${styles.heroSubText} text-textSecondary font-body mb-6 max-w-2xl`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Fullstack Developer | Mobile & Web Engineer. <br />
          Building clean, scalable apps for real-world impact.
        </motion.p>

        {/* Buttons */}
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
            About Me
          </a>
          <a
            href="#projects"
            className="border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-8 rounded-xl transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-8 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://github.com/Mirzaadr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mirza-adr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
