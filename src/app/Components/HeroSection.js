'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white dark:bg-gray-800 min-h-[calc(100vh-64px)]">
      <div className="max-w-xl text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Lessons and insights
            <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-8 px-8 py-4 bg-green-500 text-white rounded-lg text-lg font-medium hover:bg-green-600 transition-colors">
            Register
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }}
        className="mt-12 lg:mt-0"
      >
        <Image
          src="/Illustration.svg"
          alt="Developer with computer illustration"
          width={400}
          height={400}
          priority
          className="w-100 h-100"
        />
      </motion.div>
    </section>
  );
}
