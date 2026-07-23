import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { profile, floatingTech } from "../data/portfolio";

const MotionLink = motion.create(Link);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <header className="hero-scene">
        <div className="hero-scene-floor" aria-hidden="true" />

        {floatingTech.map((tech, i) => (
          <motion.div
            key={tech.icon}
            className="floating-tech"
            style={tech.pos}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
              boxShadow: [
                "0 0 14px rgba(0,255,65,0.35)",
                "0 0 22px rgba(0,255,65,0.6)",
                "0 0 14px rgba(0,255,65,0.35)",
              ],
            }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.1 },
              scale: { duration: 0.5, delay: i * 0.1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
            whileHover={{ scale: 1.15 }}
          >
            <Icon name={tech.icon} />
          </motion.div>
        ))}

        <div className="hero-scene-content">
          <motion.h1
            className="jc-monogram"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: [
                "drop-shadow(0 0 20px rgba(0,255,65,0.6)) drop-shadow(0 0 45px rgba(0,255,65,0.3))",
                "drop-shadow(0 0 28px rgba(0,255,65,0.85)) drop-shadow(0 0 60px rgba(0,255,65,0.45))",
                "drop-shadow(0 0 20px rgba(0,255,65,0.6)) drop-shadow(0 0 45px rgba(0,255,65,0.3))",
              ],
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              filter: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            JC
          </motion.h1>

          <motion.p
            className="hero-scene-tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Criando <span>soluções</span>, construindo o <span>futuro</span>.
          </motion.p>

          <motion.a
            href="#perfil"
            className="btn-glitch"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "#000" }}
            whileTap={{ scale: 0.97 }}
          >
            Ver Meu Trabalho <Icon name="chevronRight" />
          </motion.a>
        </div>

        <motion.div
          className="hero-scene-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Icon name="mouse" />
          <span>Role para explorar</span>
        </motion.div>
      </header>

      <section className="hero" id="perfil">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span className="badge" variants={itemVariants}>
            <Icon name="terminal" /> {profile.role}
          </motion.span>

          <motion.h2 className="text-gradient" style={{ fontSize: "2.6rem", fontFamily: "Orbitron, sans-serif" }} variants={itemVariants}>
            {profile.name}
          </motion.h2>

          <motion.p className="subtitulo-cyber" variants={itemVariants}>
            <span className="cash">$</span> {profile.bio}
          </motion.p>

          <motion.div className="quick-contact" variants={itemVariants}>
            <a href={`mailto:${profile.email}`}>
              <Icon name="envelope" /> Email
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </motion.div>

          <motion.div className="botoes-cyber" variants={itemVariants}>
            <MotionLink to="/sobre" className="btn-glitch" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Ver Minha Jornada
            </MotionLink>
            <MotionLink to="/skills" className="btn-glitch alt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Acessar Skills
            </MotionLink>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
