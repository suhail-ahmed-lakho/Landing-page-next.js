'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const FooterDesignSection = () => {
  const customerLogos = [
    
    '/logo(1).svg',
    '/logo(2).svg',
    '/logo(3).svg',
    '/logo(4).svg',
    '/logo.svg',
    '/logo(5).svg',
   
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-gray-800">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat et magna. Donec quis erat et
            libero ultricies mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-200 dark:border-gray-700 pt-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/image 9.svg"
              alt="Tesla Logo"
              width={500}
              height={500}
              className="mb-6"
            />
           
          </div>

          <div className="space-y-8">
            <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
              tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-500">Tim Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">British Dragon Boat Racing Association</p>
            </div>
            </div>
            <div className="flex flex-wrap gap-8 items-center">
              {customerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Customer Logo ${index + 1}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <a 
              href="#" 
              className="inline-flex items-center text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 font-medium"
            >
              Meet all customers 
              <svg
                className="w-5 h-5 ml-2"
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