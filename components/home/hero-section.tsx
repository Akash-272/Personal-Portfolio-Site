"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center relative"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 relative">
          <Image
            src="images/linkedinimage.jpeg"
            alt="Akash Nalawade"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
        >
          <span className="text-2xl">👋</span>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
      >
        Akash Nalawade
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl text-gray-600 dark:text-gray-300"
      >
        Full Stack Developer & Software Enthusiast
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#about"
          className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
        >
          About Me
        </a>
        <a
          href="#contact"
          className="border border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  );
}