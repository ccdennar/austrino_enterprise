import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  TrendingDown, 
  Zap, 
  BarChart3, 
  Globe 
} from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Multi-cloud management',
    description: 'Connect AWS, Azure, and GCP accounts with zero configuration. See all your resources in one unified view.',
  },
  {
    icon: Shield,
    title: 'Policy guardrails',
    description: 'Set spending limits, enforce compliance rules, and prevent misconfigurations before they happen.',
  },
  {
    icon: TrendingDown,
    title: 'Cost optimization',
    description: 'Identify waste, right-size resources, and save up to 40% on your cloud bill with AI-powered recommendations.',
  },
  {
    icon: Zap,
    title: 'Self-service APIs',
    description: 'Enable developers to provision infrastructure in minutes, not days. No tickets, no waiting.',
  },
  {
    icon: BarChart3,
    title: 'Real-time insights',
    description: 'Track utilization, monitor health, and get alerted to issues before they impact your business.',
  },
  {
    icon: Globe,
    title: 'Global deployments',
    description: 'Deploy across regions with a single click. Manage multi-region infrastructure effortlessly.',
  },
];

export default function Features() {
  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Everything you do with infrastructure.
            <br />
            <span className="text-gradient">All in one place.</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-teal-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Collaboration Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="/images/engineers-collab.jpg" 
              alt="Engineers collaborating" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Built for teams that ship
                </h3>
                <p className="text-gray-400 mb-4">
                  Enable your engineering teams to move faster without breaking things. 
                  Self-service infrastructure with guardrails.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-dark-900" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">300K+ engineers trust Austrino</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
