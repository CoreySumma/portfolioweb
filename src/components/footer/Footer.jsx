import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <section id="contact">
        <a href="#contact" className="footer__logo"></a>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/coreysumma/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/CoreySumma" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="https://instagram.com/coreysumma" target="_blank" rel="noreferrer" ><AiFillInstagram /></a>
          <a href="mailto:CoreySumma@gmail.com" target="_blank" rel="noreferrer" ><AiOutlineMail /></a>
        </div>
      </section>
    </footer>
  );
}