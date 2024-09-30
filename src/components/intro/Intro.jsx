import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiUserStarFill } from "react-icons/ri";
import ME from "../../assets/me3.png";
import "./intro.css";

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
              <h5>Development Experience</h5>
              <small> {">"} 1 Year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I&apos;m curious, driven, and motivated by creativity and accomplishments
            that have a meaningful impact on both the product and overall user
            experience. I have a collaborative spirit and love working with
            great teams to achieve shared success. Feel free to explore some of
            my projects, and don&apos;t hesitate to reach out to me with any
            questions or opportunities you may have.
          </p>
        </div>
      </div>
    </section>
  );
}
