import { useEffect, useState } from 'react';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.fonts.ready.then(() => {});
  }, []);

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
