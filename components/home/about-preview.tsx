"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm a dedicated software developer and intern with a strong foundation in backend development,
          database management, and creating efficient, user-centric solutions.
          My focus lies in building scalable, maintainable applications while solving real-world challenges.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-purple-500">🎓</span>
            <span>Computer Science Graduate</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-purple-500">💼</span>
            <span>Professional Experience in Product Development (Allvue Systems)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-purple-500">🌍</span>
            <span>Keen Learner of Emerging Tech

            </span>
          </div>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors"
        >
          Learn more about me
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}