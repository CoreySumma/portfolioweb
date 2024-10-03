import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";
import projects from "./Projects";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Things I&apos;ve worked on:</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((pro) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="portfolio__item"
            key={pro.id}
          >
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github && (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Take a Look
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
