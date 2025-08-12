"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "@/components/sections/home";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/sections/experiences";
import SplashScreen from "@/components/sections/SplashScreen";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Languages } from "lucide-react";
import FlotingButton from "@/components/floting_button";

type Section =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  const [direction, setDirection] = useState(0);

  const handleSectionChange = (newSection: Section) => {
    const sections: Section[] = [
      "home",
      "about",
      "experience",
      "projects",
      "skills",
      "contact",
    ];
    const currentIndex = sections.indexOf(currentSection);
    const newIndex = sections.indexOf(newSection);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentSection(newSection);
  };
  const [showSplash, setShowSplash] = useState(true);
  useSmoothScroll(); // Add smooth scroll hook

  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="min-h-full w-full overflow-hidden bg-background text-foreground relative">
          {/* <Navigation
            currentSection={currentSection}
            onNavigate={handleSectionChange}
          /> */}
          <AnimatePresence mode="wait">
            <motion.main
              key={currentSection}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full w-full pt-16"
            >
              {currentSection === "home" && (
                <Home onNavigate={handleSectionChange} />
              )}
              {currentSection === "about" && <About />}
              {currentSection === "experience" && <Experience />}
              {currentSection === "projects" && <Projects />}
              {currentSection === "skills" && <Skills />}
              {currentSection === "contact" && <Contact />}
            </motion.main>
            

          </AnimatePresence>


        </div>
      )}
    </>
  );
}
