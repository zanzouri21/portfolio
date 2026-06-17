import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
    padding: '0.9rem 1.2rem', color: '#fff', fontSize: '0.95rem',
    outline: 'none', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.3s'
  };

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <p className="section-title">Get In Touch</p>
          <div className="accent-line" />
          <p className="section-subtitle">Have a project in mind? I'd love to hear from you!</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ color: '#e63946', fontSize: '1.4rem' }}><FiSend /></span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Let's Connect</h3>
            </div>
            <p style={{ color: '#a0a0b0', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm always open to discussing new opportunities, interesting projects,
              or simply having a chat about technology and development. Don't hesitate to reach out!
            </p>

            {[
              { icon: <FiMail />, label: 'Email', value: 'zanzouri.21@gmail.com' },
              { icon: <FiPhone />, label: 'Phone', value: '(+216) 46 27 62 14' },
              { icon: <FiMapPin />, label: 'Location', value: 'Gabès, Tunisia' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e63946'
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#606070' }}>{item.label}</div>
                  <div style={{ color: '#fff', fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {[
                { icon: <FiGithub />, href: 'https://github.com/zanzouri21?tab=repositories', label: 'GitHub' },
                { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer">
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#a0a0b0', fontSize: '1.2rem', cursor: 'pointer', transition: 'all 0.3s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,57,70,0.1)'; e.currentTarget.style.color = '#e63946'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#a0a0b0'; }}
                  >{s.icon}</div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '2.5rem'
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ color: '#a0a0b0', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>Name</label>
                <input name="name" value={form.name} onChange={handle}
                  placeholder="Your full name" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#e63946'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ color: '#a0a0b0', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>Email</label>
                <input name="email" value={form.email} onChange={handle}
                  placeholder="your.email@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#e63946'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ color: '#a0a0b0', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Tell me about your project..." rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#e63946'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button onClick={submit} style={{
                background: sent ? 'linear-gradient(135deg,#2ecc71,#27ae60)' : 'linear-gradient(135deg,#e63946,#ff4757)',
                border: 'none', borderRadius: 12, padding: '1rem',
                color: '#fff', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.3s'
              }}>
                <FiSend /> {sent ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;