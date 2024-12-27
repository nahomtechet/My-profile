'use client';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, Cloud, Code } from 'lucide-react';

const experiences = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platform',
    description: 'Developed a scalable e-commerce solution using React, Node.js, and MongoDB, improving user engagement by 40%.',
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat Application',
    description: 'Built a real-time chat app with Socket.io and Express, handling 10,000+ concurrent users with minimal latency.',
  },
  {
    icon: Code,
    title: 'API Integration Service',
    description: 'Created a robust API integration service using GraphQL and REST, reducing data fetching time by 60%.',
  },
  {
    icon: Cloud,
    title: 'Cloud-based CMS',
    description: 'Engineered a cloud-based CMS using AWS services and Next.js, improving content delivery speed by 75%.',
  },
];

export default function WorkExperience() {
  return (
    <section id="about" className="bg-[#0b0414] py-16 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-semibold font-['Preahvihear'] text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto overflow-hidden">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl bg-[#1A0B2E] p-6 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative  flex items-start gap-4">
                <div className="flex-shrink-0">
                  <experience.icon size={48} className="text-purple-500" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-white text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
