import { motion } from "motion/react";
import Icon from "../components/Icon";
import { aboutMe, profile } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Sobre() {
  return (
    <>
      <header className="hero hero-compact">
        <div className="hero-content">
          <motion.span
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Icon name="folder-open" /> Portfólio
          </motion.span>
        </div>
      </header>

      <main className="about-card">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <h1 style={{ fontSize: "2.6rem", marginBottom: 6, fontFamily: "Orbitron, sans-serif" }}>{aboutMe.title}</h1>
          <span className="about-subtitle">{aboutMe.subtitle}</span>

          {aboutMe.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial="hidden"
              animate="show"
              custom={i + 1}
              variants={fadeUp}
            >
              {p}
            </motion.p>
          ))}

          <div className="mini-stats">
            {aboutMe.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="mini-stat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                whileHover={{ x: 4, borderColor: "rgba(0,255,65,0.5)" }}
              >
                <Icon name={stat.icon} />
                <span className="mini-stat-label">{stat.label}</span>
                <span className="mini-stat-value">{stat.value}</span>
              </motion.div>
            ))}
          </div>

          <button className="btn-glitch" disabled>
            <Icon name="chevronRight" /> Currículo em Breve
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div className="photo-frame" whileHover={{ scale: 1.02, rotate: -1 }}>
            <img src="/foto-perfil.jpg" alt="João Carlos" />
          </motion.div>

          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="envelope" />
              </span>
              <span>
                <span className="contact-label">E-mail</span>
                <a className="contact-value" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="github" />
              </span>
              <span>
                <span className="contact-label">GitHub</span>
                <a className="contact-value" href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Kaereze
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="whatsapp" />
              </span>
              <span>
                <span className="contact-label">WhatsApp</span>
                <a className="contact-value" href={profile.whatsapp} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="location-dot" />
              </span>
              <span>
                <span className="contact-label">Localização</span>
                <span className="contact-value">{profile.location}</span>
              </span>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
