import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Unlike most cloud management tools, Austrino is built on modern software. Everything can be done within the platform in 1-2 minutes. It's transformed how our team works.",
    author: 'Sarah Chen',
    role: 'Principal Engineer',
    company: 'Fintech Corp',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: "We cut our cloud waste by a third in the first quarter. Austrino's visibility into our multi-cloud spend was a game-changer for our engineering organization.",
    author: 'Michael Roberts',
    role: 'CTO',
    company: 'Fortune 500 FinTech',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: "Our developers can now self-serve infrastructure in minutes instead of weeks. It's like having a platform team that never sleeps. The ROI has been incredible.",
    author: 'Emily Watson',
    role: 'VP of Engineering',
    company: 'HealthTech Unicorn',
    image: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Loved by <span className="text-gradient">platform teams</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="relative bg-dark-800 rounded-3xl overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800/90 lg:bg-gradient-to-l lg:from-dark-800 lg:to-transparent" />
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-teal-400 mb-6" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div>
                      <p className="text-white font-medium">{testimonials[activeIndex].author}</p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-teal-400' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
