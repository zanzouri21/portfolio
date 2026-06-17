import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub } from 'react-icons/fi';

const Footer = () => (
  <footer style={{
    background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '3rem 2rem 2rem', textAlign: 'center'
  }}>
    <div style={{ marginBottom: '1rem' }}>
      <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>
        A<span style={{ color: '#e63946' }}>Z</span>
      </span>
      <p style={{ color: '#606070', fontSize: '0.85rem', marginTop: '0.5rem' }}>
        Technicien IT · Web Developer · Cybersecurity Enthusiast
      </p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
      {['home', 'about', 'skills', 'projects', 'contact'].map(link => (
        <Link key={link} to={link} smooth duration={600} offset={-80}
          style={{ color: '#606070', cursor: 'pointer', fontSize: '0.9rem',
            textTransform: 'capitalize', transition: 'color 0.3s' }}
          onMouseEnter={e => e.target.style.color = '#e63946'}
          onMouseLeave={e => e.target.style.color = '#606070'}
        >
          {link}
        </Link>
      ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <a href="https://github.com/zanzouri21?tab=repositories" target="_blank" rel="noreferrer">
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#606070', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s'
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#e63946'; e.currentTarget.style.borderColor = 'rgba(230,57,70,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#606070'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          <FiGithub />
        </div>
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#606070', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s'
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#e63946'; e.currentTarget.style.borderColor = 'rgba(230,57,70,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#606070'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          
        </div>
      </a>
    </div>

    <p style={{ color: '#404050', fontSize: '0.85rem' }}>
      © 2026 Ahmed Zanzouri
    </p>
  </footer>
);

export default Footer;