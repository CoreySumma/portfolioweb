import React from "react";
import { BsChevronRight } from "react-icons/bs";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

export default function Header({ handleSocialsAnimation }) {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Corey Summa</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA handleSocialsAnimation={handleSocialsAnimation} />
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
