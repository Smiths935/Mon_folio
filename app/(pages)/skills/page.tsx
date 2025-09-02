/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ReactIco,
  Nextjs,
  TailWindIco,
  Express,
  Django,
  Aws,
} from "@/public/icon/index";

export default function page() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = {
    frontend: {
      name: "Frontend",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      skills: [
        { name: "React", logo: ReactIco, color: "from-blue-500 to-blue-600" },
        {
          name: "TypeScript",
          logo: ReactIco,
          color: "from-blue-600 to-cyan-500",
        },
        {
          name: "Next.js",
          logo: Nextjs,
          color:
            "from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300",
        },
        {
          name: "Tailwind CSS",
          logo: TailWindIco,
          color: "from-cyan-400 to-teal-500",
        },
        {
          name: "Framer Motion",
          logo: ReactIco,
          color: "from-purple-500 to-pink-500",
        },
      ],
    },
    backend: {
      name: "Backend",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      skills: [
        {
          name: "Node.js",
          logo: ReactIco,
          color: "from-green-500 to-green-600",
        },
        {
          name: "Express",
          logo: Express,
          color:
            "from-gray-600 to-gray-700 dark:from-gray-300 dark:to-gray-400",
        },
        {
          name: "Python",
          logo: ReactIco,
          color: "from-yellow-400 to-blue-500",
        },
        { name: "Django", logo: Django, color: "from-green-600 to-green-700" },
        {
          name: "GraphQL",
          logo: ReactIco,
          color: "from-pink-500 to-purple-600",
        },
      ],
    },
    devops: {
      name: "DevOps & Cloud",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      skills: [
        { name: "Docker", logo: ReactIco, color: "from-blue-500 to-cyan-400" },
        {
          name: "Kubernetes",
          logo: ReactIco,
          color: "from-blue-600 to-blue-700",
        },
        { name: "AWS", logo: Aws, color: "from-orange-500 to-yellow-500" },
        {
          name: "GitHub Actions",
          logo: ReactIco,
          color:
            "from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300",
        },
        {
          name: "Terraform",
          logo: ReactIco,
          color: "from-purple-600 to-purple-700",
        },
      ],
    },
    databases: {
      name: "Bases de données",
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-900/20",
      icon: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z",
      skills: [
        {
          name: "PostgreSQL",
          logo: ReactIco,
          color: "from-blue-600 to-indigo-600",
        },
        {
          name: "MongoDB",
          logo: ReactIco,
          color: "from-green-500 to-green-600",
        },
        { name: "Redis", logo: ReactIco, color: "from-red-500 to-red-600" },
        { name: "Prisma", logo: ReactIco, color: "from-cyan-500 to-teal-600" },
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
    <section
      id="skills"
      className="px-6 md:px-12 lg:px-24 dark:text-gray-100 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
        >
          Les technologies que j’utilise au quotidien pour construire des
          systèmes robustes, évolutifs et performants.
        </motion.p>

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? `${cat.bg} ${cat.color} shadow-md`
                  : "dark:bg-gray-100 bg-gray-800 dark:text-gray-700 text-gray-300 dark:hover:bg-gray-200 hover:bg-gray-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={cat.icon}
                />
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
          {categories[activeCategory as keyof typeof categories].skills.map(
            (skill, index) => {
              const Logo = skill.logo;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Logo className="mx-auto h-12 w-12" />
                  <h3 className="text-center text-sm font-medium dark:text-gray-700 text-gray-300">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}
