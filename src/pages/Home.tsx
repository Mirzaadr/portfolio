import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/FeaturedProjects";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
import portfolioJson from "@/content/portfolio.json";
import type { PortfolioContent } from "@/content/portfolio.types";
import { useEffect } from "react";

const content: PortfolioContent = portfolioJson;

export default function Home() {
  useEffect(() => {
    document.title = content.documentTitle;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      <div className="bg-cover bg-no-repeat">
        <Navbar content={content.navbar} />
        <Hero content={content.hero} socialLinks={content.socialLinks} />
      </div>
      <About content={content.about} />
      <Experience content={content.experience} />
      <Tech content={content.tech} />
      <Projects content={content.projects} />
      <Contact content={content.contact} socialLinks={content.socialLinks} />
      <footer className="mt-16 h-16 text-center text-sm text-gray-500 dark:text-gray-400">
        {content.footer}
      </footer>
    </div>
  );
}
