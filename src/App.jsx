/* eslint-disable consistent-return */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import StickyNav from "./components/stickynav/StickyNav";
import Footer from "./components/footer/Footer";

export default function App() {
  const [bounceSocials, setBounceSocials] = useState(false);

  const handleSocialsAnimation = () => {
    setTimeout(() => setBounceSocials(true), 1000);
    setTimeout(() => setBounceSocials(false), 1460);
  };

  return (
    <>
      <StickyNav handleSocialsAnimation={handleSocialsAnimation} />
        <Header handleSocialsAnimation={handleSocialsAnimation} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Intro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Experience />
      </motion.div>
      <Portfolio />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Testimonials />
      </motion.div>
      <Footer bounceSocials={bounceSocials} />
    </>
  );
}
