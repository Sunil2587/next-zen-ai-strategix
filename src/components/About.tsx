'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Code, Headphones } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: 'Innovative Solutions',
    description: 'Fresh perspectives and cutting-edge approaches',
  },
  {
    icon: Zap,
    title: 'Agile & Fast',
    description: 'Quick turnaround with startup agility',
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'Latest AI and cloud technologies',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personalized attention to your needs',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        style={{ rotate, scale }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed"
          >
            We&apos;re a forward-thinking technology partner delivering enterprise-grade AI solutions with the agility and innovation that drives business transformation. Our mission is to make cutting-edge technology accessible and practical for organizations of all sizes.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
