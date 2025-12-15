'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

const jobsData = {
  'senior-ai-engineer': {
    id: 'senior-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Jersey City, NJ / Remote',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$140,000 - $180,000',
    description: 'Lead development of AI/ML solutions for enterprise clients',
    longDescription: 'We are seeking an experienced Senior AI Engineer to join our growing team. You will lead the development of cutting-edge AI/ML solutions that transform how our enterprise clients operate. This role offers the opportunity to work on challenging problems across various industries, from healthcare to finance, using the latest AI technologies.',
    responsibilities: [
      'Design and develop advanced AI/ML models for production environments',
      'Lead technical discussions and provide mentorship to junior engineers',
      'Collaborate with cross-functional teams to understand business requirements',
      'Optimize model performance and implement best practices for ML ops',
      'Stay current with latest AI research and apply innovations to real-world problems',
      'Participate in code reviews and contribute to technical documentation'
    ],
    requirements: [
      'Strong Python programming with 5+ years of experience',
      'Deep expertise in TensorFlow, PyTorch, or similar ML frameworks',
      'Proven track record of deploying ML models to production',
      'Experience with cloud platforms (AWS/Azure/GCP)',
      'Strong understanding of ML algorithms, neural networks, and deep learning',
      'Excellent problem-solving and communication skills',
      'Master\'s degree in Computer Science, AI, or related field preferred'
    ],
    niceToHave: [
      'Experience with LLMs and generative AI',
      'Knowledge of MLOps tools and practices',
      'Published research or contributions to open-source ML projects',
      'Experience in consulting or client-facing roles'
    ]
  },
  'cloud-solutions-architect': {
    id: 'cloud-solutions-architect',
    title: 'Cloud Solutions Architect',
    department: 'Consulting',
    location: 'Hyderabad, India / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    salary: '₹25,00,000 - ₹35,00,000',
    description: 'Design and implement cloud infrastructure for clients',
    longDescription: 'Join our consulting team as a Cloud Solutions Architect, where you\'ll design and implement scalable cloud infrastructure for our global clients. You\'ll work on diverse projects, helping organizations migrate to the cloud and optimize their cloud operations.',
    responsibilities: [
      'Design comprehensive cloud architecture solutions for client requirements',
      'Lead cloud migration projects from planning to execution',
      'Implement Infrastructure as Code using Terraform, CloudFormation, or similar tools',
      'Ensure security, compliance, and cost optimization in cloud deployments',
      'Provide technical leadership and guidance to implementation teams',
      'Conduct architecture reviews and create technical documentation'
    ],
    requirements: [
      'AWS/Azure/GCP certifications (Solutions Architect or equivalent)',
      'Strong experience with Infrastructure as Code (Terraform, CloudFormation)',
      'Deep knowledge of cloud services, networking, and security',
      'Experience with microservices architecture and containerization',
      'Excellent client communication and presentation skills',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    niceToHave: [
      'Multiple cloud certifications',
      'Experience with Kubernetes and container orchestration',
      'Knowledge of DevOps practices and CI/CD pipelines',
      'Previous consulting experience'
    ]
  },
  'data-scientist': {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$110,000 - $150,000',
    description: 'Build predictive models and analytics solutions',
    longDescription: 'As a Data Scientist, you\'ll transform complex data into actionable insights that drive business decisions. You\'ll work with cutting-edge tools and techniques to build predictive models and analytics solutions for our clients across various industries.',
    responsibilities: [
      'Develop and deploy predictive models and machine learning algorithms',
      'Conduct exploratory data analysis to identify patterns and insights',
      'Create compelling data visualizations and dashboards',
      'Collaborate with stakeholders to understand business problems',
      'Design and execute A/B tests and experiments',
      'Present findings and recommendations to both technical and non-technical audiences'
    ],
    requirements: [
      'Strong foundation in statistics and machine learning',
      'Proficiency in Python, R, and SQL',
      'Experience with data visualization tools (Tableau, Power BI, or similar)',
      'Ability to work with large datasets and data warehouses',
      'Strong business acumen and stakeholder management skills',
      'Bachelor\'s or Master\'s degree in a quantitative field'
    ],
    niceToHave: [
      'Experience with big data technologies (Spark, Hadoop)',
      'Knowledge of deep learning frameworks',
      'Domain expertise in specific industries (healthcare, finance, retail)',
      'Published work or kaggle competitions participation'
    ]
  },
  'cybersecurity-consultant': {
    id: 'cybersecurity-consultant',
    title: 'Cybersecurity Consultant',
    department: 'Security',
    location: 'Jersey City, NJ / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$120,000 - $160,000',
    description: 'Assess and implement security solutions for enterprises',
    longDescription: 'Join our cybersecurity team to help enterprises protect their critical assets. You\'ll conduct security assessments, design robust security architectures, and implement solutions that defend against evolving threats.',
    responsibilities: [
      'Conduct comprehensive security assessments and penetration testing',
      'Design and implement zero-trust architecture solutions',
      'Perform vulnerability assessments and develop remediation plans',
      'Ensure compliance with security frameworks (NIST, ISO 27001, SOC 2)',
      'Provide security advisory services to clients',
      'Stay updated on latest security threats and defense mechanisms'
    ],
    requirements: [
      'Security certifications (CISSP, CEH, OSCP, or equivalent)',
      'Deep knowledge of security technologies and best practices',
      'Experience with penetration testing and vulnerability assessment tools',
      'Understanding of cloud security (AWS, Azure, GCP)',
      'Strong knowledge of security compliance frameworks',
      'Excellent communication and report writing skills'
    ],
    niceToHave: [
      'Experience with security orchestration and automation',
      'Knowledge of threat intelligence platforms',
      'Incident response experience',
      'Advanced security certifications (GIAC, Offensive Security)'
    ]
  },
  'business-analyst': {
    id: 'business-analyst',
    title: 'Business Analyst',
    department: 'Consulting',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '2+ years',
    salary: '₹12,00,000 - ₹18,00,000',
    description: 'Bridge technology and business requirements',
    longDescription: 'As a Business Analyst, you\'ll serve as the crucial link between business stakeholders and technical teams. You\'ll analyze business processes, gather requirements, and ensure successful delivery of technology solutions.',
    responsibilities: [
      'Gather and document business requirements from stakeholders',
      'Analyze current business processes and identify improvement opportunities',
      'Create detailed process flows, use cases, and user stories',
      'Facilitate workshops and meetings with stakeholders',
      'Support UAT and ensure solutions meet business needs',
      'Maintain requirements traceability throughout project lifecycle'
    ],
    requirements: [
      'Strong experience in requirements gathering and documentation',
      'Proficiency in process mapping and business analysis tools',
      'Excellent stakeholder management and communication skills',
      'Knowledge of Agile/Scrum methodology',
      'Experience with tools like JIRA, Confluence, or similar',
      'Bachelor\'s degree in Business, IT, or related field'
    ],
    niceToHave: [
      'Business analysis certification (CBAP, PMI-PBA)',
      'Experience with data analysis and SQL',
      'Knowledge of specific industry domains',
      'Project management experience'
    ]
  },
  'devops-engineer': {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$115,000 - $155,000',
    description: 'Build and maintain CI/CD pipelines and infrastructure',
    longDescription: 'We\'re looking for a DevOps Engineer to build and maintain robust CI/CD pipelines and cloud infrastructure. You\'ll work on automation, monitoring, and ensuring high availability of our systems and client applications.',
    responsibilities: [
      'Design and implement CI/CD pipelines for automated deployments',
      'Manage and optimize cloud infrastructure (AWS/Azure/GCP)',
      'Implement infrastructure as code using Terraform, Ansible, or similar',
      'Set up monitoring, logging, and alerting systems',
      'Ensure system security, scalability, and high availability',
      'Troubleshoot and resolve production issues'
    ],
    requirements: [
      'Strong experience with Kubernetes and Docker',
      'Proficiency in CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
      'Experience with infrastructure automation tools',
      'Knowledge of scripting languages (Python, Bash, PowerShell)',
      'Understanding of monitoring tools (Prometheus, Grafana, ELK)',
      'Strong problem-solving and debugging skills'
    ],
    niceToHave: [
      'Cloud certifications (AWS/Azure/GCP)',
      'Experience with service mesh (Istio, Linkerd)',
      'Knowledge of GitOps practices',
      'Contributions to DevOps open-source projects'
    ]
  }
};

export default function JobDescriptionPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [isClient, setIsClient] = useState(false);
  
  const jobId = params.jobId as string;
  const job = jobsData[jobId as keyof typeof jobsData];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!job) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The position you're looking for doesn't exist.</p>
          <Link href="/careers" className="text-cyan-500 hover:text-cyan-600 font-semibold">
            ← Back to Careers
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleApplyClick = () => {
    if (!isClient) return;
    
    if (!user) {
      // Store the intended destination
      sessionStorage.setItem('redirectAfterLogin', `/careers/apply/${jobId}`);
      router.push('/careers/login');
    } else {
      router.push(`/careers/apply/${jobId}`);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-6 py-32 max-w-5xl">
        {/* Back Button */}
        <Link href="/careers" className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-500 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Careers
        </Link>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">{job.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-lg">
              <Briefcase size={18} className="text-cyan-600" />
              <span className="text-gray-800 font-medium">{job.department}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-lg">
              <MapPin size={18} className="text-cyan-600" />
              <span className="text-gray-800 font-medium">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-lg">
              <Clock size={18} className="text-cyan-600" />
              <span className="text-gray-800 font-medium">{job.type}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-700">
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
          </div>
        </motion.div>

        {/* About the Role */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-black mb-4">About the Role</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{job.longDescription}</p>
        </motion.section>

        {/* Responsibilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Key Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Requirements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Nice to Have */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Nice to Have</h2>
          <ul className="space-y-3">
            {job.niceToHave.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0 mt-2"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Apply CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-white/90 mb-6 text-lg">
            Join our team and help us transform businesses through technology
          </p>
          <motion.button
            onClick={handleApplyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {user ? 'Apply Now' : 'Login to Apply'}
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
