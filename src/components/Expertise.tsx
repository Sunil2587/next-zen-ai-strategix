'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
  { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
  { name: 'Python', level: 92, color: 'from-yellow-500 to-orange-500' },
  { name: 'AWS', level: 88, color: 'from-orange-500 to-red-500' },
  { name: 'Azure', level: 85, color: 'from-blue-500 to-indigo-500' },
  { name: 'TensorFlow', level: 87, color: 'from-purple-500 to-pink-500' },
  { name: 'Docker', level: 90, color: 'from-blue-600 to-cyan-600' },
  { name: 'Kubernetes', level: 83, color: 'from-indigo-500 to-purple-500' },
];

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Our Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastery in the latest technologies and frameworks to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">{tech.name}</span>
                <span className="text-gray-600">{tech.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${tech.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full shadow-lg`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
