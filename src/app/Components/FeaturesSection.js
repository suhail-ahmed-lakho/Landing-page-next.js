'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800">
      {/* Who is NextJoint suitable for? */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Manage your entire community</h2>
        <p className="text-gray-600 dark:text-gray-300">in a single system</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Who is NextJoint suitable for?</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <Image src="/icon.svg" alt="Membership" width={50} height={50} />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">Membership Organisations</h3>
          <p className="text-gray-600 dark:text-gray-300">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <Image src="/icon(1).svg" alt="National" width={50} height={50} />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">National Associations</h3>
          <p className="text-gray-600 dark:text-gray-300">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <Image src="/icon(2).svg" alt="Clubs" width={50} height={50} />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">Clubs And Groups</h3>
          <p className="text-gray-600 dark:text-gray-300">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>

      {/* Pixelgrade Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        <div className="md:w-1/2">
          <Image src="/rafiki.svg" alt="Pixelgrade" width={500} height={500} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">The unseen of spending three years at Pixelgrade</h2>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id amet justo ipsum. Sed quis massa ipsum vitae felis tristique, blandit massa elementum, porta. Nullam mattis tristique lectus.</p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-12 rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Helping a local
              <span className="text-green-500 block"> business reinvent itself</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              We reached here with our hard work and dedication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:w-2/3 max-w-2xl">
            {[
              { 
                number: 2245341, 
                label: "Members",
                icon: "👥",
                color: "from-green-500/10 to-green-600/10"
              },
              { 
                number: 46328, 
                label: "Clubs",
                icon: "🏢",
                color: "from-blue-500/10 to-blue-600/10"
              },
              { 
                number: 828867, 
                label: "Event Bookings",
                trend: "+12.5% from last year",
                icon: "📅",
                color: "from-purple-500/10 to-purple-600/10"
              },
              { 
                number: 1926436, 
                label: "Payments",
                trend: "+23% increase",
                icon: "💳",
                color: "from-orange-500/10 to-orange-600/10"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl 
                  border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300
                  ${index >= 2 ? 'md:translate-y-4' : ''}`}
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-3xl font-bold mb-2"
                >
                  <CountUp end={stat.number} duration={2} separator="," />
                </motion.h3>
                <p className="text-gray-700 font-medium text-lg">{stat.label}</p>
                {stat.trend && (
                  <p className="text-green-600 text-sm font-medium mt-2 flex items-center gap-1">
                    <span>↗</span> {stat.trend}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 