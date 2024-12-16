"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/layout/wrapper";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiPython
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: SiReact,
    color: "text-[#61DAFB]",
    border: "border-[#61DAFB]"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    border: "border-black dark:border-white"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
    border: "border-[#3178C6]"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933]",
    border: "border-[#339933]"
  },
  {
    name: "ASP.NET",
    icon: SiDotnet,
    color: "text-[#512BD4]",
    border: "border-[#512BD4]"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1]",
    border: "border-[#4479A1]"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248]",
    border: "border-[#47A248]"
  },
  {
    name: "Machine Learning & NLP",
    icon: SiPython,
    color: "text-[#3776AB]",
    border: "border-[#3776AB]"
  }
];

export default function About() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Hi! I'm Akash Nalawade, a dedicated full-stack developer with a strong foundation
            in backend development and database management. I excel at building efficient,
            user-centric applications while leveraging modern technologies to solve real-world problems.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group p-6 rounded-xl border-2 ${skill.border} bg-white dark:bg-gray-800 
                  hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3`}
              >
                <skill.icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
                <div className={`absolute inset-0 ${skill.border} opacity-0 group-hover:opacity-10 
                  rounded-xl transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
}