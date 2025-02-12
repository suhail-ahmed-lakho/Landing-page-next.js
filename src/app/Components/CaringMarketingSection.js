'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CaringMarketingSection = () => {
  const stories = [
    {
      image: '/image18.svg',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      location: 'OneRen',
      link: '/readmore'
    },
    {
      image: '/image19.svg',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
      location: '',
      link: '/readmore'
    },
    {
      image: '/image20.svg',
      title: 'Revamping the Membership Model with Triathlon Australia',
      location: 'Australia',
      link: '/readmore'
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The National Trust has been able to move about the latest challenges insights, 
          trends and tips from the Gladstone team and special quest from the sector.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 mb-4 overflow-hidden rounded-2xl">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
              {story.title}
            </h3>
            {story.location && (
              <p className="text-gray-600 dark:text-gray-400">{story.location}</p>
            )}
            <div className="mt-4 inline-flex items-center text-green-500 font-medium">
              Readmore 
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" 
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaringMarketingSection; 