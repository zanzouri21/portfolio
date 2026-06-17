import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Gabes City',
    desc: 'A fullstack web application built to showcase and serve the city of Gabès. Features modern UI, smooth navigation, and a complete backend.',
    tags: ['ReactJS', 'NodeJS', 'MongoDB'],
    image: '/gabesstore.PNG',
    code: 'https://github.com/zanzouri21/gabes-city',
  },
  {
    title: 'MoviesHub',
    desc: 'A movie discovery platform where users can explore, search, and browse films with rich details, posters, and ratings.',
    tags: ['ReactJS'],
    image: '/movies.PNG',
    code: 'https://github.com/zanzouri21/Moviehub',
  },
  {
    title: 'CodeNest',
    desc: 'A developer-focused platform for sharing and discovering code snippets, projects, and resources within a community.',
    tags: ['Html', 'Css', 'Javascript'],
    image: '/codenest.PNG',
    code: 'https://github.com/zanzouri21/CodeNest',
  },
  {
    title: 'FootHub',
    desc: 'A football-centric web app providing live scores, standings, match stats, and team information for football fans.',
    tags: ['ReactJS'],
    image: '/foothub.PNG',
    code: 'https://github.com/zanzouri21/foothub',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <p className="section-title">My Projects</p>
          <div className="accent-line" />
          <p className="section-subtitle">Things I've built and shipped</p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s'
              }}
              whileHover={{ y: -6, borderColor: 'rgba(230,57,70,0.4)' }}
            >
              {/* Card Image Header */}
              <div style={{
                height: 180,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)'
                }} />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: '#a0a0b0', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={{
                      background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)',
                      borderRadius: 50, padding: '0.2rem 0.75rem', fontSize: '0.75rem', color: '#e63946'
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={p.code} target="_blank" rel="noreferrer">
                    <button style={{
                      background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 50, padding: '0.5rem 1.2rem', color: '#fff',
                      cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                      display: 'flex', alignItems: 'center', gap: 6
                    }}>
                      <FiGithub /> Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
        <a href="https://github.com/zanzouri21?tab=repositories" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
  <button
    style={{
      background: 'linear-gradient(135deg, #e63946, #ff4757)',
      border: 'none',
      borderRadius: 50,
      padding: '0.9rem 2.2rem',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '0 0 30px rgba(230,57,70,0.4)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
      e.currentTarget.style.boxShadow = '0 8px 40px rgba(230,57,70,0.6)';
      e.currentTarget.style.opacity = '0.92';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 0 30px rgba(230,57,70,0.4)';
      e.currentTarget.style.opacity = '1';
    }}
  >
    <FiGithub /> See All My Projects
  </button>
</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;