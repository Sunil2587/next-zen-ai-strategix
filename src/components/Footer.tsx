'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Next Zen AI </span>
              <span className="text-cyan-400">Strategix</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving digital transformation with enterprise-grade AI and technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">What we do</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Industries</a></li>
              <li><a href="#insights" className="hover:text-cyan-400 transition-colors">What we think</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Who we are</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/services/ai-strategy-consulting" className="hover:text-cyan-400 transition-colors">AI Strategy & Consulting</a></li>
              <li><a href="/services/data-science-analytics" className="hover:text-cyan-400 transition-colors">Data Science & Analytics</a></li>
              <li><a href="/services/cloud-ai-infrastructure" className="hover:text-cyan-400 transition-colors">Cloud AI & Infrastructure</a></li>
              <li><a href="/services/cybersecurity" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
              <li><a href="/services/software-development" className="hover:text-cyan-400 transition-colors">Software Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:hr@nextzenaistrategix.com" className="hover:text-cyan-400 transition-colors">
                  hr@nextzenaistrategix.com
                </a>
              </li>
              <li>
                <a href="tel:+15513712342" className="hover:text-cyan-400 transition-colors">
                  +1 (551) 371-2342
                </a>
              </li>
              <li className="pt-2">48 BI-STATE PLAZA, #625<br />OLD TAPPAN, NJ 07304</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2019 - 2025 Next Zen AI Strategix. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
