'use client';

import { motion } from 'framer-motion';
import { Check, DollarSign, Zap } from 'lucide-react';

const caseStudies = [
  {
    icon: Zap,
    metric: '3x',
    label: 'Faster Time-to-Market',
    description: 'Agile development approach',
  },
  {
    icon: DollarSign,
    metric: '40%',
    label: 'Cost Savings',
    description: 'Smart automation solutions',
  },
  {
    icon: Check,
    metric: '100%',
    label: 'Client Satisfaction',
    description: 'Personalized service',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between text-white text-sm mb-4"
                >
                  <span>Success Metrics</span>
                  <span className="text-gray-400">Startup Performance</span>
                </motion.div>
              </div>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 300 150">
                  <motion.path
                    d="M 0 75 Q 75 25, 150 75 T 300 75"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success Metrics</h3>
              <p className="text-gray-600 text-sm mb-4">Startup Performance</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Impact</h2>
              <div className="space-y-6">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <study.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-gray-900">{study.metric}</span>
                        <span className="text-lg font-semibold text-gray-900">{study.label}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{study.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
