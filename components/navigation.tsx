"use client";
import { motion } from "framer-motion";
import { Home, User, Code, Brain, Mail, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/projects", icon: Code, label: "Projects" },
    { href: "/skills", icon: Brain, label: "Skills" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm md:border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary">
            {"{ YF }"}
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="relative">
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          {/* futur ModeToggle ou autre */}
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-1 left-4 right-4 bg-background/80 backdrop-blur-sm border rounded-full p-2">
        <div className="flex justify-around">
          <div className="flex items-center space-x-2 ">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary">
              {"{ YF }"}
            </span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full"
                >
                  <Icon className="h-5 w-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileSection"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
