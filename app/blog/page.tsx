"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/layout/wrapper";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and build your first application",
    slug: "getting-started-with-nextjs",
    date: "2024-02-28",
  },
  {
    id: 2,
    title: "Mastering TailwindCSS",
    description: "Tips and tricks for using TailwindCSS effectively",
    slug: "mastering-tailwindcss",
    date: "2024-02-25",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </time>
              <h2 className="text-2xl font-semibold mt-2 mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
              >
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
}