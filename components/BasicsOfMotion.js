import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        // This will help to animate the button when it is clicked
        layout
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            style={{
              width: "150px",
              height: "150px",
              background: "black",
            }}
            initial={{
              scale: 0,
              rotate: "0deg",
              y: 0,
            }}
            animate={{
              scale: 1,
              rotate: "180deg",
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              scale: 0,
              rotate: "0deg",
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              // times is used to define the time of the y animation at each point
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
