import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
      className="pb-5 flex flex-wrap justify-center"
    >
      <div>About</div>
    </motion.div>
  );
};

export default About;
