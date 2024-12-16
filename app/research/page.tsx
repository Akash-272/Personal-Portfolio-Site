"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/layout/wrapper";

const research = {
  title: "Voice Dubber – Voice, Text, Caption Translation Solution",
  journal: "African Journal of Biomedical Research",
  volume: "Vol. 27(4s)",
  date: "December 2024",
  pages: "5701-5712",
  doi: "https://doi.org/10.53555/AJBR.v27i4S.4668",
  authors: [
    "Aadarsh Wadile",
    "Akash Nalawade",
    "Parth Wattamwar",
    "Vedant Kasat",
    "Pramod Ganjewar"
  ],
  abstract: `This project introduces an AI-driven transcription system designed to revolutionize voice dubbing and caption generation 
    across multiple languages. Leveraging state-of-the-art machine learning algorithms, it facilitates seamless voice-to-text 
    and text-to-voice conversions with a focus on precision, adaptability, and user accessibility. By retaining emotional 
    nuances and preserving contextual integrity in translations, the system promotes effective cross-cultural communication. 
    Emphasizing user-centric design, scalability, and multi-platform compatibility, this solution aims to set new industry 
    standards in audio content translation through synchronized captions and natural voice dubbing.`,
  indexTerms: [
    "Automatic speech recognition",
    "language identification",
    "neural machine translation",
    "voice synthesis",
    "voice dubbing",
    "caption generation"
  ],
  journalLink: "https://africanjournalofbiomedicalresearch.com/index.php/AJBR"
};

export default function Research() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Research Publication</h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">{research.title}</h2>

            <div className="mb-6">
              <p className="text-purple-600 dark:text-purple-400 mb-2">
                {research.journal} • {research.volume} • {research.date} • Pages {research.pages}
              </p>
              <a
                href={research.journalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                View Journal →
              </a>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Authors</h3>
              <div className="space-y-2">
                {research.authors.map((author, index) => (
                  <div key={index} className="font-medium">
                    {author}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Abstract</h3>
              <p className="text-gray-700 dark:text-gray-300">{research.abstract}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Index Terms</h3>
              <div className="flex flex-wrap gap-2">
                {research.indexTerms.map((term, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">DOI</h3>
              <a
                href={research.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                {research.doi}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
} 