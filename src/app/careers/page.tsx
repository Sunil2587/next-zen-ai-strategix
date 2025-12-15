'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, MapPin, Clock, Target, Users, TrendingUp, Award, Heart, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const coreValues = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We push boundaries and embrace cutting-edge technologies to solve complex challenges.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Success comes from diverse perspectives and teamwork across all levels.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Continuous learning and professional development are part of our DNA.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional quality and strive for excellence in everything we do.'
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive healthcare coverage for you and your family'
  },
  {
    icon: Clock,
    title: 'Flexible Work',
    description: 'Remote-friendly culture with flexible hours and hybrid options'
  },
  {
    icon: TrendingUp,
    title: 'Learning & Development',
    description: 'Professional development budget and access to courses & certifications'
  },
  {
    icon: Briefcase,
    title: 'Competitive Pay',
    description: 'Industry-leading compensation with performance bonuses'
  },
  {
    icon: Users,
    title: 'Work-Life Balance',
    description: 'Generous PTO, parental leave, and wellness programs'
  },
  {
    icon: Zap,
    title: 'Career Growth',
    description: 'Clear career paths with opportunities for advancement'
  }
];

const openPositions = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Jersey City, NJ / Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of AI/ML solutions for enterprise clients',
    requirements: [
      'Strong Python and TensorFlow/PyTorch experience',
      'Production ML model deployment',
      'Cloud platforms (AWS/Azure/GCP)',
      'Excellent problem-solving skills'
    ]
  },
  {
    id: 'cloud-solutions-architect',
    title: 'Cloud Solutions Architect',
    department: 'Consulting',
    location: 'Hyderabad, India / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Design and implement cloud infrastructure for clients',
    requirements: [
      'AWS/Azure/GCP certifications',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Microservices architecture experience',
      'Strong client communication skills'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build predictive models and analytics solutions',
    requirements: [
      'Advanced statistics and ML algorithms',
      'Python, R, SQL proficiency',
      'Data visualization (Tableau, Power BI)',
      'Business acumen and stakeholder management'
    ]
  },
  {
    id: 'cybersecurity-consultant',
    title: 'Cybersecurity Consultant',
    department: 'Security',
    location: 'Jersey City, NJ / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Assess and implement security solutions for enterprises',
    requirements: [
      'Security certifications (CISSP, CEH, etc.)',
      'Zero-trust architecture experience',
      'Penetration testing and vulnerability assessment',
      'Security compliance frameworks'
    ]
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    department: 'Consulting',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Bridge technology and business requirements',
    requirements: [
      'Requirements gathering and documentation',
      'Process mapping and optimization',
      'Stakeholder management',
      'Agile/Scrum methodology'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and maintain CI/CD pipelines and infrastructure',
    requirements: [
      'Kubernetes, Docker experience',
      'Jenkins, GitLab CI/CD',
      'Infrastructure automation',
      'Monitoring and logging tools'
    ]
  }
];

export default function CareersPage() {
  const [heroInView, setHeroInView] = useState(false);
  const [valuesInView, setValuesInView] = useState(false);
  const [benefitsInView, setBenefitsInView] = useState(false);
  const [jobsInView, setJobsInView] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (ref: React.RefObject<HTMLDivElement>, setter: (value: boolean) => void) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const observers = [
      createObserver(heroRef, setHeroInView),
      createObserver(valuesRef, setValuesInView),
      createObserver(benefitsRef, setBenefitsInView),
      createObserver(jobsRef, setJobsInView),
    ];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build the Future
              <br />
              <span className="text-cyan-400">With NextZen AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Join a team of innovators transforming businesses through AI and technology
            </p>
            <motion.a
              href="#open-positions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all shadow-lg"
            >
              View Open Positions
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white" ref={valuesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-gray-50" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our people&apos;s success and well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white" ref={jobsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and make an impact
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-cyan-500 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-black mb-2">Key Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500">Experience: {job.experience}</p>
                  </div>
                  <Link href={`/careers/job/${job.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all whitespace-nowrap"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and let&apos;s talk!
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
