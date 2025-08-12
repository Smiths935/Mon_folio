"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Subscript as Javascript, Repeat as React, Database, Server, Smartphone, Github as Git, Terminal, Globe, Cpu, Code2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        {
          icon: Javascript,
          name: "JavaScript/TypeScript",
          description: "Modern ES6+, TypeScript, Async programming, Functional concepts"
        },
        {
          icon: React,
          name: "React & Next.js",
          description: "Component architecture, Hooks, Context, Server Components, App Router"
        },
        {
          icon: Code2,
          name: "HTML5 & CSS3",
          description: "Semantic markup, Flexbox, Grid, Animations, Responsive design"
        },
        {
          icon: Globe,
          name: "Web Technologies",
          description: "REST APIs, GraphQL, WebSockets, Progressive Web Apps"
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          icon: Server,
          name: "Node.js",
          description: "Express.js, API development, Middleware, Authentication"
        },
        {
          icon: Database,
          name: "Databases",
          description: "MongoDB, PostgreSQL, Redis, Database design patterns"
        },
        {
          icon: Terminal,
          name: "DevOps",
          description: "Docker, CI/CD, Cloud platforms (AWS, GCP), Deployment"
        },
        {
          icon: Cpu,
          name: "System Design",
          description: "Microservices, Scalability, Performance optimization"
        }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        {
          icon: Smartphone,
          name: "React Native",
          description: "Cross-platform development, Native modules, Mobile UI/UX"
        },
        {
          icon: Git,
          name: "Version Control",
          description: "Git, GitHub, Collaborative development, Code review"
        }
      ]
    }
  ];

  return (
    <div className="h-full container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4">Skills</Badge>
        <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise in web and mobile development.
        </p>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + skillIndex * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <skill.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}