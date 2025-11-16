'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next Zen AI Strategix
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering startups and SMBs with AI-driven innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Industries</a></li>
              <li><a href="#insights" className="hover:text-blue-400 transition-colors">Insights</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>AI Strategy & Consulting</li>
              <li>Data Science & Analytics</li>
              <li>Cloud AI & Infrastructure</li>
              <li>Software Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: hr@nextzenaistrategix.com</li>
              <li>Phone: +1 (551) 371-2342</li>
              <li>48 BI-STATE PLAZA, #625</li>
              <li>OLD TAPPAN, NJ 07304</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2019 | Next Zen AI Strategix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
