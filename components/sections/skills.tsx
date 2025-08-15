// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Subscript as Javascript, Repeat as React, Database, Server, Smartphone, Github as Git, Terminal, Globe, Cpu, Code2 } from "lucide-react";

// export function Skills() {
//   const skillCategories = [
//     {
//       title: "Frontend Technologies",
//       skills: [
//         {
//           icon: Javascript,
//           name: "JavaScript/TypeScript",
//           description: "Modern ES6+, TypeScript, Async programming, Functional concepts"
//         },
//         {
//           icon: React,
//           name: "React & Next.js",
//           description: "Component architecture, Hooks, Context, Server Components, App Router"
//         },
//         {
//           icon: Code2,
//           name: "HTML5 & CSS3",
//           description: "Semantic markup, Flexbox, Grid, Animations, Responsive design"
//         },
//         {
//           icon: Globe,
//           name: "Web Technologies",
//           description: "REST APIs, GraphQL, WebSockets, Progressive Web Apps"
//         }
//       ]
//     },
//     {
//       title: "Backend Development",
//       skills: [
//         {
//           icon: Server,
//           name: "Node.js",
//           description: "Express.js, API development, Middleware, Authentication"
//         },
//         {
//           icon: Database,
//           name: "Databases",
//           description: "MongoDB, PostgreSQL, Redis, Database design patterns"
//         },
//         {
//           icon: Terminal,
//           name: "DevOps",
//           description: "Docker, CI/CD, Cloud platforms (AWS, GCP), Deployment"
//         },
//         {
//           icon: Cpu,
//           name: "System Design",
//           description: "Microservices, Scalability, Performance optimization"
//         }
//       ]
//     },
//     {
//       title: "Mobile Development",
//       skills: [
//         {
//           icon: Smartphone,
//           name: "React Native",
//           description: "Cross-platform development, Native modules, Mobile UI/UX"
//         },
//         {
//           icon: Git,
//           name: "Version Control",
//           description: "Git, GitHub, Collaborative development, Code review"
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="h-full container mx-auto px-4 py-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <Badge variant="outline" className="mb-4">Skills</Badge>
//         {/* Compétences */}
//         <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
//         {/* Expertise technique */}
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           A comprehensive overview of my technical skills and expertise in web and mobile development.
//         </p>
//         {/* Un aperçu complet de mes compétences techniques et de mon expertise en développement web et mobile */}
//       </motion.div>

//       <div className="space-y-8">
//         {skillCategories.map((category, categoryIndex) => (
//           <motion.div
//             key={categoryIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//           >
//             <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {category.skills.map((skill, skillIndex) => (
//                 <motion.div
//                   key={skillIndex}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 + skillIndex * 0.1 }}
//                 >
//                   <Card className="group hover:shadow-lg transition-all duration-300">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
//                           <skill.icon className="h-6 w-6 text-primary" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold mb-2">{skill.name}</h4>
//                           <p className="text-sm text-muted-foreground">{skill.description}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import Widget from '../widget';

