import { motion } from "motion/react";
import Icon from "../components/Icon";
import { mailAnalytics } from "../data/portfolio";
import useTilt from "../hooks/useTilt";
import useParallax from "../hooks/useParallax";

const maxHoteis = Math.max(...mailAnalytics.agents.map((a) => a.hoteis));
const BASE = import.meta.env.BASE_URL;

function RoadmapCard({ step, index }) {
  const tilt = useTilt();
  return (
    <motion.div
      className="roadmap-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
    >
      <div className="roadmap-icon-circle">
        <Icon name={step.icon} />
      </div>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </motion.div>
  );
}

const particles = [
  { top: "6%", left: "2%", delay: 0, duration: 5 },
  { top: "18%", right: "0%", delay: 0.8, duration: 6 },
  { top: "70%", left: "-2%", delay: 1.6, duration: 5.5 },
  { top: "85%", right: "3%", delay: 0.4, duration: 4.5 },
  { top: "45%", left: "8%", delay: 2.2, duration: 6.5 },
  { top: "40%", right: "8%", delay: 1.2, duration: 5 },
];

export default function MailAnalytics() {
  const parallax = useParallax(14);

  return (
    <>
      <header className="hero" style={{ minHeight: "auto", paddingTop: 50, paddingBottom: 10 }}>
        <div className="hero-content" style={{ maxWidth: 900 }}>
          <h1 className="sr-only">Mail Analytics</h1>

          <div className="ma-brain-wrap" onMouseMove={parallax.onMouseMove} onMouseLeave={parallax.onMouseLeave}>
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="ma-particle"
                style={{ top: p.top, left: p.left, right: p.right }}
                animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            <div className="ma-brain-crop">
              <motion.img
                src={`${BASE}cerebro-analitico.png`}
                alt="Diagrama do Mail Analytics: e-mails do Outlook processados por IA e organizados em planilhas"
                className="ma-brain-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.03, 1] }}
                transition={{
                  opacity: { duration: 0.6 },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={parallax.style}
              />
            </div>
          </div>

          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "1.1rem" }}
          >
            {mailAnalytics.badge}
          </motion.span>

          <motion.p
            className="subtitulo-cyber"
            style={{ maxWidth: 640, textAlign: "center", margin: "16px auto" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {mailAnalytics.description}
          </motion.p>

          <motion.span
            className="status-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Icon name="hourglass-half" /> {mailAnalytics.status}
          </motion.span>
        </div>
      </header>

      <div className="stats-row">
        {mailAnalytics.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-box"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title">
        Hotéis por <span>Agente</span>
      </h2>
      <div className="agent-bar-chart">
        {mailAnalytics.agents.map((agent, i) => (
          <div className="agent-bar-col" key={agent.name}>
            <span className="agent-bar-value">{agent.hoteis}</span>
            <motion.div
              className="agent-bar"
              initial={{ height: 0 }}
              whileInView={{ height: `${(agent.hoteis / maxHoteis) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
            <span className="agent-bar-label">{agent.name}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">
        Como <span>Funciona</span>
      </h2>
      <div className="roadmap-grid">
        {mailAnalytics.roadmap.map((step, i) => (
          <RoadmapCard step={step} index={i} key={step.title} />
        ))}
      </div>
    </>
  );
}
