'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const insights = [
  {
    category: 'Digital Transformation',
    title: 'The Future of Enterprise Architecture in 2025',
    description: 'Exploring how modern architecture patterns are reshaping enterprise technology landscapes.',
    date: 'Nov 2024',
    readTime: '8 min read',
    image: 'bg-gradient-to-br from-blue-600 to-indigo-600',
  },
  {
    category: 'AI & Innovation',
    title: 'Implementing AI Responsibly: A Framework',
    description: 'Best practices for deploying AI solutions while maintaining ethical standards and governance.',
    date: 'Oct 2024',
    readTime: '6 min read',
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
  {
    category: 'Cloud Strategy',
    title: 'Multi-Cloud vs. Hybrid Cloud: Making the Right Choice',
    description: 'Strategic considerations for choosing the optimal cloud architecture for your organization.',
    date: 'Oct 2024',
    readTime: '10 min read',
    image: 'bg-gradient-to-br from-cyan-600 to-blue-600',
  },
  {
    category: 'Cybersecurity',
    title: 'Zero Trust Security in Modern Enterprises',
    description: 'How zero trust architecture is becoming the new standard for enterprise security.',
    date: 'Sep 2024',
    readTime: '7 min read',
    image: 'bg-gradient-to-br from-green-600 to-emerald-600',
  },
];

export default function Insights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="insights" className="py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full font-semibold text-sm mb-6 border border-blue-400/30">
            <TrendingUp size={16} />
            <span>Thought Leadership</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
            Latest <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Perspectives on technology trends, innovation, and 
            <span className="text-blue-400 font-semibold"> digital transformation</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Image/Gradient Header with Icon */}
              <div className={`relative h-56 ${insight.image} flex items-center justify-center p-8 overflow-hidden`}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                <div className="relative text-white text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg"
                  >
                    <TrendingUp size={40} />
                  </motion.div>
                  <div className="text-sm font-bold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                    {insight.category}
                  </div>
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors leading-tight">
                  {insight.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{insight.date}</span>
                    </div>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 group/btn"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
          >
            View All Insights
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
