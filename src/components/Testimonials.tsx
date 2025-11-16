'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, TechVision Inc.',
    content: 'NextZen AI Strategix transformed our infrastructure completely. Their expertise in cloud migration saved us millions and improved our performance dramatically.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Chen',
    position: 'CEO, DataFlow Systems',
    content: 'The AI solutions developed by NextZen have revolutionized our operations. Their team is professional, innovative, and always delivers beyond expectations.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Director, Global Retail Co.',
    content: 'Outstanding service and technical expertise. They understood our unique challenges and delivered a solution that exceeded all our requirements.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    name: 'David Park',
    position: 'VP Engineering, FinanceHub',
    content: 'Working with NextZen was a game-changer for our company. Their strategic approach and cutting-edge solutions have given us a significant competitive advantage.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-200" size={48} />
              
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full ${testimonial.avatar} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl relative"
          >
            <Quote className="absolute top-6 right-6 text-primary-200" size={48} />
            
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-full ${testimonials[activeIndex].avatar} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed relative z-10">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>
          </motion.div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
