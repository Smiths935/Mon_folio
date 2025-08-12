/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Users, Globe } from "lucide-react";

export function About() {
  return (
    <div className="h-full container mx-auto px-4 py-4 flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <div className="flex justify-center lg:justify-center relative z-20">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <img
                  src={"/profile-rounded.png"}
                  alt="Yvan FOTSO"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            Passionate Full Stack Developer
            {/* Développeur Full Stack Passionné */}
          </h2>
          <p className="text-muted-foreground">
            I'm a Full Stack Developer with expertise in JavaScript and its
            ecosystem. My journey in web development started with a curiosity
            for creating interactive user experiences and has evolved into a
            passion for building full-scale applications.
            {/* Je suis un développeur Full Stack spécialisé en javascript et dans son écosystème.
            Mon parcours dans le developpement de logiciel a commencé par une curiosité pour la création 
            d'expérienes utilisateurs interacctives, et a évolué vers une passion pour la création d'applications à grande échelle. */}
          </p>
          <p className="text-muted-foreground">
            I specialize in modern JavaScript frameworks and libraries, with a
            strong focus on React, Node.js, and related technologies. My
            approach combines technical expertise with creative problem-solving
            to deliver efficient and scalable solutions.
            {/* Je me spécialise dans les frameworks et bibliothèque Javascript modernes, avec fort accent sur React, Node.js et les technologies associées. 
            Mon approche combine expertise technique et résolution créative de problèmes pour offrir des solutions efficaces et évolutives. */}
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <FileCode size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white">
                  Clean Code
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Writing maintainable and scalable code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white">
                  Fast Delivery
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Efficient development and deployment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white">
                  Quality First
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Testing and best practices at the core.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white">
                  On Time
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Meeting deadlines consistently.
                </p>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <BriefcaseBusiness className="w-6 h-6" />, label: "3+ ans d'expérience" },
              { icon: <Globe className="w-6 h-6" />, label: "15+ projets" },
              { icon: <Users className="w-6 h-6" />, label: "10+ clients" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-lg bg-gray-800
                  `}
              >
                <div className="mr-3 text-indigo-500">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
