import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const Index = () => {
  useSmoothScroll();

  useEffect(() => {
    document.title = 'James Scott | UI/UX Designer';
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
