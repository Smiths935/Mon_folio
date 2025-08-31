/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MonitorSmartphone,
  Server,
  Smartphone,
  FileType,
  FileCode,
  CodeXml,
  Codesandbox,
  Database,
  Box,
  Github,
  Cloud,
} from "lucide-react";
import { Badge } from "../ui/badge";

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start("visible");
    }, 200);

    return () => clearTimeout(timer);
  }, [controls]);

  const experiences = [
    {
      title: "Software Engineer junior",
      company: "PricewaterhouseCoopers PWC",
      period: "03/2025 - 04/2025",
      location: "Douala, Cameroun",
      icon: MonitorSmartphone,
      color: "text-blue-600 dark:text-blue-400",
      tech: [FileType, CodeXml, Codesandbox, Database, Box],
      description: `Collecteur et organisateur de grands volumes de données, tout en 
facilitant leur acquisition et leur circulation, dans le respect des 
règles de conformité.
 Structurer ces données, pour les rendre utilisables et pertinentes.
 Participer à la mise en place de l'infrastructure technique 
nécessaire à la collecte.
 Mettre en place et gérer un accès aux données structurées pour 
une utilisation facilitée pour l'ensemble des métiers.`,
    },
    {
      title: "Technicien informatique",
      company: " immigration by PlanUGo",
      period: "207/2023 - 03/2025 ",
      location: "Douala, Cameroun",
      icon: Server,
      color: "text-purple-600 dark:text-purple-400",
      tech: [Box, Github, Cloud, FileCode],
      description: `Augmenter la vitesse de résolution des problèmes techniques de
 40 % en introduisant un nouveau système de gestion.
 Gestion de la base de données client de l'entreprise.
 Recueillir des données, organiser et tenir un journal de problèmes 
et de solutions destiné à être utilisé par les autres collègues.
 Assister l'administration dans l'élaboration de la stratégie 
marketing, actuelle commerciale et digitale/média off et on-line.
 Installer, tester et mettre à jour les équipements informatiques 
(ordinateurs, logiciels).`,
    },
    {
      title: "Stagiaire – software engineer",
      company: " Technologie Crystal Art",
      period: "07/2022 - 09/2022",
      location: "Douala, Cameroun",
      icon: Smartphone,
      color: "text-green-600 dark:text-green-400",
      tech: [CodeXml, FileType],
      description: `ppuyez les programmeurs en identifiant des opportunités 
d'amélioration et le développement des nouvelles fonctionnalités et 
du développement web.
 Supporter, développer et optimiser des requêtes SQL.
 Aide durant les enquêtes (débogages) des applications.
 Appuyer différents projets, initiatives et tâches.
 Participer, s'il y a lieu, à l'architecture et à la conception de sites 
Web en collaboration avec des concepteurs ou des clients`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-2 dark:text-gray-800 text-gray-100 min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r dark:from-blue-600 to-purple-600 from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          <Badge variant="outline" className="mb-4">
            {" "}
            Parcours Professionnel
          </Badge>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg dark:text-gray-600 text-gray-300 mb-12 max-w-2xl"
        >
          Voici mon parcours en tant qu'ingénieur logiciel — des projets
          complexes, des stacks modernes, et une croissance continue.
        </motion.p>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative border-l-2 dark:border-gray-300 border-gray-700 pl-6 md:pl-10 space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Lien vertical décoratif */}
              <div className="absolute -left-8 top-0 w-4 h-4 rounded-full dark:bg-white bg-gray-950 border-4 dark:border-blue-500 border-blue-400 shadow-md"></div>

              {/* Contenu */}
              <div className="dark:bg-gray-50 bg-gray-900 p-6 rounded-lg shadow-sm border dark:border-gray-200 border-gray-800 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    {/* <exp.icon className={`text-2xl ${exp.color}`} /> */}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm dark:text-gray-500 text-gray-400 text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="dark:text-gray-700 text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Stack technique */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((TechIcon, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs dark:bg-gray-200 bg-gray-700 px-2 py-1 rounded font-mono dark:text-gray-800 text-gray-200"
                    >
                      <TechIcon size={14} />
                      {TechIcon.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
