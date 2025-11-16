'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, HeartPulse, GraduationCap, TrendingUp, Users, Rocket } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'AI-powered customer experiences and inventory optimization',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Wellness',
    description: 'Digital health solutions and patient management systems',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description: 'Learning platforms and educational technology solutions',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Startups & SMBs',
    description: 'Scalable tech solutions for growing businesses',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Professional Services',
    description: 'Automation and workflow optimization for service firms',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Rocket,
    title: 'Tech Companies',
    description: 'AI integration and product development support',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function Industries() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="industries" className="py-32 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-full font-semibold text-sm mb-8 text-white"
          >
            <Rocket className="w-4 h-4" />
            <span>Industry Expertise</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
            Industries We <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering diverse sectors with cutting-edge AI and tech solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-all">
                  {industry.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
