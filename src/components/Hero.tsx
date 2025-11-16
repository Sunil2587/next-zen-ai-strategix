'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942]"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              y: [null, Math.random() * 1080],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Next Zen AI Strategix
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your AI-Powered Tech Partner
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              We&apos;re a dynamic startup transforming businesses with innovative AI solutions, cloud infrastructure, and intelligent automation. Fast, agile, and ready to scale with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 transition-all"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Explore Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right 3D Glowing Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[500px]">
              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[400px] h-[400px] border border-blue-500/30 rounded-full" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[450px] h-[200px] border border-purple-500/20 rounded-full transform rotate-45" />
              </motion.div>

              {/* Glowing orbs on orbits */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[400px] h-[400px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[450px] h-[200px] transform rotate-45">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                </div>
              </motion.div>

              {/* Central 3D Cube */}
              <motion.div
                animate={{ 
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: 1000 }}
              >
                <div className="relative w-48 h-48" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Cube faces with gradient and glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-pink-500/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/50"
                       style={{ transform: 'translateZ(96px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-blue-500/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/30"
                       style={{ transform: 'rotateY(90deg) translateZ(96px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-pink-500/20"
                       style={{ transform: 'rotateY(180deg) translateZ(96px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
                       style={{ transform: 'rotateY(-90deg) translateZ(96px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-blue-500/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
                       style={{ transform: 'rotateX(90deg) translateZ(96px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
                       style={{ transform: 'rotateX(-90deg) translateZ(96px)' }} />
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-400/50 blur-3xl rounded-full" />
                </div>
              </motion.div>

              {/* Small floating planet */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: 360 
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
                className="absolute bottom-12 right-12 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
