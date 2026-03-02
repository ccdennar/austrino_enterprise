import { motion } from 'framer-motion';
import { Check, Award, Users, TrendingUp } from 'lucide-react';

const partners = [
  {
    name: 'AWS',
    color: '#FF9900',
    level: 'Advanced Consulting Partner',
    certifications: ['Solutions Architect', 'DevOps Engineer', 'Security Specialty'],
  },
  {
    name: 'Azure',
    color: '#0089D6',
    level: 'Gold Partner',
    certifications: ['Solutions Architect Expert', 'DevOps Engineer Expert'],
  },
  {
    name: 'GCP',
    color: '#4285F4',
    level: 'Premier Partner',
    certifications: ['Professional Cloud Architect', 'Professional Data Engineer'],
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team holds top-tier certifications across all major cloud platforms.',
  },
  {
    icon: Users,
    title: 'Direct Support',
    description: 'Partner-level access to cloud provider technical teams and resources.',
  },
  {
    icon: TrendingUp,
    title: 'Best Practices',
    description: 'Early access to new features and proven architectural patterns.',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
            Cloud Partnerships
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Certified Across All Major Clouds
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Austrino maintains active partnerships and certifications with AWS, Azure, and Google Cloud Platform.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: `${partner.color}20`, color: partner.color }}
                >
                  {partner.name.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                  <p className="text-sm text-neutral-400">{partner.level}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {partner.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-neutral-400">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">{benefit.title}</h4>
                <p className="text-sm text-neutral-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
