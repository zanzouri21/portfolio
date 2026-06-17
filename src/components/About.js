import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiCode, FiShield } from 'react-icons/fi';

const stats = [
  { icon: <FiBriefcase />, value: '1+', label: 'Year Experience' },
  { icon: <FiCode />, value: '10+', label: 'Projects Built' },
  { icon: <FiShield />, value: '3+', label: 'Certifications' },
  { icon: <FiMapPin />, value: 'TN', label: 'Gabès, Tunisia' },
];

const UserIcon = () => (
  <svg width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="50" cy="30" r="20" stroke="#e63946" strokeWidth="3.5" fill="rgba(230,57,70,0.1)"/>
    {/* Body / shoulders */}
    <path d="M12 88 C12 62 88 62 88 88" stroke="#e63946" strokeWidth="3.5" strokeLinecap="round" fill="rgba(230,57,70,0.1)"/>
  </svg>
);

const About = () => (
  <section id="about" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)' }}>
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-title">About Me</p>
        <div className="accent-line" />
        <p className="section-subtitle">Get to know more about my journey</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
        
        {/* Left - Photo placeholder */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 300, height: 300, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(135deg, rgba(230,57,70,0.3), rgba(230,57,70,0.05))',
            border: '2px solid rgba(230,57,70,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <UserIcon />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>
            Hello! I'm <span style={{ color: '#e63946' }}>Ahmed</span> 
          </h3>
          <p style={{ color: '#a0a0b0', lineHeight: 1.9, marginBottom: '1rem' }}>
            IT graduate from ISET Gabès with a degree in Network Security. Passionate about
            web development, cybersecurity, and graphic design. I build modern web applications
            using the MERN stack while keeping security at the core of everything I do.
          </p>
          <p style={{ color: '#a0a0b0', lineHeight: 1.9, marginBottom: '2rem' }}>
            Beyond coding, I explore emerging technologies, work on graphic design projects,
            and continuously grow through certifications in cybersecurity, software development and graphic design.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e63946' }}>
            <FiMapPin /> <span style={{ color: '#a0a0b0' }}>Made with passion from Gabès, Tunisia</span>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {stats.map((stat, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '1.5rem', textAlign: 'center',
              backdropFilter: 'blur(10px)', transition: 'border-color 0.3s'
            }}
            whileHover={{ borderColor: 'rgba(230,57,70,0.5)', y: -4 }}
          >
            <div style={{ color: '#e63946', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>{stat.value}</div>
            <div style={{ color: '#a0a0b0', fontSize: '0.85rem' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
    <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }`}</style>
  </section>
);

export default About;