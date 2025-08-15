/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";

// export function Experience() {
//   const experiences = [
//     {
//       year: "Mars 2025 - Present",
//       role: "Full Stack Developer Freelancer",
//       company: "PDOS Company",
//       description: [
//         "Leading development of web and mobile applications using React, Node.js, and React Native.",
//         "Leading development of web and mobile applications using React, Node.js, and React Native.",
//         "Leading development of web and mobile applications using React, Node.js, and React Native.",
//         "Leading development of web and mobile applications using React, Node.js, and React Native.",
//       ],
//     },
//     {
//       year: "March 2025 - April 2021",
//       role: "Data Collector",
//       company: "PriceWaterHouseCoopers",
//       description: [
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//       ],
//     },
//     {
//       year: "July 2023 - March 2025",
//       role: "Technician IT",
//       company: "Immigration By PlanUgo",
//       description: [
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//       ],
//     },
//     {
//       year: "July 2022 - September 2022",
//       role: "Software Engineer junior",
//       company: "Crystal Art Technology",
//       description: [
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//         "Built responsive web applications and implemented modern UI/UX designs.",
//       ],
//     },
//   ];

//   return (
//     <div className="h-full container mx-auto px-4 py-8 flex items-center">
//       <div className="grid md:grid-cols-1 gap-8 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-6"
//         >
//           <Badge variant="outline" className="mb-4">Experience</Badge> 
//           {/* <h2 className="text-3xl font-bold mb-4">Passionate Full Stack Developer</h2>
//           <p className="text-muted-foreground">
//             I'm a Full Stack Developer with expertise in JavaScript and its ecosystem. 
//             My journey in web development started with a curiosity for creating interactive 
//             user experiences and has evolved into a passion for building full-scale applications.
//           </p>
//           <p className="text-muted-foreground">
//             I specialize in modern JavaScript frameworks and libraries, with a strong focus on 
//             React, Node.js, and related technologies. My approach combines technical expertise 
//             with creative problem-solving to deliver efficient and scalable solutions.
//           </p> */}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="space-y-3"
//         >
//           {experiences.map((exp, index) => (
//             <Card key={index} className="">
//               <CardContent className="p-3">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold text-lg">{exp.role}</h3>
//                       <p className="text-sm text-muted-foreground">{exp.company}</p>
//                     </div>
//                     <Badge variant="secondary">{exp.year}</Badge>
//                   </div>
//                   <div className="text-sm text-muted-foreground">{exp.description.map((i, index) => (
//                     <ul key={index} className="flex items-center ">
//                       <li> <span className="text-xl">- </span>{i}</li>
//                     </ul>
//                   ))}
//                   </div>
//                 </motion.div>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MonitorSmartphone, Server, Smartphone,FileType, FileCode, CodeXml, Codesandbox, Database, Box, Github, Cloud  } from 'lucide-react';
import { Badge } from '../ui/badge';
import Widget from '../widget';

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start('visible');
    }, 200);

    return () => clearTimeout(timer);
  }, [controls]);

  const experiences = [
    {
      title: 'Ingénieur Logiciel Fullstack',
      company: 'TechNova Solutions',
      period: '2022 – Aujourd’hui',
      location: 'Paris, France',
      icon: MonitorSmartphone,
      color: 'text-blue-600 dark:text-blue-400',
      tech: [FileType, CodeXml, Codesandbox, Database, Box],
      description:
        'Développement d’applications fullstack pour des clients fintech. Conception d’API REST et GraphQL, optimisation des performances, CI/CD avec GitHub Actions. Participation à l’architecture microservices.',
    },
    {
      title: 'Ingénieur DevOps',
      company: 'CloudScale Labs',
      period: '2020 – 2022',
      location: 'Lyon, France',
      icon: Server,
      color: 'text-purple-600 dark:text-purple-400',
      tech: [Box, Github, Cloud, FileCode],
      description:
        'Automatisation du déploiement via Github et Terraform. Surveillance avec Prometheus/Grafana. Migration de services legacy vers le cloud AWS. Réduction de 40 % des coûts d’infrastructure.',
    },
    {
      title: 'Développeur Mobile',
      company: 'AppWave Studio',
      period: '2018 – 2020',
      location: 'Bordeaux, France',
      icon: Smartphone,
      color: 'text-green-600 dark:text-green-400',
      tech: [CodeXml, FileType],
      description:
        'Développement d’applications mobiles natives et cross-platform (React Native). Collaboration avec les designers UX/UI. Intégration d’APIs tierces et tests automatisés (Jest, Detox).',
    },
    {
      title: 'Stage – Ingénierie Cloud',
      company: 'Innovatech',
      period: '2017 – 2018',
      location: 'Toulouse, France',
      icon: Cloud,
      color: 'text-orange-600 dark:text-orange-400',
      tech: [FileCode, Cloud, Box],
      description:
        'Mise en place d’un système de traitement de données en temps réel avec AWS Lambda et Kinesis. Scripting Python pour l’automatisation. Documentation technique et revues de code.',
    },
    {
      title: 'Projets Académiques',
      company: 'ENSIIE',
      period: '2015 – 2018',
      location: 'École d’ingénieurs',
      icon: Cloud,
      color: 'text-gray-600 dark:text-gray-400',
      tech: [FileCode, CodeXml, Codesandbox, Database],
      description:
        'Projet de fin d’études sur la détection d’anomalies en IA. Implémentation d’un modèle de machine learning avec scikit-learn. Application web de visualisation avec React.',
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
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-2 dark:text-gray-800 text-gray-100 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
      <Widget/>
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r dark:from-blue-600 to-purple-600 from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          <Badge variant="outline" className="mb-4"> Parcours Professionnel</Badge>
         
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg dark:text-gray-600 text-gray-300 mb-12 max-w-2xl"
        >
          Voici mon parcours en tant qu'ingénieur logiciel — des projets complexes, des stacks modernes, et une croissance continue.
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
                    <exp.icon className={`text-2xl ${exp.color}`} />
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-sm dark:text-gray-500 text-gray-400 text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="dark:text-gray-700 text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

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
};

