import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/FeaturedProjects";
import Tech from "@/components/Tech";
import { useEffect } from "react";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    document.title = "Mirza Andre | Fullstack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      <div className="bg-cover bg-no-repeat">
        <Navbar />
        {/* Hero Section */}
        <Hero />
      </div>

      {/* About Section */}
      <About />

      {/* Timeline Section */}
      <Experience />

      {/* Tech Stack Section */}
      <Tech />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="mt-16 h-16 text-center text-sm text-gray-500 dark:text-gray-400">
        Built with React & Framer Motion — © 2025 Mirza Andre
      </footer>
    </div>
  );
}
