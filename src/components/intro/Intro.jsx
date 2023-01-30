import React from 'react';
// import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { RiUserStarFill } from 'react-icons/ri';
import ME from '../../assets/me3.png';
import './intro.css';

export default function Intro() {
  return (
    <section id="about">
      <h5>A little bit</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiUserStarFill className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I am a motivated and enthusiastic learner with a passion for full stack developmentment. I have found the process of learning and creating full stack applications to be enjoyable and rewarding, and I am constantly seeking new opportunities to improve my skills and knowledge. I value collaboration and have found that learning from others has been an invaluable part of my growth as a developer. In the future, I hope to continue to learn and gain experience through new opportunities and challenges.</p>
        </div>
      </div>
    </section>
  )
}