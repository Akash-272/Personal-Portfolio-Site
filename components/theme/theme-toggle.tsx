"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </motion.button>
  );
} 