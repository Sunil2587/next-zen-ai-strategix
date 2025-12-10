'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Building2, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const serviceData: any = {
  'ai-strategy-consulting': {
    title: 'AI Strategy & Consulting',
    description: 'Transform your business with strategic AI implementation and expert consulting services',
    fullDescription: 'Our AI Strategy & Consulting services help organizations harness the full potential of artificial intelligence. We work closely with your leadership team to develop comprehensive AI roadmaps, identify high-value use cases, and ensure successful implementation that delivers measurable business outcomes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    industries: [
      'Financial Services - Risk Analytics & Fraud Detection',
      'Healthcare - Predictive Diagnostics & Patient Care',
      'Manufacturing - Quality Control & Predictive Maintenance',
      'Retail - Customer Behavior Analytics & Personalization'
    ],
    projects: [
      {
        name: 'Enterprise AI Roadmap Development',
        description: 'Created comprehensive 3-year AI transformation strategy for Fortune 500 financial institution',
        result: '40% improvement in decision-making speed'
      },
      {
        name: 'AI Readiness Assessment',
        description: 'Evaluated data infrastructure and team capabilities for healthcare provider network',
        result: 'Identified $2M+ in efficiency opportunities'
      },
      {
        name: 'Use Case Prioritization',
        description: 'Developed ROI framework and prioritized 15+ AI opportunities for manufacturing client',
        result: '3 high-value projects launched in 6 months'
      }
    ],
    capabilities: [
      'AI Maturity Assessment',
      'Strategic Roadmap Development',
      'Use Case Identification & Prioritization',
      'ROI & Business Case Development',
      'Data Strategy & Governance',
      'Change Management & Training'
    ]
  },
  'data-science-analytics': {
    title: 'Data Science & Analytics',
    description: 'Unlock insights and drive data-driven decision making with advanced analytics',
    fullDescription: 'Our Data Science & Analytics practice helps organizations transform raw data into actionable insights. We employ cutting-edge machine learning, statistical modeling, and visualization techniques to solve complex business problems and create competitive advantages.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    industries: [
      'Financial Services - Algorithmic Trading & Risk Modeling',
      'E-commerce - Customer Lifetime Value & Churn Prediction',
      'Healthcare - Clinical Analytics & Treatment Optimization',
      'Telecommunications - Network Optimization & Customer Analytics'
    ],
    projects: [
      {
        name: 'Predictive Maintenance System',
        description: 'Built ML models to predict equipment failures for industrial manufacturer',
        result: '60% reduction in unplanned downtime'
      },
      {
        name: 'Customer Segmentation Engine',
        description: 'Developed advanced clustering models for retail client with 10M+ customers',
        result: '25% increase in marketing ROI'
      },
      {
        name: 'Demand Forecasting Platform',
        description: 'Created ensemble forecasting models for supply chain optimization',
        result: '35% reduction in inventory costs'
      }
    ],
    capabilities: [
      'Predictive Modeling & Machine Learning',
      'Statistical Analysis & Hypothesis Testing',
      'Data Visualization & Dashboarding',
      'Customer Analytics & Segmentation',
      'A/B Testing & Experimentation',
      'Real-time Analytics Platforms'
    ]
  },
  'cloud-ai-infrastructure': {
    title: 'Cloud AI & Infrastructure',
    description: 'Scale your business with optimized cloud infrastructure and AI platforms',
    fullDescription: 'We design and implement scalable, secure cloud architectures that enable AI and data-intensive workloads. Our expertise spans AWS, Azure, and GCP, ensuring your infrastructure is optimized for performance, cost, and reliability.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    industries: [
      'Technology - SaaS Platforms & DevOps',
      'Financial Services - Secure Cloud Migration',
      'Healthcare - HIPAA-Compliant Infrastructure',
      'Media & Entertainment - Content Delivery Networks'
    ],
    projects: [
      {
        name: 'Multi-Cloud Migration',
        description: 'Migrated enterprise applications to AWS with zero downtime',
        result: '45% reduction in infrastructure costs'
      },
      {
        name: 'AI Model Deployment Pipeline',
        description: 'Built MLOps platform for automated model training and deployment',
        result: '10x faster model deployment cycles'
      },
      {
        name: 'Hybrid Cloud Architecture',
        description: 'Designed secure hybrid infrastructure connecting on-premise and cloud resources',
        result: '99.99% uptime SLA achieved'
      }
    ],
    capabilities: [
      'Cloud Architecture Design',
      'Multi-Cloud & Hybrid Solutions',
      'Containerization & Kubernetes',
      'CI/CD Pipeline Development',
      'Infrastructure as Code (Terraform)',
      'Cloud Cost Optimization'
    ]
  },
  'robotic-process-automation': {
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks and boost operational efficiency',
    fullDescription: 'Our RPA solutions eliminate manual, repetitive tasks, allowing your team to focus on high-value work. We implement intelligent automation that combines RPA with AI to handle complex workflows and decision-making processes.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
    industries: [
      'Banking - Transaction Processing & Compliance',
      'Insurance - Claims Processing & Policy Administration',
      'Healthcare - Medical Billing & Records Management',
      'Human Resources - Employee Onboarding & Payroll'
    ],
    projects: [
      {
        name: 'Invoice Processing Automation',
        description: 'Automated end-to-end accounts payable process for manufacturing company',
        result: '80% reduction in processing time'
      },
      {
        name: 'Customer Onboarding Bot',
        description: 'Developed intelligent bot for financial services client onboarding',
        result: '70% faster onboarding, 95% accuracy'
      },
      {
        name: 'Report Generation System',
        description: 'Automated daily/weekly reporting across multiple systems',
        result: 'Saved 200+ hours monthly'
      }
    ],
    capabilities: [
      'Process Discovery & Assessment',
      'Bot Development (UiPath, Automation Anywhere)',
      'Intelligent Document Processing',
      'Workflow Orchestration',
      'Exception Handling & Monitoring',
      'Hyperautomation Strategy'
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions',
    fullDescription: 'Our cybersecurity practice provides end-to-end security services to protect your organization from evolving digital threats. We implement defense-in-depth strategies, conduct thorough assessments, and ensure compliance with industry regulations.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    industries: [
      'Financial Services - Fraud Prevention & Compliance',
      'Healthcare - HIPAA Security & Data Protection',
      'Government - Zero Trust Architecture',
      'E-commerce - PCI DSS Compliance & Payment Security'
    ],
    projects: [
      {
        name: 'Zero Trust Implementation',
        description: 'Deployed comprehensive zero trust security framework for enterprise client',
        result: '90% reduction in security incidents'
      },
      {
        name: 'Security Operations Center (SOC)',
        description: 'Established 24/7 SOC with SIEM and threat intelligence',
        result: 'Mean time to detect reduced to under 5 minutes'
      },
      {
        name: 'Penetration Testing & Remediation',
        description: 'Conducted security assessment and fixed critical vulnerabilities',
        result: 'Achieved SOC 2 Type II certification'
      }
    ],
    capabilities: [
      'Security Assessment & Auditing',
      'Penetration Testing & Vulnerability Management',
      'Security Architecture & Design',
      'Identity & Access Management (IAM)',
      'Security Operations (SOC)',
      'Incident Response & Forensics'
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    description: 'Build robust data pipelines for efficient processing and utilization',
    fullDescription: 'We design and implement scalable data architectures that enable efficient data collection, processing, and storage. Our data engineering solutions ensure your organization has reliable, high-quality data available for analytics and AI applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    industries: [
      'Financial Services - Real-time Trading Data',
      'E-commerce - Customer & Transaction Data',
      'Healthcare - Clinical & Research Data',
      'IoT & Manufacturing - Sensor Data Processing'
    ],
    projects: [
      {
        name: 'Real-time Data Pipeline',
        description: 'Built streaming data pipeline processing 1M+ events per second',
        result: 'Sub-second data latency achieved'
      },
      {
        name: 'Data Lake Implementation',
        description: 'Designed and deployed enterprise data lake on AWS',
        result: 'Unified access to 50+ data sources'
      },
      {
        name: 'ETL Modernization',
        description: 'Migrated legacy ETL processes to cloud-native architecture',
        result: '75% faster data processing'
      }
    ],
    capabilities: [
      'Data Pipeline Development',
      'ETL/ELT Process Design',
      'Data Lake & Warehouse Architecture',
      'Real-time Streaming (Kafka, Kinesis)',
      'Data Quality & Governance',
      'Big Data Technologies (Spark, Hadoop)'
    ]
  },
  'software-development': {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    fullDescription: 'Our software development team builds high-performance, scalable applications using modern technologies and best practices. We deliver custom solutions that solve complex business challenges and provide exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    industries: [
      'Technology - SaaS Products & Platforms',
      'Healthcare - Patient Management Systems',
      'Financial Services - Trading & Banking Applications',
      'Retail - E-commerce & POS Systems'
    ],
    projects: [
      {
        name: 'Enterprise SaaS Platform',
        description: 'Developed multi-tenant SaaS application serving 10K+ users',
        result: '99.9% uptime, 500ms response time'
      },
      {
        name: 'Mobile Banking Application',
        description: 'Built secure mobile app with biometric authentication',
        result: '4.8 star rating, 1M+ downloads'
      },
      {
        name: 'E-commerce Marketplace',
        description: 'Created scalable marketplace platform handling 100K+ daily transactions',
        result: '40% increase in conversion rate'
      }
    ],
    capabilities: [
      'Full-Stack Web Development',
      'Mobile App Development (iOS/Android)',
      'Microservices Architecture',
      'API Design & Development',
      'DevOps & Continuous Deployment',
      'Quality Assurance & Testing'
    ]
  },
  'salesforce-services': {
    title: 'Salesforce Services',
    description: 'Maximize your CRM potential with comprehensive Salesforce solutions',
    fullDescription: 'We provide end-to-end Salesforce services including implementation, customization, integration, and optimization. Our certified Salesforce experts help you leverage the full power of the platform to improve customer relationships and drive growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    industries: [
      'Financial Services - Wealth Management CRM',
      'Healthcare - Patient Relationship Management',
      'Technology - Sales & Marketing Automation',
      'Professional Services - Client Management'
    ],
    projects: [
      {
        name: 'Sales Cloud Implementation',
        description: 'Deployed Salesforce Sales Cloud for 500+ user organization',
        result: '35% increase in sales productivity'
      },
      {
        name: 'Custom Lightning Components',
        description: 'Built custom UI components for industry-specific workflows',
        result: '50% reduction in data entry time'
      },
      {
        name: 'Marketing Cloud Integration',
        description: 'Integrated Marketing Cloud with existing systems for unified view',
        result: '60% improvement in campaign ROI'
      }
    ],
    capabilities: [
      'Salesforce Implementation',
      'Custom Development (Apex, Lightning)',
      'System Integration & Data Migration',
      'Business Process Automation',
      'Salesforce Analytics & Reporting',
      'Training & Change Management'
    ]
  },
  'consulting-services': {
    title: 'Consulting & Outsourcing Services',
    description: 'Strategic consulting and flexible outsourcing solutions',
    fullDescription: 'Our consulting services help organizations navigate complex technology decisions and transformations. We provide strategic guidance, implementation support, and flexible outsourcing models including staff augmentation and project-based delivery.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    industries: [
      'Technology - Digital Transformation',
      'Financial Services - IT Strategy',
      'Healthcare - Technology Advisory',
      'Manufacturing - Industry 4.0 Consulting'
    ],
    projects: [
      {
        name: 'Digital Transformation Strategy',
        description: 'Developed comprehensive transformation roadmap for retail chain',
        result: '$5M+ in identified savings'
      },
      {
        name: 'Staff Augmentation Program',
        description: 'Provided skilled technology resources for Fortune 500 client',
        result: '20+ resources, 95% retention rate'
      },
      {
        name: 'Technology Modernization',
        description: 'Led legacy system replacement for financial services firm',
        result: 'On-time, on-budget delivery'
      }
    ],
    capabilities: [
      'IT Strategy & Advisory',
      'Digital Transformation',
      'Staff Augmentation',
      'Project-Based Delivery',
      'Technology Assessment',
      'Vendor Selection & Management'
    ]
  },
  'talent-management': {
    title: 'Talent Management',
    description: 'Attract, develop, and retain top technology talent',
    fullDescription: 'Our talent management services help organizations build and nurture high-performing technology teams. We provide end-to-end talent solutions including recruitment, training, performance management, and retention strategies.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    industries: [
      'Technology - Tech Talent Acquisition',
      'Financial Services - Specialized IT Recruitment',
      'Consulting - Team Building & Development',
      'Startups - Rapid Team Scaling'
    ],
    projects: [
      {
        name: 'Technical Recruitment Program',
        description: 'Hired 50+ software engineers in 6 months for scaling startup',
        result: '90-day retention: 98%'
      },
      {
        name: 'Leadership Development',
        description: 'Created training program for emerging technology leaders',
        result: '80% promotion rate within 2 years'
      },
      {
        name: 'Workforce Planning',
        description: 'Developed 3-year talent strategy for enterprise transformation',
        result: 'Reduced time-to-hire by 40%'
      }
    ],
    capabilities: [
      'Technical Recruitment',
      'Skill Assessment & Training',
      'Performance Management',
      'Succession Planning',
      'Team Building & Culture',
      'Compensation Strategy'
    ]
  },
  'business-intelligence': {
    title: 'Business Intelligence (BI) Tools',
    description: 'Transform data into actionable insights for better decision-making',
    fullDescription: 'We implement and optimize business intelligence solutions that empower organizations to make data-driven decisions. Our BI services include dashboard development, report automation, and self-service analytics platforms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    industries: [
      'Retail - Sales & Inventory Analytics',
      'Financial Services - Financial Reporting',
      'Healthcare - Clinical & Operational Dashboards',
      'Manufacturing - Production & Quality Metrics'
    ],
    projects: [
      {
        name: 'Executive Dashboard Suite',
        description: 'Built real-time dashboards for C-suite with 50+ KPIs',
        result: 'Reduced reporting time by 90%'
      },
      {
        name: 'Self-Service Analytics Platform',
        description: 'Implemented Tableau environment for 500+ business users',
        result: '70% reduction in ad-hoc report requests'
      },
      {
        name: 'Automated Reporting System',
        description: 'Created automated daily/weekly reporting with email distribution',
        result: 'Eliminated 100+ hours of manual work monthly'
      }
    ],
    capabilities: [
      'Dashboard & Visualization Development',
      'Report Automation',
      'Self-Service Analytics',
      'Data Modeling & ETL',
      'BI Tool Implementation (Tableau, Power BI)',
      'KPI Framework Design'
    ]
  },
  'research-development': {
    title: 'Research & Development',
    description: 'Drive innovation through cutting-edge R&D in AI, ML, and emerging technologies',
    fullDescription: 'Our Research & Development services focus on exploring and implementing breakthrough technologies that give your organization a competitive edge. We conduct applied research in artificial intelligence, machine learning, blockchain, and quantum computing to solve complex business challenges and create new opportunities for growth.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop',
    industries: [
      'Technology - Product Innovation & IP Development',
      'Pharmaceuticals - Drug Discovery & Clinical Research',
      'Automotive - Autonomous Systems & Smart Mobility',
      'Energy - Clean Tech & Sustainability Solutions'
    ],
    projects: [
      {
        name: 'AI-Powered Drug Discovery Platform',
        description: 'Developed ML models to accelerate pharmaceutical compound screening',
        result: 'Reduced discovery time by 60%'
      },
      {
        name: 'Autonomous Vehicle Perception System',
        description: 'Created computer vision models for real-time object detection and tracking',
        result: 'Achieved 99.7% accuracy in testing'
      },
      {
        name: 'Quantum Algorithm for Optimization',
        description: 'Designed quantum computing solution for supply chain logistics',
        result: '35% improvement in route optimization'
      }
    ],
    capabilities: [
      'Applied AI/ML Research',
      'Proof of Concept Development',
      'Patent & IP Strategy',
      'Emerging Technology Assessment',
      'Innovation Labs & Workshops',
      'Academic & Industry Partnerships'
    ]
  },
  'procurement-services': {
    title: 'Procurement Services',
    description: 'Strategic sourcing and vendor management to optimize costs and improve efficiency',
    fullDescription: 'Our Procurement Services help organizations transform their purchasing operations through strategic sourcing, vendor management, and digital procurement solutions. We combine industry expertise with advanced analytics to reduce costs, mitigate risks, and build resilient supplier relationships that drive competitive advantage.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    industries: [
      'Manufacturing - Raw Materials & Component Sourcing',
      'Healthcare - Medical Equipment & Supplies',
      'Retail - Merchandise & Inventory Management',
      'Technology - Hardware & Software Procurement'
    ],
    projects: [
      {
        name: 'Strategic Sourcing Transformation',
        description: 'Redesigned procurement processes for global manufacturer',
        result: '22% cost reduction across $500M spend'
      },
      {
        name: 'Supplier Consolidation Program',
        description: 'Rationalized vendor base from 2,000 to 600 suppliers',
        result: '$15M annual savings and improved quality'
      },
      {
        name: 'Digital Procurement Platform',
        description: 'Implemented e-procurement system with AI-powered spend analytics',
        result: '40% faster procurement cycle time'
      }
    ],
    capabilities: [
      'Strategic Sourcing & Category Management',
      'Supplier Relationship Management',
      'Contract Negotiation & Management',
      'Spend Analytics & Savings Tracking',
      'E-Procurement & P2P Automation',
      'Risk Management & Compliance'
    ]
  },
  'supply-chain-management': {
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain optimization for resilience and operational excellence',
    fullDescription: 'Our Supply Chain Management services deliver comprehensive solutions for planning, execution, and optimization across your entire supply network. We leverage advanced analytics, AI, and industry best practices to build agile, resilient supply chains that reduce costs, improve service levels, and create sustainable competitive advantage.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    industries: [
      'Retail - Omnichannel Fulfillment & Inventory',
      'Manufacturing - Production Planning & Logistics',
      'E-commerce - Last-Mile Delivery & Warehousing',
      'Pharmaceuticals - Cold Chain & Distribution'
    ],
    projects: [
      {
        name: 'Supply Chain Network Optimization',
        description: 'Redesigned distribution network for national retailer',
        result: '30% reduction in transportation costs'
      },
      {
        name: 'Demand Forecasting with AI',
        description: 'Implemented ML-based forecasting system for CPG company',
        result: '45% improvement in forecast accuracy'
      },
      {
        name: 'Warehouse Automation',
        description: 'Deployed robotics and WMS for e-commerce fulfillment center',
        result: '3x increase in throughput capacity'
      }
    ],
    capabilities: [
      'Supply Chain Strategy & Design',
      'Demand Planning & Forecasting',
      'Inventory Optimization',
      'Transportation & Logistics Management',
      'Warehouse & Distribution Operations',
      'Supply Chain Analytics & Control Tower'
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/#services" className="text-cyan-400 hover:text-cyan-300">
            Return to Services
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)'
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
              </div>
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
              Let&apos;s discuss how {service.title.toLowerCase()} can transform your business
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
