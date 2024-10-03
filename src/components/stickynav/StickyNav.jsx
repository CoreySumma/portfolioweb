import React, { useState } from "react";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./stickyNav.css";

function StickyNav({ handleSocialsAnimation }) {
  const [activeNav, setActiveNav] = useState("#home");
  return (
<nav> 
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsClipboardCheck />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
          handleSocialsAnimation();
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default StickyNav;
