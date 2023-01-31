import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { BsChevronRight } from 'react-icons/bs';

export default function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Corey Summa</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}
