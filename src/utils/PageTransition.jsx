import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const box = {
    initial: {
      height: "100vh",
      width: "100%",
      bottom: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: { duration: 0.65, ease: [0.87, 0, 0.13, 1] },
    },
  };

  return (
    <div className="page_transition">
      <motion.div
        initial="initial"
        animate="animate"
        variants={box}
        style={{
          //   position: "relative",
          backgroundColor: "#f4ede4",
          width: "100vh",
        }}
        // onAnimationEnd={() =>
        //   (document.getElementsByClassName("page_transition").style.display =
        //     "none")
        // }
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
