import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI/ML Platform Infrastructure',
    description: 'Designed and built scalable infrastructure for AI-enabled services supporting both experimentation and production ML/LLM workloads across AWS, Azure, and GCP.',
    tags: ['Kubernetes', 'GPU', 'Terraform', 'Helm', 'ArgoCD'],
    client: 'AI Startup',
  },
  {
    title: 'Multi-Cloud EKS Platform',
    description: 'Comprehensive cloud-native platform on AWS EKS with Terraform, featuring auto-scaling, observability, and GitOps-based deployments for a fintech company.',
    tags: ['AWS EKS', 'Terraform', 'Prometheus', 'Grafana', 'Istio'],
    client: 'Fintech Corp',
  },
  {
    title: 'Serverless Data Pipeline',
    description: 'Built a fully serverless, observable data ingestion pipeline using AWS Lambda, S3, DynamoDB, and SQS with comprehensive CloudWatch monitoring.',
    tags: ['AWS Lambda', 'S3', 'DynamoDB', 'SQS', 'CloudWatch'],
    client: 'Healthcare SaaS',
  },
  {
    title: 'Azure Kubernetes Migration',
    description: 'Migrated 50+ microservices from on-premises to Azure AKS with zero downtime, implementing CI/CD pipelines and security hardening.',
    tags: ['Azure AKS', 'Azure DevOps', 'Terraform', 'Key Vault'],
    client: 'Enterprise Retail',
  },
  {
    title: 'GCP Cost Optimization',
    description: 'Implemented FinOps practices and automated resource management, reducing cloud spend by 35% while improving performance.',
    tags: ['GCP', 'BigQuery', 'Cloud Functions', 'Budget Alerts'],
    client: 'Data Analytics Firm',
  },
  {
    title: 'Hybrid Cloud Network',
    description: 'Designed and implemented secure hybrid cloud connectivity between on-prem data centers and AWS/Azure with site-to-site VPN and Direct Connect.',
    tags: ['AWS', 'Azure', 'VPN', 'Direct Connect', 'VPC'],
    client: 'Manufacturing Co',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Rockies Sunset Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/rockies-sunset.jpg" 
          alt="Rocky Mountains Sunset" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Work We've Delivered
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A selection of cloud infrastructure projects we've built for clients across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/30 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-orange-400 font-medium">{project.client}</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <Github className="w-4 h-4 text-neutral-400" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-neutral-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
