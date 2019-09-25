import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children, key = "" }) => {
  const duration = 0.75;
  const delay = 0.2;

  const variants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration,
        delay,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
