import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.015;

const FlippingText = ({ title }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative hidden overflow-hidden cursor-pointer font-interT whitespace-nowrap sm:block"
      variants={{
        hovered: {
          transition: {
            staggerChildren: STAGGER,
          },
        },
      }}
    >
      {/* First layer of text */}
      <div>
        {title.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Second layer of text with staggered effect */}
      <div className="absolute inset-0">
        {title.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            key={`hover-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlippingText;
