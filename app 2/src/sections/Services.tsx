import { motion } from 'framer-motion';
import { 
  CloudCog, 
  Server, 
  ShieldCheck, 
  TrendingDown, 
  Cpu, 
  Code2 
} from 'lucide-react';

const services = [
  {
    icon: CloudCog,
    title: 'Cloud Architecture',
    description: 'Design scalable, resilient infrastructure across AWS, Azure, and GCP. We architect for your current needs and future growth.',
  },
  {
    icon: Server,
    title: 'Kubernetes & Containers',
    description: 'Deploy and manage production-grade Kubernetes clusters. From EKS to GKE to on-prem, we handle the complexity.',
  },
  {
    icon: Code2,
    title: 'CI/CD Pipelines',
    description: 'Build automated deployment pipelines that let your team ship faster and safer. GitHub Actions, ArgoCD, Jenkins.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description: 'Implement security best practices, secrets management with Vault, and compliance frameworks from day one.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Optimization',
    description: 'Identify waste, right-size resources, and implement FinOps practices to reduce your cloud bill by up to 40%.',
  },
  {
    icon: Cpu,
    title: 'AI/ML Infrastructure',
    description: 'Design GPU-backed infrastructure for machine learning workloads. MLOps pipelines and model serving at scale.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            End-to-End Cloud Solutions
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From architecture design to production deployment, we handle every aspect of your cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
