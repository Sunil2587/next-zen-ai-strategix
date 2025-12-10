'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, TrendingDown, Users, BarChart3, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

const procurementServices = [
  {
    icon: ShoppingCart,
    title: 'Strategic Sourcing',
    description: 'Optimize supplier selection and negotiate better terms to reduce costs and improve quality.',
    benefits: ['Cost reduction up to 20%', 'Supplier consolidation', 'Risk mitigation']
  },
  {
    icon: TrendingDown,
    title: 'Cost Optimization',
    description: 'Identify savings opportunities through spend analysis and process improvements.',
    benefits: ['Spend visibility', 'Budget control', 'Waste elimination']
  },
  {
    icon: Users,
    title: 'Vendor Management',
    description: 'Build and maintain strong supplier relationships for better performance and innovation.',
    benefits: ['Performance tracking', 'Contract management', 'Collaboration tools']
  },
  {
    icon: BarChart3,
    title: 'Procurement Analytics',
    description: 'Leverage data insights to make informed purchasing decisions and forecast needs.',
    benefits: ['Real-time dashboards', 'Predictive analytics', 'ROI tracking']
  },
  {
    icon: Shield,
    title: 'Compliance & Risk',
    description: 'Ensure regulatory compliance and mitigate supply chain risks effectively.',
    benefits: ['Audit trails', 'Policy enforcement', 'Risk assessment']
  },
  {
    icon: Zap,
    title: 'Digital Procurement',
    description: 'Modernize procurement with automation, AI, and cloud-based solutions.',
    benefits: ['E-procurement platforms', 'AI-powered insights', 'Mobile access']
  }
];

const procurementStats = [
  { value: '30%', label: 'Average Cost Savings' },
  { value: '50%', label: 'Process Efficiency Gain' },
  { value: '98%', label: 'Compliance Rate' },
  { value: '24/7', label: 'Digital Access' }
];

export default function Procurement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="procurement" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDZiNmQ0IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Procurement Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your procurement function with strategic solutions that drive cost savings,
            efficiency, and supply chain resilience
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {procurementStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {procurementServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Procurement?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you optimize costs, improve efficiency, and build a resilient supply chain
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
