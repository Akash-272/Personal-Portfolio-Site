"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Akash-272",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/akash-nalawade-434a8b23b/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/akash_27002",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:akashnalawade8262@gmail.com",
    label: "Email",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm eager to collaborate on exciting projects or explore career opportunities.
          Feel free to connect!


        </p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <link.icon className="w-6 h-6 text-purple-500" />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}