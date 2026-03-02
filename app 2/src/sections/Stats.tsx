import { motion } from 'framer-motion';

const stats = [
  { value: '300K+', label: 'Engineers trust us' },
  { value: '1 in 3', label: 'Startups choose Austrino' },
  { value: '$20B+', label: 'Infrastructure managed' },
  { value: '4.9', label: 'G2 rating' },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Nature Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/nature-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-dark-900/80" />
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight max-w-3xl mx-auto">
            You're creating something to stand the test of time.{' '}
            <span className="text-gradient">So are we.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`text-center ${
                index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
