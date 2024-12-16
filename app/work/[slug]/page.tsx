"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/layout/wrapper";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <h1 className="text-4xl font-bold mb-8">Project Details: {slug}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            This is a detailed description of the project. You can customize this
            page based on the project slug and add more content as needed.
          </p>
          {/* Add more project details here */}
        </div>
      </motion.div>
    </Wrapper>
  );
}