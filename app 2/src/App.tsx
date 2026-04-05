import { useEffect, useState } from 'react';
import { useSeason } from './hooks/useSeason';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Partners from '@/sections/Partners';
import Team from '@/sections/Team';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4"
        >
          <span className="text-white font-bold text-lg">A</span>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

// Season Toggle Component for Testing
function SeasonToggle() {
  const { season, setSeason } = useSeason();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="fixed bottom-4 right-4 z-50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass-dark p-2 rounded-lg mb-2 flex gap-1"
          >
            {(['summer', 'fall', 'winter', 'spring'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  season === s 
                    ? 'bg-orange-500 text-white' 
                    : 'hover:bg-white/10 text-neutral-400'
                }`}
              >
                {s === 'summer' && 'Sun'}
                {s === 'fall' && 'Fall'}
                {s === 'winter' && 'Winter'}
                {s === 'spring' && 'Spring'}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="seasonal-indicator" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { season } = useSeason();

  useEffect(() => {
    document.fonts.ready.then(() => {});
    console.log('Austrino season:', season);
  }, [season]);

  // Remove GitHub links from Projects section
  useEffect(() => {
    const removeGithubLinks = () => {
      const githubLinks = document.querySelectorAll('a[href*="github.com"]');
      githubLinks.forEach(link => {
        const button = document.createElement('button');
        button.className = link.className;
        button.innerHTML = 'Request Details';
        button.onclick = () => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        };
        link.parentNode?.replaceChild(button, link);
      });

      const githubIcons = document.querySelectorAll('[data-lucide="github"], .lucide-github');
      githubIcons.forEach(icon => {
        const parent = icon.closest('a, button');
        if (parent) parent.remove();
      });
    };

    if (!isLoading) {
      setTimeout(removeGithubLinks, 100);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-neutral-950"
      >
        <SeasonToggle />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Partners />
          <Team />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;