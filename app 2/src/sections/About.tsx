import { motion } from 'framer-motion';
import { Cloud, Container, GitBranch, Shield } from 'lucide-react';

const competencies = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP', 'OpenShift'],
  },
  {
    icon: Container,
    title: 'Containerization',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GitOps'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & IaC',
    skills: ['Terraform', 'GitHub Actions', 'ArgoCD', 'Jenkins'],
  },
  {
    icon: Shield,
    title: 'Security & Monitoring',
    skills: ['Vault', 'Prometheus', 'Grafana', 'Datadog'],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* BC Forest Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/bc-forest.jpg" 
          alt="British Columbia Forest" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Seasoned Cloud Engineers Based in{' '}
              <span className="text-gradient">Alberta, Canada</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Austrino is a cloud consulting firm with deep expertise in building and operating 
              production-grade infrastructure. We've helped startups scale from zero to millions 
              of users and guided enterprises through complex cloud migrations.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Our team specializes in Kubernetes, CI/CD automation, infrastructure as code, 
              and AI/ML platforms. We work closely with your engineering teams to ship changes 
              safely, repeatedly, and at scale.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['AWS Partner', 'Azure Expert', 'GCP Certified'].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Competencies Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {competencies.map((comp, index) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <comp.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-3">{comp.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {comp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs text-neutral-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
