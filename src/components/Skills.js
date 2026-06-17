import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiTool, FiShield, FiUsers, FiGlobe } from 'react-icons/fi';

const skillGroups = [
  {
    icon: <FiCode />, title: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'C++']
  },
  {
    icon: <FiLayers />, title: 'Frontend & Frameworks',
    skills: ['ReactJS', 'Redux', 'Next.js', 'Bootstrap', 'Axios', 'Vue.js']
  },
  {
    icon: <FiDatabase />, title: 'Backend & DB',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'NoSQL', 'Mongoose']
  },
  {
    icon: <FiShield />, title: 'Cybersecurity & Networks',
    skills: ['Linux', 'Cisco (CCNA)', 'SNMP', 'VLAN', 'CompTIA Security+', 'IoT']
  },
  {
    icon: <FiTool />, title: 'Design & Tools',
    skills: ['Photoshop', 'Illustrator', 'Canva', 'Git', 'GitHub', 'Scrum / Agile']
  },
];

const softSkills = [
  'Problem-solving & Analytical thinking',
  'Project management',
  'Adaptability',
  'Teamwork',
];

const languages = ['Arabic', 'English', 'French'];

const Skills = () => (
  <section id="skills" style={{ padding: '100px 0' }}>
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-title">Skills</p>
        <div className="accent-line" />
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>

      {/* Technical Skills — 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {skillGroups.slice(0, 4).map((group, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '2rem', backdropFilter: 'blur(10px)'
            }}
            whileHover={{ borderColor: 'rgba(230,57,70,0.3)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ color: '#e63946', fontSize: '1.2rem' }}>{group.icon}</span>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{group.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {group.skills.map((skill, j) => (
                <span key={j} style={{
                  background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)',
                  borderRadius: 50, padding: '0.35rem 1rem', fontSize: '0.85rem',
                  color: '#e0e0e0', fontWeight: 500
                }}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Design & Tools — full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.4 }}
        style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '2rem', backdropFilter: 'blur(10px)', marginBottom: '1.5rem'
        }}
        whileHover={{ borderColor: 'rgba(230,57,70,0.3)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span style={{ color: '#e63946', fontSize: '1.2rem' }}>{skillGroups[4].icon}</span>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{skillGroups[4].title}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {skillGroups[4].skills.map((skill, j) => (
            <span key={j} style={{
              background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)',
              borderRadius: 50, padding: '0.35rem 1rem', fontSize: '0.85rem',
              color: '#e0e0e0', fontWeight: 500
            }}>{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills + Languages */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: '2rem'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ color: '#e63946', fontSize: '1.2rem' }}><FiUsers /></span>
            <h3 style={{ fontWeight: 700, color: '#ffffff' }}>Soft Skills</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {softSkills.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 10,
                padding: '0.75rem 1rem', color: '#a0a0b0', fontWeight: 500
              }}>◆ {s}</div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: '2rem'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ color: '#e63946', fontSize: '1.2rem' }}><FiGlobe /></span>
            <h3 style={{ fontWeight: 700, color: '#ffffff' }}>Languages</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {languages.map((l, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 10,
                padding: '0.75rem 1rem', color: '#a0a0b0', fontWeight: 500
              }}>◆ {l}</div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  </section>
);

export default Skills;