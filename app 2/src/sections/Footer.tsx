import { Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Services: [
    { name: 'Cloud Architecture', href: '#' },
    { name: 'Kubernetes', href: '#' },
    { name: 'CI/CD Pipelines', href: '#' },
    { name: 'Cost Optimization', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Austrino</span>
            </a>
            <p className="text-neutral-500 text-sm mb-6 max-w-xs">
              Cloud consulting and engineering services based in Alberta, Canada. 
              Helping businesses build scalable infrastructure.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4 text-neutral-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4 text-neutral-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-500 text-sm hover:text-orange-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              © {new Date().getFullYear()} Austrino Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 text-sm hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-600 text-sm hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
