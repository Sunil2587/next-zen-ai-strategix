'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Cloud, Shield, Cog, Lock, Database, Code, Briefcase, Users, BarChart3, CircuitBoard } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'AI Strategy & Consulting',
    description: 'Harness the full potential of AI with strategies aligned with your business needs',
    gradient: 'from-blue-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
    slug: 'ai-strategy-consulting',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    description: 'Analyze your data to uncover actionable insights for smarter decision-making',
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    slug: 'data-science-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    icon: Cloud,
    title: 'Cloud AI & Infrastructure',
    description: 'Scale your business by optimizing infrastructure and improving efficiency',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    slug: 'cloud-ai-infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    icon: Cog,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks, reducing manual work and operational costs',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    slug: 'robotic-process-automation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Protect your business from evolving digital threats with comprehensive security solutions',
    gradient: 'from-red-500 to-orange-500',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
    slug: 'cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines enabling efficient storage, processing, and utilization',
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    slug: 'data-engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software tailored to your needs, delivering high-performance applications',
    gradient: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    slug: 'software-development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  },
  {
    icon: CircuitBoard,
    title: 'Salesforce Services',
    description: 'Unlock CRM potential with end-to-end implementation, customization, and support',
    gradient: 'from-blue-600 to-cyan-600',
    iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    slug: 'salesforce-services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    icon: Briefcase,
    title: 'Consulting & Outsourcing Services',
    description: 'Outsourcing & recruitment solutions including IT consulting and RPO services',
    gradient: 'from-purple-600 to-pink-600',
    iconBg: 'bg-gradient-to-br from-purple-600 to-pink-600',
    slug: 'consulting-services',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    icon: Users,
    title: 'Talent Management',
    description: 'Attract, develop, and retain top talent aligned with your organizational goals',
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    slug: 'talent-management',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence (BI) Tools',
    description: 'Transform data into actionable insights for better decision-making and planning',
    gradient: 'from-teal-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    slug: 'business-intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">
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
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to accelerate your business growth
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
              <Link 
                key={index}
                href={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group h-full"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-cyan-500 h-full flex flex-col cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Icon overlay */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute bottom-4 left-4 w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-cyan-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    
                      {/* View Details Indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="text-cyan-600 text-sm font-semibold group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
