'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { 
    name: 'What we do', 
    href: '#services',
    hasDropdown: false
  },
  { 
    name: 'What we think', 
    href: '#insights',
    hasDropdown: false
  },
  { 
    name: 'Who we are', 
    href: '#about',
    hasDropdown: false
  },
  { 
    name: 'Industries', 
    href: '#industries',
    hasDropdown: false
  },
  { 
    name: 'Careers', 
    href: '/careers',
    hasDropdown: false
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Professional Fixed Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
            : 'bg-black/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link href="#home" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Logo className="w-10 h-10" />
              </motion.div>
              
              {/* Company Name */}
              <motion.div
                className="flex flex-col leading-tight"
                whileHover={{ x: 2 }}
              >
                <span className="text-lg font-bold text-white tracking-tight">
                  NextZen
                </span>
                <span className="text-xs font-semibold text-cyan-400 tracking-wider">
                  AI STRATEGIX
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      {item.name}
                    {item.hasDropdown && (
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="ml-1"
                        animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                    </motion.span>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Right */}
            <div className="hidden lg:flex items-center gap-4">
              {user ? (
                <Link href="/careers/dashboard">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-sm rounded transition-all cursor-pointer"
                  >
                    <User size={16} />
                    My Dashboard
                  </motion.span>
                </Link>
              ) : (
                <>
                  <Link href="/#contact">
                    <motion.span
                      className="px-6 py-2.5 text-white/80 hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Contact
                    </motion.span>
                  </Link>
                  <Link href="/#contact">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-sm rounded transition-all cursor-pointer inline-block"
                    >
                      Get Started
                    </motion.span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-white/10 py-4"
              >
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href.startsWith('#') ? `/${item.href}` : item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-white/80 hover:text-white hover:bg-cyan-500/10 transition-all rounded cursor-pointer"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Link href="/#contact">
                    <div
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-center text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      Contact
                    </div>
                  </Link>
                  <Link href="/#contact">
                    <div
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-center bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition-all cursor-pointer"
                    >
                      Get Started
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyan-500 z-[60] origin-left"
        style={{ scaleX: 0 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
