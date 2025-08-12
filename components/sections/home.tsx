/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SocialLink } from "@/types";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

type Section = "home" | "about" | "projects" | "skills" | "contact";

interface HomeProps {
  onNavigate: (section: Section) => void;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Smiths935",
    icon: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yvan-fotso-a64470282",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:yvanfotso935@gmail.com",
    icon: "Mail",
  },
  {
    name: "WhatSapp",
    url: "tel:+237658241310",
    icon: "WhatSapp",
  },
];

export function Home({ onNavigate }: HomeProps) {
  const roles = ["Full Stack Developer", "Web Developer", "Mobile Developer"];

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Mail":
        return <Mail size={20} />;
      case "WhatSapp":
        return <IconBrandWhatsapp size={20} />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-5 relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Yvan FOTSO
        </motion.h1>

        <TypewriterEffect
          
          words={roles}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        />

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Crafting exceptional digital experiences with JavaScript expertise and
          a passion for clean, efficient code.

          {/* 
            voici la traduction : Concevoir des expériences numériques exceptionnelles grâce à 
            mon expertise javascript et ma passion pour un code claire et optimisé
          */}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" onClick={() => onNavigate("projects")}>
            View My Work
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate("contact")}
          >
            Get in Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
          <Link href={'/CV_FotsoYvan.pdf'} download={'CV_FotsoYvan.pdf'} target="_blank" rel="noopenrer">
            <Button
              variant="link"
              size="lg"
            >
              Download CV
              <Download className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className=""
        >
          <div className="flex items-center gap-6 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated code snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute top-5 sm:top-12 left-10 text-xs font-mono"
        >
          {`const developer = {
  name: "Fotso Tagne Yvan",
  skills: ["JavaScript", "React", "Node.js"],
  passion: "Building amazing web experiences"
};`}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-1/9 ml-10 md:right-10 text-xs font-mono"
        >
          {`function createMagic() {
  return passion + skills + creativity;
}`}
        </motion.div>
      </div>
    </div>
  );
}
