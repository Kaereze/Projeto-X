import { useState } from "react";
import { motion } from "motion/react";
import Icon from "../components/Icon";
import { contact, profile } from "../data/portfolio";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const corpo = `Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.assunto)}&body=${encodeURIComponent(corpo)}`;
  }

  return (
    <>
      <header className="hero hero-compact">
        <div className="hero-content">
          <span className="badge">
            <Icon name="folder-open" /> Contato
          </span>
          <h1 style={{ fontFamily: "Orbitron, sans-serif", fontSize: "2.6rem" }}>Vamos Conversar?</h1>
          <p className="subtitulo-cyber">
            Tem um projeto em mente ou quer trocar uma ideia? Preencha o formulário ou entre em contato pelas redes abaixo.
          </p>
        </div>
      </header>

      <main className="contact-page">
        <div>
          <motion.div className="panel" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <div className="panel-title">Informações de Contato</div>
            <div className="contact-list">
              {contact.items.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="contact-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span>
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a className="contact-value" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="panel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="panel-title">Conecte-se</div>
            <div className="social-grid">
              <span className="social-btn disabled" title="Em breve">
                <span className="social-icon">
                  <Icon name="linkedin" />
                </span>
                <span>LinkedIn</span>
              </span>
              <motion.a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" whileHover={{ y: -4 }}>
                <span className="social-icon">
                  <Icon name="github" />
                </span>
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div className="panel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
          <div className="panel-title">Envie sua Mensagem</div>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <input id="assunto" name="assunto" type="text" placeholder="Assunto da mensagem" value={form.assunto} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="6" placeholder="Digite sua mensagem aqui..." value={form.mensagem} onChange={handleChange} required />
            </div>

            <motion.button type="submit" className="btn-glitch btn-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Icon name="paper-plane" /> Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </main>
    </>
  );
}
