import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Icon from "./Icon";
import { navLinks, profile } from "../data/portfolio";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="mobile-topbar">
        <span className="mobile-topbar-logo">
          <Icon name="terminal" /> {profile.name}
        </span>
        <button
          className="side-nav-toggle"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="side-nav"
          onClick={() => setIsOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "inline-flex" }}
            >
              <Icon name={isOpen ? "xmark" : "bars"} />
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <motion.nav
        id="side-nav"
        className="side-nav"
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
      >
        <div className="side-nav-top">
          <motion.span
            className="side-nav-logo"
            animate={{
              boxShadow: [
                "0 0 10px rgba(0,255,65,0.4)",
                "0 0 18px rgba(0,255,65,0.8)",
                "0 0 10px rgba(0,255,65,0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="terminal" />
          </motion.span>
          <h2 className="side-nav-name">{profile.name}</h2>
          <span className="side-nav-role">DESENVOLVEDOR</span>
        </div>

        <motion.ul className="side-nav-links" variants={listVariants} initial="hidden" animate="show">
          {navLinks.map((link) => (
            <motion.li key={link.to} variants={itemVariants}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="side-nav-active-bar"
                        className="side-nav-active-bar"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Icon name={link.icon} />
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        <div className="side-nav-bottom">
          <div className="side-nav-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <span className="disabled" title="LinkedIn em breve">
              <Icon name="linkedin" />
            </span>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" />
            </a>
          </div>
          <p className="side-nav-copy">© 2026 {profile.name}</p>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="side-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