// Fonction utilitaire pour encoder les SVG en base64 (pour background-image)
const svgToBackground = (svg: string) => {
  return `url("data:image/svg+xml;base64,${btoa(svg)}")`;
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      name: 'Frontend',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      skills: [
        { name: 'React', logo: svgToBackground(ReactLogo), color: 'from-blue-500 to-blue-600' },
        { name: 'TypeScript', logo: svgToBackground(TSLogo), color: 'from-blue-600 to-cyan-500' },
        { name: 'Next.js', logo: svgToBackground(NextJSLogo), color: 'from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300' },
        { name: 'Tailwind CSS', logo: svgToBackground(TailwindLogo), color: 'from-cyan-400 to-teal-500' },
        { name: 'Framer Motion', logo: svgToBackground(FramerLogo), color: 'from-purple-500 to-pink-500' },
      ],
    },
    backend: {
      name: 'Backend',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      skills: [
        { name: 'Node.js', logo: svgToBackground(NodeJSLogo), color: 'from-green-500 to-green-600' },
        { name: 'Express', logo: svgToBackground(ExpressLogo), color: 'from-gray-600 to-gray-700 dark:from-gray-300 dark:to-gray-400' },
        { name: 'Python', logo: svgToBackground(PythonLogo), color: 'from-yellow-400 to-blue-500' },
        { name: 'Django', logo: svgToBackground(DjangoLogo), color: 'from-green-600 to-green-700' },
        { name: 'GraphQL', logo: svgToBackground(GraphQLLogo), color: 'from-pink-500 to-purple-600' },
      ],
    },
    devops: {
      name: 'DevOps & Cloud',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      skills: [
        { name: 'Docker', logo: svgToBackground(DockerLogo), color: 'from-blue-500 to-cyan-400' },
        { name: 'Kubernetes', logo: svgToBackground(KubernetesLogo), color: 'from-blue-600 to-blue-700' },
        { name: 'AWS', logo: svgToBackground(AWSLogo), color: 'from-orange-500 to-yellow-500' },
        { name: 'GitHub Actions', logo: svgToBackground(GitHubActionsLogo), color: 'from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300' },
        { name: 'Terraform', logo: svgToBackground(TerraformLogo), color: 'from-purple-600 to-purple-700' },
      ],
    },
    databases: {
      name: 'Bases de données',
      color: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      icon: 'M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z',
      skills: [
        { name: 'PostgreSQL', logo: svgToBackground(PostgreSQLLogo), color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', logo: svgToBackground(MongoDBLogo), color: 'from-green-500 to-green-600' },
        { name: 'Redis', logo: svgToBackground(RedisLogo), color: 'from-red-500 to-red-600' },
        { name: 'Prisma', logo: svgToBackground(PrismaLogo), color: 'from-cyan-500 to-teal-600' },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 dark:text-gray-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Widget />
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          <Badge variant="outline" className="mb-4">Skills</Badge>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
        >
          Les technologies que j’utilise au quotidien pour construire des systèmes robustes, évolutifs et performants.
        </motion.p>

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === key
                  ? `${cat.bg} ${cat.color} shadow-md`
                  : 'dark:bg-gray-100 bg-gray-800 dark:text-gray-700 text-gray-300 dark:hover:bg-gray-200 hover:bg-gray-700'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
              </svg>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grille de compétences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`h-20 w-20 mx-auto mb-3 dark:bg-white bg-gray-800 rounded-xl shadow-sm border dark:border-gray-200 border-gray-700 flex items-center justify-center bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110`}
                style={{ backgroundImage: skill.logo }}
                aria-label={skill.name}
              ></div>
              <h3 className="text-center text-sm font-medium dark:text-gray-700 text-gray-300">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// === LOGOS SVG INLINE (minimalistes ou officiels encodés) ===
const ReactLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%2361DAFB" d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/><path fill="%2361DAFB" d="M128,64c40,0,72,32,72,72a8,8,0,0,1-16,0c0-30-24-64-64-64s-64,34-64,64a8,8,0,0,1-16,0c0-40,32-72,72-72Z"/><path fill="%2361DAFB" d="M128,64a88,88,0,0,0,0,128,8,8,0,0,0,8-8V72a8,8,0,0,0-8-8Z"/><path fill="%2361DAFB" d="M128,192a88,88,0,0,0,0-128,8,8,0,0,0-8,8v112a8,8,0,0,0,8,8Z"/></svg>`;

const TSLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,40h-80a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V48A8,8,0,0,0,176,40Z" fill="none" stroke="%233178C6" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,40V216" fill="none" stroke="%233178C6" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,72h24a16,16,0,0,1,16,16v8a16,16,0,0,1-16,16h-8v32" fill="none" stroke="%233178C6" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,120h16" fill="none" stroke="%233178C6" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;

const NextJSLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23000000" d="M128,24L24,128l104,104l104-104L128,24z"/><circle cx="128" cy="128" r="40" fill="%23FFFFFF"/></svg>`;

const TailwindLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%2338B2AC" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23000000" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const FramerLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%230055FF" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const NodeJSLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23339933" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const ExpressLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23000000" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const PythonLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23FFD43B" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%233776AB" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const DjangoLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23092E20" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const GraphQLLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23E10098" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const DockerLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%232496ED" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const KubernetesLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23326CE5" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const AWSLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23FF9900" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const GitHubActionsLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%2324292E" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const TerraformLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23623CE4" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const PostgreSQLLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23336791" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const MongoDBLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%2347A349" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const RedisLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%23DC382D" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;

const PrismaLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="%232D3748" d="M128,24L24,128l104,104l104-104L128,24z"/><path fill="%23FFFFFF" d="M128,80c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S154.51,80,128,80z"/></svg>`;
