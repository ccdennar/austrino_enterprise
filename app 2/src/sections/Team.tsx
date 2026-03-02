import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Michael Chen',
    role: 'Founder & Principal Architect',
    bio: '15+ years in cloud infrastructure. Former AWS Solutions Architect.',
    image: '/images/consultant-1.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Cloud Architect',
    bio: 'Kubernetes expert. Azure certified. Led 20+ cloud migrations.',
    image: '/images/consultant-2.jpg',
  },
  {
    name: 'Raj Patel',
    role: 'DevOps Lead',
    bio: 'CI/CD specialist. Terraform wizard. GCP certified professional.',
    image: '/images/consultant-3.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Alberta Prairie Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/alberta-prairie.jpg" 
          alt="Alberta Prairie" 
          className="w-full h-full object-cover opacity-10"
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
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Meet the Consultants
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A small team of senior cloud engineers based in Alberta, Canada. 
            We work directly with every client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 text-sm mb-2">{member.role}</p>
              <p className="text-neutral-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
