import { motion } from "motion/react";
import Icon from "../components/Icon";
import { mailAnalytics } from "../data/portfolio";

const maxHoteis = Math.max(...mailAnalytics.agents.map((a) => a.hoteis));
const BASE = import.meta.env.BASE_URL;

export default function MailAnalytics() {
  return (
    <>
      <header className="hero" style={{ minHeight: "auto", paddingTop: 50, paddingBottom: 10 }}>
        <div className="hero-content" style={{ maxWidth: 900 }}>
          <h1 className="sr-only">Mail Analytics</h1>

          <motion.div
            className="ma-brain-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={`${BASE}cerebro.png`}
              alt=""
              className="ma-brain-side"
              aria-hidden="true"
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={`${BASE}cerebro-analitico.png`}
              alt="Diagrama do Mail Analytics: e-mails do Outlook processados por IA e organizados em planilhas"
              className="ma-brain-center"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={`${BASE}cerebro.png`}
              alt=""
              className="ma-brain-side"
              aria-hidden="true"
              style={{ transform: "scaleX(-1)" }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>

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
          <motion.div
            key={step.title}
            className="roadmap-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="roadmap-icon-circle">
              <Icon name={step.icon} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
