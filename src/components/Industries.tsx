'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Building2, ShoppingCart, Factory, Smartphone, HeartPulse, 
  Landmark, Truck, Cpu, CheckCircle, Target, Shield, TrendingUp 
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Transforming the future of finance with intelligent automation, risk analytics, and secure digital platforms.',
    gradient: 'from-blue-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=500&fit=crop',
    subIndustries: ['Banking', 'Capital Markets', 'Insurance', 'Private Equity & Investment Firms'],
    services: [
      'Fraud detection & AML models',
      'Algo-trading & quant analytics',
      'Core banking modernization',
      'Risk & compliance automation'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Consumer & Retail',
    description: 'Helping brands deliver smarter, faster and more personalized experiences to their customers.',
    gradient: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    subIndustries: ['Retail', 'Consumer Goods & Services', 'Travel & Hospitality'],
    services: [
      'Demand forecasting & supply chain analytics',
      'Customer personalization engines',
      'Inventory optimization',
      'Digital store experiences (AR/VR)'
    ]
  },
  {
    icon: Factory,
    title: 'Manufacturing, Industrial & Resources',
    description: 'Building intelligent, resilient, and automated ecosystems for heavy industries.',
    gradient: 'from-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    subIndustries: ['Industrial Manufacturing', 'Automotive', 'Aerospace & Defense', 'Chemicals', 'Energy', 'Natural Resources', 'Utilities'],
    services: [
      'Predictive maintenance',
      'Digital twins & IoT solutions',
      'Smart factories',
      'Supply chain optimization',
      'Engineering R&D support'
    ]
  },
  {
    icon: Smartphone,
    title: 'Communications, Media & Technology',
    description: 'Accelerating innovation for tech-first organizations through AI, cloud and next-gen platforms.',
    gradient: 'from-cyan-600 to-blue-600',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    subIndustries: ['Software & Platforms', 'Communications & Media', 'High Tech', 'Gaming & Digital Products'],
    services: [
      'Cloud-native product engineering',
      'AI-powered recommendation engines',
      'Platform modernization',
      'XR/Metaverse experiences'
    ]
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    description: 'Enabling better outcomes through AI-driven care, research automation, and digital platforms.',
    gradient: 'from-pink-600 to-rose-600',
    subIndustries: ['Healthcare Providers', 'Life Sciences', 'Pharmaceuticals', 'Medical Devices'],
    services: [
      'Predictive healthcare analytics',
      'Patient experience platforms',
      'Clinical data automation',
      'Device and diagnostic analytics'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop'
  },
  {
    icon: Landmark,
    title: 'Public Sector & Government',
    description: 'Supporting government modernization with secure, efficient, citizen-focused technology.',
    gradient: 'from-indigo-600 to-purple-600',
    subIndustries: ['Public Service', 'Education', 'US Federal Government'],
    services: [
      'Digital public services',
      'Citizen/beneficiary experience platforms',
      'AI-driven workflows for government operations',
      'Cybersecurity & compliance'
    ],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop'
  },
  {
    icon: Truck,
    title: 'Logistics, Supply Chain & Transportation',
    description: 'Delivering operational excellence through automation, visibility, and real-time insights.',
    gradient: 'from-green-600 to-emerald-600',
    subIndustries: ['Logistics Providers', 'Warehousing', 'Transportation', 'Freight & Distribution'],
    services: [
      'Route optimization',
      'Inventory management',
      'Demand & supply forecasting',
      'Real-time tracking & digital twins'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop'
  },
  {
    icon: Cpu,
    title: 'Emerging Industries & Future Technologies',
    description: 'Helping organizations embrace innovation with strategic use of emerging tech.',
    gradient: 'from-violet-600 to-fuchsia-600',
    subIndustries: ['Metaverse & XR', 'IoT & Smart Devices', 'Robotics & Automation', 'AI Hardware Manufacturing'],
    services: [
      'Metaverse environments',
      'AR/VR experiences',
      'AI device prototyping',
      'Advanced R&D services'
    ],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop'
  },
];

const trustPoints = [
  {
    icon: Target,
    title: 'Deep Industry Expertise',
    description: 'We bring domain-specific knowledge and experience across 20+ sectors.'
  },
  {
    icon: Cpu,
    title: 'AI-first Strategy',
    description: 'We build intelligent solutions tailored to each industry\'s unique challenges.'
  },
  {
    icon: Shield,
    title: 'Scalable & Secure',
    description: 'Enterprise-grade architectures built with security and compliance in mind.'
  },
  {
    icon: TrendingUp,
    title: 'Proven Outcomes',
    description: 'Real-world results: improved forecasting, reduced costs, increased efficiency.'
  }
];

export default function Industries() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="industries" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Driving digital transformation across sectors with AI, cloud, automation, and next-gen technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition-all"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-gray-300 hover:border-black text-black font-semibold rounded transition-all"
            >
              Contact Our Experts
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Industry Categories - 2 Column Layout */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-cyan-500"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden group">
                <Image 
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                {/* Icon overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br ${industry.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <industry.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

              {/* Sub-industries */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Industries Included:</h4>
                <div className="flex flex-wrap gap-2">
                  {industry.subIndustries.map((sub, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What We Do:</h4>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Industries Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Industries Choose Us
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md"
                >
                  <point.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Explore How We Transform Your Industry
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to accelerate your industry transformation? Talk to our experts today and discover how AI, cloud and digital solutions can reshape your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg shadow-md transition-all"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-black font-bold rounded-lg border-2 border-gray-300 hover:border-cyan-500 transition-all"
            >
              Book a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
