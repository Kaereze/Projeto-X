import { motion } from "motion/react";
import Icon from "../components/Icon";
import { skillGroups } from "../data/portfolio";
import useTilt from "../hooks/useTilt";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" } }),
};

function SkillCard({ item, index }) {
  const tilt = useTilt();
  return (
    <motion.a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel={item.link.startsWith("http") ? "noreferrer" : undefined}
      className="card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, borderColor: "rgba(0,255,65,0.5)" }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ textDecoration: "none", ...tilt.style }}
    >
      <Icon name={item.icon} className="tech-icon" style={{ color: item.color }} />
      <h2>{item.name}</h2>
      <p className="skill-desc">{item.desc}</p>
      <div className="skill-tags">
        {item.tags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </motion.a>
  );
}

export default function Skills() {
  return (
    <>
      <header className="hero hero-compact">
        <div className="hero-content">
          <span className="badge">
            <Icon name="code" /> Tech Stack
          </span>
          <h1 style={{ fontFamily: "Orbitron, sans-serif", fontSize: "2.4rem" }}>Minhas Habilidades</h1>
        </div>
      </header>

      <div className="stats-row">
        <motion.div className="stat-box" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="stat-number">9</span>
          <span className="stat-label">Tecnologias</span>
        </motion.div>
        <motion.div className="stat-box" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="stat-number">26%</span>
          <span className="stat-label">Nível Médio</span>
        </motion.div>
        <motion.div className="stat-box" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <span className="stat-number">1</span>
          <span className="stat-label">Em Aprendizado</span>
        </motion.div>
      </div>

      {skillGroups.map((group) => (
        <div key={group.title}>
          <h2 className="section-title">
            {group.title.split("&")[0]}
            {group.title.includes("&") && <>&amp; <span>{group.title.split("&")[1]}</span></>}
          </h2>
          <div className="card-grid">
            {group.items.map((item, i) => (
              <SkillCard item={item} index={i} key={item.name} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
