/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Globe, Smartphone, Palette } from "lucide-react";

type ProjectType = "web" | "mobile" | "design" | "all";

interface Project {
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export default function page() {
  const [selectedType, setSelectedType] = useState<ProjectType>("all");

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing",
      type: "web",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management app with offline support and cloud sync",
      type: "mobile",
      tech: ["React Native", "Redux", "Firebase"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management and content planning",
      type: "web",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design system with guidelines and assets",
      type: "design",
      tech: ["Figma", "Adobe CC", "Design Systems"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and nutrition with personalized recommendations",
      type: "mobile",
      tech: ["React Native", "TypeScript", "Firebase"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "UI Component Library",
      description: "Custom design system and component library for rapid development",
      type: "design",
      tech: ["React", "Storybook", "Styled Components"],
      github: "#",
      live: "#",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const filterTypes = [
    { type: "all", label: "All Projects", icon: Globe },
    { type: "web", label: "Web Apps", icon: Globe },
    { type: "mobile", label: "Mobile Apps", icon: Smartphone },
    { type: "design", label: "Design", icon: Palette }
  ];

  const filteredProjects = projects.filter(
    project => selectedType === "all" || project.type === selectedType
  );

  const getProjectTypeColor = (type: ProjectType) => {
    switch (type) {
      case "web":
        return "bg-blue-500/10 text-blue-500";
      case "mobile":
        return "bg-green-500/10 text-green-500";
      case "design":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="h-full container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4">Projects</Badge>
        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
        {/* travail en vedette */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          A selection of my recent projects showcasing my expertise across web, mobile, and design.
        </p>
        {/* Une sélection de mes projets récents mettant en valeur mon expertise dans le domaine du web, du mobile et du design */}

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterTypes.map(({ type, label, icon: Icon }) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="gap-2"
              onClick={() => setSelectedType(type as ProjectType)}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getProjectTypeColor(project.type)}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </Badge>
                </div>
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}