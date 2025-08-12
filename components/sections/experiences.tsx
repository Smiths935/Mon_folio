/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      year: "Mars 2025 - Present",
      role: "Full Stack Developer Freelancer",
      company: "PDOS Company",
      description: [
        "Leading development of web and mobile applications using React, Node.js, and React Native.",
        "Leading development of web and mobile applications using React, Node.js, and React Native.",
        "Leading development of web and mobile applications using React, Node.js, and React Native.",
        "Leading development of web and mobile applications using React, Node.js, and React Native.",
      ],
    },
    {
      year: "March 2025 - April 2021",
      role: "Data Collector",
      company: "PriceWaterHouseCoopers",
      description: [
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
      ],
    },
    {
      year: "July 2023 - March 2025",
      role: "Technician IT",
      company: "Immigration By PlanUgo",
      description: [
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
      ],
    },
    {
      year: "July 2022 - September 2022",
      role: "Software Engineer junior",
      company: "Crystal Art Technology",
      description: [
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
        "Built responsive web applications and implemented modern UI/UX designs.",
      ],
    },
  ];

  return (
    <div className="h-full container mx-auto px-4 py-8 flex items-center">
      <div className="grid md:grid-cols-1 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Badge variant="outline" className="mb-4">Experience</Badge>
          {/* <h2 className="text-3xl font-bold mb-4">Passionate Full Stack Developer</h2>
          <p className="text-muted-foreground">
            I'm a Full Stack Developer with expertise in JavaScript and its ecosystem. 
            My journey in web development started with a curiosity for creating interactive 
            user experiences and has evolved into a passion for building full-scale applications.
          </p>
          <p className="text-muted-foreground">
            I specialize in modern JavaScript frameworks and libraries, with a strong focus on 
            React, Node.js, and related technologies. My approach combines technical expertise 
            with creative problem-solving to deliver efficient and scalable solutions.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {experiences.map((exp, index) => (
            <Card key={index} className="">
              <CardContent className="p-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="secondary">{exp.year}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{exp.description.map((i, index) => (
                    <ul key={index} className="flex items-center ">
                      <li> <span className="text-xl">- </span>{i}</li>
                    </ul>
                  ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}