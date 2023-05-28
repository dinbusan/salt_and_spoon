import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes