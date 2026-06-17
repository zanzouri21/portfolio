import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const roles = ['Web Developer (MERN Stack)', 'Cybersecurity Enthusiast', 'Graphic Designer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 50%, rgba(230,57,70,0.08) 0%, transparent 70%)'
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div style={{ textAlign: 'center', zIndex: 1, padding: '0 2rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#e63946', fontWeight: 600, letterSpacing: 3,
            textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1,
            background: 'linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.5))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', marginBottom: '1.5rem'
          }}
        >
          Ahmed Zanzouri
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 600,
            color: '#e63946', marginBottom: '1.5rem', minHeight: '2.5rem' }}
        >
          {displayed}<span style={{ borderRight: '2px solid #e63946', marginLeft: 2, animation: 'blink 1s infinite' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ color: '#a0a0b0', maxWidth: 560, margin: '0 auto 2.5rem',
            fontSize: '1.05rem', lineHeight: 1.8 }}
        >
            graduated in Network Security from ISET Gabès, with hands-on knowledge in web development, graphic design, computer networks and cybersecurity — built through
  certifications and academic projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="projects" smooth duration={600} offset={-80}>
            <button style={{
              background: 'linear-gradient(135deg, #e63946, #ff4757)',
              border: 'none', borderRadius: 50, padding: '0.9rem 2.2rem',
              color: '#fff', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 0 30px rgba(230,57,70,0.4)', transition: 'transform 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              View My Work ↓
            </button>
          </Link>
          <a href="/CV_Ahmed_Zanzouri.pdf" download="CV_Ahmed_Zanzouri.pdf">
            <button style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: 50, padding: '0.9rem 2.2rem',
              color: '#fff', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
              transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#e63946'; e.currentTarget.style.color = '#e63946'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; }}
            >
              <FiDownload /> Download CV
            </button>
          </a>
        </motion.div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Hero;