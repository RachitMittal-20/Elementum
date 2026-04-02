import { useEffect, useState } from 'react';
import './styles/variables.css';
import './App.css';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import FeatureFlowSection from './components/FeatureFlowSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.classList.remove('page-ready');
    document.body.classList.add('app-loading');

    const exitTimer = window.setTimeout(() => setIsExiting(true), 1500);
    const removeTimer = window.setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('app-loading');
      document.body.classList.add('page-ready');
    }, 2250);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove('app-loading');
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const updateScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      root.style.setProperty('--scroll-progress', `${progress}%`);
      root.style.setProperty('--scroll-progress-value', `${progress}`);
    };

    const updatePointerGlow = (event) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    window.addEventListener('pointermove', updatePointerGlow, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      window.removeEventListener('pointermove', updatePointerGlow);
    };
  }, []);

  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <div className="page-spotlight" aria-hidden="true" />
      {isLoading ? <LoadingScreen exiting={isExiting} /> : null}
      <Navbar />
      <div id="home" data-nav-section className="page-section">
        <Hero />
      </div>
      <div id="studio" data-nav-section className="page-section">
        <FeatureFlowSection />
      </div>
      <div id="services" data-nav-section className="page-section">
        <TestimonialsSection />
      </div>
      <div id="contact" data-nav-section className="page-section">
        <NewsletterSection />
      </div>
      <div id="faqs" data-nav-section className="page-section">
        <Footer />
      </div>
    </>
  );
}

export default App;
