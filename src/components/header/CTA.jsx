import React from "react";
import CV from "../../assets/CoreySumma.pdf";

function CTA({ handleSocialsAnimation }) {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a
        href="#contact"
        onClick={handleSocialsAnimation}
        className="btn btn-primary"
      >
        Get In Touch
      </a>
    </div>
  );
}

export default CTA;
