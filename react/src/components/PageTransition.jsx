import { motion } from "motion/react";

const variants = {
  initial: { opacity: 0, y: 28, scale: 0.985, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, scale: 0.985, filter: "blur(4px)" },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", flexDirection: "column", flex: 1 }}
    >
      {children}
    </motion.div>
  );
}
