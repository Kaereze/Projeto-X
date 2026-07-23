import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { projects } from "../data/portfolio";
import useTilt from "../hooks/useTilt";

const MotionLink = motion.create(Link);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
};

function ProjectCard({ project, index }) {
  const tilt = useTilt();

  const cardBody = (
    <>
      <div className="project-icon-circle">{project.icon === "X" ? <span>X</span> : <Icon name={project.icon} />}</div>
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <div className="skill-tags">
        {project.tags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <span className="btn-glitch" style={{ alignSelf: "flex-start" }}>
        <Icon name="chevronRight" /> Ver Projeto
      </span>
    </>
  );

  const shared = {
    className: "card",
    custom: index,
    variants: cardVariants,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.3 },
    whileHover: { y: -8, borderColor: "rgba(0,255,65,0.5)" },
    onMouseMove: tilt.onMouseMove,
    onMouseLeave: tilt.onMouseLeave,
    style: { textDecoration: "none", ...tilt.style },
  };

  return project.external ? (
    <motion.a href={project.link} target="_blank" rel="noreferrer" {...shared}>
      {cardBody}
    </motion.a>
  ) : (
    <MotionLink to={project.link} {...shared}>
      {cardBody}
    </MotionLink>
  );
}

export default function Projetos() {
  return (
    <>
      <header className="hero hero-compact">
        <div className="hero-content">
          <span className="badge">
            <Icon name="folder-open" /> Repositórios
          </span>
          <h1 style={{ fontFamily: "Orbitron, sans-serif", fontSize: "2.4rem" }}>Meus Projetos</h1>
        </div>
      </header>

      <div className="card-grid">
        {projects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.title} />
        ))}
      </div>
    </>
  );
}
