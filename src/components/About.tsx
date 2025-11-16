'use client';

import { motion } from 'framer-motion';
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
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Next Zen AI Strategix?
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            As a dynamic startup, we combine innovative AI solutions with practical execution. Our agile approach ensures you get cutting-edge technology tailored to your business needs, delivered with the speed and flexibility only a startup can offer.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-sm text-gray-400 mt-1">
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
