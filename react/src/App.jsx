import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import MatrixBackground from "./components/MatrixBackground";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skills from "./pages/Skills";
import Projetos from "./pages/Projetos";
import MailAnalytics from "./pages/MailAnalytics";
import Contato from "./pages/Contato";

export default function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <MatrixBackground />
      <Sidebar />

      <div className="page-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/sobre"
              element={
                <PageTransition>
                  <Sobre />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition>
                  <Skills />
                </PageTransition>
              }
            />
            <Route
              path="/projetos"
              element={
                <PageTransition>
                  <Projetos />
                </PageTransition>
              }
            />
            <Route
              path="/mail-analytics"
              element={
                <PageTransition>
                  <MailAnalytics />
                </PageTransition>
              }
            />
            <Route
              path="/contato"
              element={
                <PageTransition>
                  <Contato />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}
