import React from 'react';
import CV from '../../assets/coreysumma.pdf';
// import {BsChatSquareTextFill} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Get In Touch
      </a>
    </div>
  );
};

export default CTA;
