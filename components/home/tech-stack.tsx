"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";

// const technologies = [
//   {
//     category: "Frontend",
//     icon: Layout,
//     items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     category: "Backend",
//     icon: Server,
//     items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
//   },
//   {
//     category: "Mobile",
//     icon: Smartphone,
//     items: ["React Native", "Flutter", "iOS", "Android"],
//   },
//   {
//     category: "DevOps",
//     icon: Terminal,
//     items: ["Docker", "AWS", "CI/CD", "Git"],
//   },
// ];

const technologies = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "TypeScript", "API Integration"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "ASP.NET", "Entity Framework Core", "LINQ"],
  },
  {
    category: "Database Management",
    icon: Database,
    items: ["Azure SQL", "MongoDB", "MySQL"],
  },
  {
    category: "AI & ML",
    icon: Cpu,
    items: ["Machine Learning", "Natural Language Processing"],
  },

];


export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <tech.icon className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold">{tech.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.items.map((item) => (
                <span
                  key={item}
                  className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}