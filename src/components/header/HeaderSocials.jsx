import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/coreysumma/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/CoreySumma" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  );
}