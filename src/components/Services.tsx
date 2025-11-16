'use client';

import { motion } from 'framer-motion';
import { Box, Cloud, Shield, Cog, Lock, Database, Code, Briefcase, Users, BarChart3, CircuitBoard } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'AI Strategy & Consulting',
    description: 'Harness the full potential of AI with strategies aligned with your business needs',
    gradient: 'from-blue-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    description: 'Analyze your data to uncover actionable insights for smarter decision-making',
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud AI & Infrastructure',
    description: 'Scale your business by optimizing infrastructure and improving efficiency',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    icon: Cog,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks, reducing manual work and operational costs',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Protect your business from evolving digital threats with comprehensive security solutions',
    gradient: 'from-red-500 to-orange-500',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines enabling efficient storage, processing, and utilization',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software tailored to your needs, delivering high-performance applications',
    gradient: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
  },
  {
    icon: CircuitBoard,
    title: 'Salesforce Services',
    description: 'Unlock CRM potential with end-to-end implementation, customization, and support',
    gradient: 'from-blue-600 to-cyan-600',
    iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-600',
  },
  {
    icon: Briefcase,
    title: 'Consulting Services',
    description: 'Outsourcing & recruitment solutions including IT consulting and RPO services',
    gradient: 'from-purple-600 to-pink-600',
    iconBg: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
  {
    icon: Users,
    title: 'Talent Management',
    description: 'Attract, develop, and retain top talent aligned with your organizational goals',
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence (BI) Tools',
    description: 'Transform data into actionable insights for better decision-making and planning',
    gradient: 'from-teal-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
