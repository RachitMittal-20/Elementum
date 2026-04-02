import { useEffect, useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Studio', id: 'studio' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
  { label: 'FAQs', id: 'faqs' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 18);

      const offset = window.innerHeight * 0.32;
      let current = NAV_LINKS[0].id;

      NAV_LINKS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);

    return () => {
      window.removeEventListener('scroll', updateNavigation);
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__logo">Elementum</a>

      <div className={`navbar__links ${menuOpen ? 'navbar__links--active' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? 'navbar__link--active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
