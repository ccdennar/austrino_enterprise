import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Partners', href: '#partners' },
  { name: 'Team', href: '#team' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Austrino</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Contact
              </a>
              <Button className="bg-orange-500 hover:bg-orange-400 text-white text-sm px-5 h-9 rounded-full font-medium">
                Get in Touch
              </Button>
            </div>

            <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="relative pt-20 px-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="py-3 text-lg text-white border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="py-3 text-lg text-white border-b border-white/10">Contact</a>
            </div>
            <div className="mt-8">
              <Button className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-full font-medium">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
