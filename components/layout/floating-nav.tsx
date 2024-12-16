"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: User, href: "/about", label: "About" },
  { icon: Briefcase, href: "/work", label: "Work" },
  { icon: GraduationCap, href: "/research", label: "Research" },
  // { icon: BookOpen, href: "/blog", label: "Blog" },
];

export default function FloatingNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-md rounded-full p-4 flex gap-8 shadow-lg border border-gray-200"
      >
        {navItems.map(({ icon: Icon, href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative p-2 rounded-full transition-colors ${pathname === href
              ? "text-black"
              : "text-gray-600 hover:text-gray-800"
              }`}
          >
            {pathname === href && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-black/10 rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon className="w-6 h-6" />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}