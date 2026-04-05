import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="cta-bg bg-cover bg-center bg-no-repeat">
      {/* Background with Meeting Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/standup-meeting.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-dark-900/70" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Infrastructure —{' '}
            <span className="text-gradient">redesigned from the ground up.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="bg-teal-500 hover:bg-teal-400 text-dark-900 px-8 py-3.5 rounded-full font-medium flex items-center gap-2">
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-3.5 rounded-full font-medium">
              Contact Sales
            </Button>
          </div>

          {/* Two Column Info */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-lg font-medium text-white mb-2">Austrino for teams</p>
              <p className="text-sm text-gray-400 mb-4">
                For $0/month, get started with cloud management that helps you accomplish everything you want to do with your infrastructure.
              </p>
              <a href="#demo" className="text-sm text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1">
                Explore Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-lg font-medium text-white mb-2">Austrino Enterprise</p>
              <p className="text-sm text-gray-400 mb-4">
                Level up your platform engineering with dedicated support, custom integrations, and advanced governance features.
              </p>
              <a href="#enterprise" className="text-sm text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
