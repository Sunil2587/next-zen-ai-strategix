'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, TrendingUp, BarChart3, Brain, LineChart, PieChart, Activity, CheckCircle, Building2, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QuantFinanceResearchPage() {
  const service = {
    title: 'Advanced Quant Finance Research & Market Intelligence',
    description: 'Quantitative analysis and market research leveraging AI for superior financial insights',
    fullDescription: 'Leverage cutting-edge quantitative analysis and AI-driven market intelligence to gain a competitive edge in financial markets. Our expert team combines advanced mathematics, machine learning, and deep domain expertise to deliver superior insights.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    industries: [
      'Hedge Funds - Algorithmic Trading & Portfolio Optimization',
      'Investment Banks - Derivative Pricing & Risk Management',
      'Asset Management - Factor Models & Strategy Research',
      'Proprietary Trading - High-Frequency Trading & Market Making'
    ],
    projects: [
      {
        name: 'Algorithmic Trading Strategy',
        description: 'Developed machine learning-based trading signals for equity markets',
        result: 'Sharpe ratio of 2.1 with 15% annual returns'
      },
      {
        name: 'Portfolio Optimization Engine',
        description: 'Built multi-factor risk model for institutional asset manager',
        result: '30% reduction in portfolio volatility'
      },
      {
        name: 'Volatility Forecasting System',
        description: 'Created GARCH-based models for options pricing',
        result: '25% improvement in pricing accuracy'
      }
    ],
    capabilities: [
      'Quantitative Strategy Development',
      'Machine Learning for Finance',
      'Risk Modeling & VaR Analysis',
      'High-Frequency Trading Systems',
      'Alternative Data Integration',
      'Portfolio Analytics & Attribution'
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link href="/#services">
              <motion.button
                className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 mb-8 transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                Back to Services
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-8 h-8 text-cyan-500" />
                <h2 className="text-3xl font-bold text-black">Industries We Serve</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {service.industries.map((industry: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-500 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-8 h-8 text-cyan-500" />
                <h2 className="text-3xl font-bold text-black">Featured Projects</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {service.projects.map((project: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-black mb-3">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs font-semibold text-cyan-600 uppercase">Result</span>
                      <p className="text-sm font-semibold text-black mt-1">{project.result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-black mb-8">Core Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.capabilities.map((capability: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how advanced quantitative finance research can transform your investment strategy
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
