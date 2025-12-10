'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const insights = [
  {
    category: 'Digital Transformation',
    title: 'The Future of Enterprise Architecture in 2025',
    description: 'Exploring how modern architecture patterns are reshaping enterprise technology landscapes.',
    date: 'Nov 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    slug: 'future-enterprise-architecture-2025',
  },
  {
    category: 'AI & Innovation',
    title: 'Implementing AI Responsibly: A Framework',
    description: 'Best practices for deploying AI solutions while maintaining ethical standards and governance.',
    date: 'Oct 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    slug: 'implementing-ai-responsibly',
  },
  {
    category: 'Cloud Strategy',
    title: 'Multi-Cloud vs. Hybrid Cloud: Making the Right Choice',
    description: 'Strategic considerations for choosing the optimal cloud architecture for your organization.',
    date: 'Oct 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    slug: 'multi-cloud-vs-hybrid-cloud',
  },
  {
    category: 'Cybersecurity',
    title: 'Zero Trust Security in Modern Enterprises',
    description: 'How zero trust architecture is becoming the new standard for enterprise security.',
    date: 'Sep 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
    slug: 'zero-trust-security',
  },
];

export default function Insights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="insights" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            What We Think
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perspectives on technology trends, innovation, and digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white border border-gray-200 rounded-lg hover:border-cyan-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                    {insight.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-cyan-600 transition-colors leading-tight">
                  {insight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{insight.date}</span>
                    </div>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>

                  <motion.a
                    href={`/insights/${insight.slug}`}
                    whileHover={{ x: 5 }}
                    className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition-all"
          >
            View All Insights
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
