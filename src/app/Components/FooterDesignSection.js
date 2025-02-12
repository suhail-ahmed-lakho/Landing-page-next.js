'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const FooterDesignSection = () => {
  const customerLogos = [
    '/logo1.svg',
    '/logo2.svg',
    '/logo3.svg',
    '/logo4.svg',
    '/logo.svg',
    '/logo5.svg',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-white dark:bg-gray-800">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/pana.svg"
            alt="Footer Design Illustration"
            width={500}
            height={500}
            className="w-full h-auto max-w-md mx-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            How to design your site footer like we did
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat et magna. Donec quis erat et
            libero ultricies mollis. In hac habitasse platea dictumst.
          </p>
          <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/image 9.svg"
              alt="Tesla Logo"
              width={500}
              height={500}
              className="w-full h-auto max-w-md mx-auto mb-6"
              priority
            />
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
            <div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                enim.
              </p>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-700 dark:text-green-500">Tim Smith</h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">British Dragon Boat Racing Association</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center sm:justify-start">
              {customerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Customer Logo ${index + 1}`}
                  width={40}
                  height={40}
                  className="w-8 sm:w-10 h-8 sm:h-10"
                />
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-sm sm:text-base text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 font-medium group"
            >
              Meet all customers 
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterDesignSection; 