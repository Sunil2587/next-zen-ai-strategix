'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const insightsData: any = {
  'future-enterprise-architecture-2025': {
    title: 'The Future of Enterprise Architecture in 2025',
    category: 'Digital Transformation',
    date: 'November 15, 2024',
    readTime: '8 min read',
    author: 'NextZen AI Research Team',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'Enterprise architecture is undergoing a fundamental transformation. As we approach 2025, organizations are reimagining their technology foundations to support unprecedented levels of agility, scale, and innovation.'
      },
      {
        type: 'heading',
        text: 'The Shift to Composable Architecture'
      },
      {
        type: 'paragraph',
        text: 'Traditional monolithic systems are giving way to composable architectures that enable organizations to assemble and reassemble business capabilities on demand. This modular approach allows companies to respond to market changes with unprecedented speed.'
      },
      {
        type: 'paragraph',
        text: 'Key benefits of composable architecture include reduced time-to-market for new features, improved scalability, and the ability to swap components without disrupting the entire system.'
      },
      {
        type: 'heading',
        text: 'AI-Native Design Principles'
      },
      {
        type: 'paragraph',
        text: 'Modern enterprise architecture must be designed with AI capabilities at its core. This means building systems that can collect, process, and learn from data in real-time, enabling intelligent automation and decision-making across the organization.'
      },
      {
        type: 'list',
        items: [
          'Embedded ML models for predictive analytics',
          'Real-time data streaming for instant insights',
          'API-first design for seamless integration',
          'Event-driven architectures for responsive systems'
        ]
      },
      {
        type: 'heading',
        text: 'Security by Design'
      },
      {
        type: 'paragraph',
        text: 'With cyber threats evolving rapidly, security can no longer be an afterthought. Zero-trust architecture, end-to-end encryption, and continuous monitoring are becoming standard requirements for enterprise systems.'
      },
      {
        type: 'heading',
        text: 'Looking Ahead'
      },
      {
        type: 'paragraph',
        text: 'The enterprises that will thrive in 2025 and beyond are those that embrace architectural flexibility, prioritize data and AI capabilities, and maintain unwavering focus on security and user experience.'
      }
    ]
  },
  'implementing-ai-responsibly': {
    title: 'Implementing AI Responsibly: A Framework',
    category: 'AI & Innovation',
    date: 'October 28, 2024',
    readTime: '6 min read',
    author: 'Dr. Sarah Chen, AI Ethics Lead',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'As AI becomes increasingly integrated into business operations, organizations must establish robust frameworks for responsible AI implementation that balance innovation with ethical considerations.'
      },
      {
        type: 'heading',
        text: 'The Pillars of Responsible AI'
      },
      {
        type: 'paragraph',
        text: 'Our framework is built on five fundamental pillars that ensure AI systems are deployed ethically and effectively across your organization.'
      },
      {
        type: 'list',
        items: [
          'Transparency: Clear documentation of AI decision-making processes',
          'Fairness: Regular bias testing and mitigation strategies',
          'Accountability: Defined ownership and governance structures',
          'Privacy: Data protection and user consent mechanisms',
          'Safety: Risk assessment and monitoring protocols'
        ]
      },
      {
        type: 'heading',
        text: 'Governance Framework'
      },
      {
        type: 'paragraph',
        text: 'Establishing an AI governance committee with representation from technology, legal, compliance, and business units ensures diverse perspectives in AI decision-making. This committee should meet regularly to review AI projects, assess risks, and ensure alignment with organizational values.'
      },
      {
        type: 'heading',
        text: 'Practical Implementation Steps'
      },
      {
        type: 'paragraph',
        text: 'Begin with a comprehensive AI audit of existing systems. Identify areas where AI decisions impact customers, employees, or business operations. Develop clear policies for data usage, model training, and deployment approval processes.'
      },
      {
        type: 'paragraph',
        text: 'Create feedback loops that allow stakeholders to report concerns and enable continuous improvement of AI systems. Regular model retraining and bias testing should be part of your standard operating procedures.'
      },
      {
        type: 'heading',
        text: 'Measuring Success'
      },
      {
        type: 'paragraph',
        text: 'Define key performance indicators that go beyond accuracy metrics. Track fairness scores, user trust levels, and compliance adherence. Success in responsible AI means building systems that are not only effective but also trustworthy and aligned with societal values.'
      }
    ]
  },
  'multi-cloud-vs-hybrid-cloud': {
    title: 'Multi-Cloud vs. Hybrid Cloud: Making the Right Choice',
    category: 'Cloud Strategy',
    date: 'October 15, 2024',
    readTime: '10 min read',
    author: 'Michael Rodriguez, Cloud Architecture Director',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'Choosing between multi-cloud and hybrid cloud strategies is one of the most critical decisions facing enterprise IT leaders today. Each approach offers distinct advantages, and the right choice depends on your organization\'s specific needs and constraints.'
      },
      {
        type: 'heading',
        text: 'Understanding the Difference'
      },
      {
        type: 'paragraph',
        text: 'Hybrid cloud combines on-premises infrastructure with public cloud services, while multi-cloud leverages multiple public cloud providers. While these strategies can overlap, understanding their core differences is essential for making informed decisions.'
      },
      {
        type: 'heading',
        text: 'When to Choose Hybrid Cloud'
      },
      {
        type: 'paragraph',
        text: 'Hybrid cloud excels when you have regulatory requirements mandating on-premises data storage, significant existing infrastructure investments, or applications with low latency requirements that benefit from edge computing.'
      },
      {
        type: 'list',
        items: [
          'Regulatory compliance requiring data sovereignty',
          'Legacy systems that cannot be easily migrated',
          'Workloads requiring ultra-low latency',
          'Gradual cloud migration strategy'
        ]
      },
      {
        type: 'heading',
        text: 'The Multi-Cloud Advantage'
      },
      {
        type: 'paragraph',
        text: 'Multi-cloud strategies shine when avoiding vendor lock-in is critical, when you need best-of-breed services from different providers, or when geographic distribution across providers improves resilience.'
      },
      {
        type: 'list',
        items: [
          'Vendor lock-in avoidance',
          'Access to specialized services from multiple providers',
          'Geographic redundancy and disaster recovery',
          'Cost optimization through provider competition'
        ]
      },
      {
        type: 'heading',
        text: 'Managing Complexity'
      },
      {
        type: 'paragraph',
        text: 'Both strategies introduce complexity. Hybrid cloud requires managing multiple environments and ensuring seamless integration. Multi-cloud demands expertise across different provider ecosystems and robust orchestration tools.'
      },
      {
        type: 'paragraph',
        text: 'Success requires investment in cloud management platforms, automation tools, and team training. Consider starting with a focused approach and expanding gradually as your organization builds capability.'
      },
      {
        type: 'heading',
        text: 'Making Your Decision'
      },
      {
        type: 'paragraph',
        text: 'Evaluate your current infrastructure, compliance requirements, team capabilities, and business objectives. Many organizations find that a hybrid approach that incorporates elements of both strategies provides the optimal balance of flexibility, control, and innovation.'
      }
    ]
  },
  'zero-trust-security': {
    title: 'Zero Trust Security in Modern Enterprises',
    category: 'Cybersecurity',
    date: 'September 30, 2024',
    readTime: '7 min read',
    author: 'James Patterson, Chief Security Officer',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'The traditional security model of "trust but verify" is no longer sufficient in today\'s threat landscape. Zero trust architecture represents a paradigm shift in how enterprises approach cybersecurity.'
      },
      {
        type: 'heading',
        text: 'The Zero Trust Principle'
      },
      {
        type: 'paragraph',
        text: 'Zero trust operates on the principle of "never trust, always verify." Every access request, whether from inside or outside the network perimeter, must be authenticated, authorized, and continuously validated before granting access to resources.'
      },
      {
        type: 'heading',
        text: 'Core Components'
      },
      {
        type: 'paragraph',
        text: 'A comprehensive zero trust architecture includes several interconnected components that work together to create a robust security posture.'
      },
      {
        type: 'list',
        items: [
          'Identity and Access Management (IAM) with multi-factor authentication',
          'Micro-segmentation to limit lateral movement',
          'Continuous monitoring and analytics',
          'Least privilege access controls',
          'Device health verification',
          'Encrypted communications'
        ]
      },
      {
        type: 'heading',
        text: 'Implementation Strategy'
      },
      {
        type: 'paragraph',
        text: 'Implementing zero trust is a journey, not a destination. Start by identifying your most critical assets and implementing controls around them. Gradually expand coverage while maintaining business continuity.'
      },
      {
        type: 'paragraph',
        text: 'Begin with identity verification, then layer in device trust, network segmentation, and finally comprehensive monitoring. Each phase builds on the previous one, creating an increasingly robust security posture.'
      },
      {
        type: 'heading',
        text: 'Benefits Beyond Security'
      },
      {
        type: 'paragraph',
        text: 'While security is the primary driver, zero trust delivers additional benefits. Improved visibility into network traffic, better compliance documentation, and enhanced user experience through seamless secure access all contribute to business value.'
      },
      {
        type: 'heading',
        text: 'Overcoming Challenges'
      },
      {
        type: 'paragraph',
        text: 'Common challenges include legacy system integration, user training, and initial complexity. Success requires executive sponsorship, phased implementation, and clear communication about the benefits to all stakeholders.'
      },
      {
        type: 'paragraph',
        text: 'Organizations that successfully implement zero trust report significant reductions in security incidents, faster threat detection, and improved compliance posture. The investment in zero trust architecture pays dividends in risk reduction and operational resilience.'
      }
    ]
  }
};

export default function InsightDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const insight = insightsData[slug];

  if (!insight) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/#insights" className="text-cyan-400 hover:text-cyan-300">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#insights"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Insights
            </Link>

            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
                {insight.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {insight.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{insight.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {insight.author}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {insight.content.map((block: any, index: number) => {
                if (block.type === 'intro') {
                  return (
                    <p key={index} className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                      {block.text}
                    </p>
                  );
                }
                
                if (block.type === 'heading') {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-black mt-12 mb-6">
                      {block.text}
                    </h2>
                  );
                }
                
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                }
                
                if (block.type === 'list') {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-3 mb-6 text-gray-700">
                      {block.items.map((item: string, i: number) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  );
                }
                
                return null;
              })}
            </motion.article>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black">Share this article</h3>
                <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 p-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Want to Learn More?
              </h3>
              <p className="text-white/90 mb-6">
                Get in touch with our experts to discuss how we can help transform your business
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
