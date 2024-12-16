"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/layout/wrapper";
import { SiGithub, SiVercel } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "AI-Dubber",
    description: "An AI-powered system with video-to-speech, speech-to-text, text translation, and text-to-speech functionalities, including editable caption generation.",
    url: "https://github.com/Akash-272/AI-Dubber.git",
    icon: SiGithub
  },
  {
    id: 2,
    title: "Price Tracker",
    description: "A price-tracking web app using Bright Data API, TypeScript, and Next.js with automated email notifications via NodeMailer.",
    url: "https://price-tracker-wine.vercel.app/",
    icon: SiVercel
  },
  {
    id: 3,
    title: "NZWalks Web API",
    description: "A RESTful web API built with ASP.NET for managing walking trails, featuring CRUD functionality and secure authentication.",
    url: "https://github.com/Akash-272/NZWalksAPI",
    icon: SiGithub
  },
  {
    id: 4,
    title: "Tours and Travels Management System",
    description: "A system developed with Node.js and database modeling for managing user trips and streamlining bookings.",
    url: "https://github.com/Akash-272/Travels-System-",
    icon: SiGithub
  },
];

export default function Work() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <h1 className="text-4xl font-bold mb-8">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 inline-flex items-center gap-2"
              >
                <project.icon className="w-4 h-4" />
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
}