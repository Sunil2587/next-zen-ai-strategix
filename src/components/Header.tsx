'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Insights', href: '#insights' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-6"
      >
        <nav className="container mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mx-auto max-w-5xl flex items-center justify-center gap-2 transition-all duration-500 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border border-slate-200'
                : 'bg-white/90 backdrop-blur-md shadow-xl border border-slate-200/80'
            } rounded-full px-6 py-3`}
          >
            {/* Logo - Left */}
            <Link href="#home" className="flex items-center gap-2 group pr-4 border-r border-slate-200">
              <div className="hidden md:block">
                <motion.span
                  className="text-xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-blue-600">Next Zen</span> <span className="text-gray-900">AI Strategix</span>
                </motion.span>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 font-semibold text-sm text-slate-700 hover:text-[#1e4d8b] transition-all rounded-full hover:bg-blue-50"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* CTA Button - Right */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px -10px rgba(30, 77, 139, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex px-6 py-2.5 bg-gradient-to-r from-[#1e4d8b] to-[#3b7dd6] text-white font-semibold rounded-full transition-all items-center gap-2 shadow-lg shadow-blue-500/30 ml-4"
            >
              <span>Get Started</span>
              <i className="fas fa-arrow-right text-sm"></i>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all ml-auto"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 mx-auto max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-200 rounded-3xl p-6"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 4, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    className="block py-3 px-5 text-slate-700 hover:text-blue-600 font-semibold rounded-2xl transition-all mb-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#1e4d8b] to-[#3b7dd6] text-white rounded-full font-semibold text-center shadow-lg shadow-blue-500/30"
                >
                  Get Started
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e4d8b] to-[#3b7dd6] z-[60] origin-left"
        style={{ scaleX: 0 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </>
  );
}
