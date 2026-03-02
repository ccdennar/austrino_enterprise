import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Let's Build Something{' '}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10">
              Ready to transform your cloud infrastructure? We'd love to hear about your project 
              and discuss how we can help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="text-white">hello@austrino.io</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Phone</p>
                  <p className="text-white">+1 (403) 555-0123</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="text-white">Calgary, Alberta, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-neutral-400 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-neutral-400 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-400 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
