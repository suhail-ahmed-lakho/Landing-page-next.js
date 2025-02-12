'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function FeaturesSection() {
  const stats = [
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
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      {/* Who is NextJoint suitable for? */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Manage your entire community
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">in a single system</p>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
          Who is NextJoint suitable for?
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {[
          {
            icon: "/icon.svg",
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments"
          },
          {
            icon: "/icon(1).svg",
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments"
          },
          {
            icon: "/icon(2).svg",
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Image src={feature.icon} alt={feature.title} width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 sm:p-12 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
            >
              Helping a local
              <span className="text-green-500 block">business reinvent itself</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
            >
              We reached here with our hard work and dedication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:w-2/3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 sm:p-8 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl 
                  border border-white/20 shadow hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-2xl sm:text-3xl mb-4">{stat.icon}</div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
                >
                  <CountUp end={stat.number} duration={2} separator="," />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
                {stat.trend && (
                  <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium mt-2 flex items-center gap-1">
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