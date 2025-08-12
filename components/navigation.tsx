/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Home, User, Code, Brain, Mail, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: any) => void;
}

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon:BriefcaseBusiness, label: "Experience" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "skills", icon: Brain, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm md:border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-2 ">
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary">
            {"{ YF }"}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="relative"
                onClick={() => onNavigate(item.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-1 left-4 right-4 bg-background/80 backdrop-blur-sm border rounded-full p-2">
        <div className="flex justify-around">
          <div className="flex items-center space-x-2 ">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary">
              {"{ YF }"}
            </span>
            
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                className="relative rounded-full"
                onClick={() => onNavigate(item.id)}
              >
                <Icon className="h-5 w-5" />
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeMobileSection"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            );
          })}
          <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
        </div>
      </div>
    </header>
  );
}
