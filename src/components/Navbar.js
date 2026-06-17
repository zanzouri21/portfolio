import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon} from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>
        A<span style={{ color: '#e63946' }}>Z</span>
      </div>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
        {navLinks.map(link => (
          <li key={link} style={{ display: menuOpen ? 'none' : 'block' }}>
            <Link
              to={link} smooth={true} duration={600} offset={-80}
              style={{
                cursor: 'pointer', color: '#a0a0b0', fontSize: '0.9rem',
                fontWeight: 500, textTransform: 'capitalize',
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.target.style.color = '#e63946'}
              onMouseLeave={e => e.target.style.color = '#a0a0b0'}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => setDarkMode(!darkMode)} style={{
          background: 'rgba(255,255,255,0.08)', border: 'none',
          borderRadius: '50%', width: 38, height: 38,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff', fontSize: '1rem'
        }}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;