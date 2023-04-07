import React from "react";
import IMG1 from "../../assets/spaceman.png";
import IMG2 from "../../assets/codemonk.png";
import IMG3 from "../../assets/mistate.png";
import IMG4 from "../../assets/spotlabs2.png";
import IMG5 from "../../assets/game_shelf.png";
import IMG6 from "../../assets/SMSss.png";
import IMG7 from "../../assets/MeatyMail.png";

import "./portfolio.css";

export default function Portfolio() {
  const soloProjects = [
    {
      id: 7,
      title: "Meaty Mail",
      img: IMG7,
      description:
        "A React application that utilizes Open AI's API to generate a summary of your emails so you can get to the meat of the matter.",
      technologies:
        "HTML | Tailwind CSS | React | Google Oauth2 | Gmail API | Open AI API",
        link: "https://gmail-ai.netlify.app/",
        github: "https://github.com/CoreySumma/oauth2-gmail-test",
      },
    {
      id: 6,
      title: "AI SMS Generator",
      img: IMG6,
      description:
        "A React application that utilizes Open AI's API, and Twilio's API to generate an AI written text to someone who is calling you so you can have some fun while filtering calls.",
      technologies:
        "HTML | CSS | React | Express | Twilio API | Open AI API",
        link: "https://sms-ai-generator.herokuapp.com/",
        github: "https://github.com/CoreySumma/sms-generator-deploy",
      },
      {
        id: 4,
        title: "MiState",
        img: IMG3,
        description:
          "A MERN stack mindfulness app designed to track a users emotional state with daily entries that are dynamically organized. Login with email: guest@email.com pw: visitor123! to take a tour of the website.",
        technologies:
          "HTML | CSS | JavaScript | React | Node | Express | MongoDB | Bootstrap",
        link: "https://mistate.herokuapp.com/",
        github: "https://github.com/CoreySumma/mern-mistate",
      },
      {
        id: 5,
        title: "Game_Shelf",
        img: IMG5,
        description:
          "An app designed to help gamers keep track of their progress for each videogame they own. Login with un: guest pw: visitor123! to take a tour of the website.",
        technologies:
          "HTML | CSS | Python | Django | AWS | PostgresQL | Materialize",
        link: "https://videogameshelf.herokuapp.com/",
        github: "https://github.com/CoreySumma/videogamecollector",
      },
      {
        id: 3,
        title: "[codemonk]",
        img: IMG2,
        description:
          "A full CRUD, Django driven collaboration for students to learn from one another by posting coding challenges, commenting on posts, and liking comments. Login with un: guest pw: visitor123! to take a tour of the website.",
        technologies:
          " HTML | CSS | Python | Django | AWS | PostgresQL | Materialize",
        link: "http://codemonk-wars.herokuapp.com/",
        github: "https://github.com/ultimoakim/-codemonk-",
      },
    // {
    //   id: 1,
    //   title: "SpaceMan",
    //   img: IMG1,
    //   description:
    //     "A word guessing game that generates a random word and allows the user 5 attempts at guessing correct letters within it.  Do you have what it takes to save the Spaceman?",
    //   technologies: "Vanilla Javascript",
    //   link: "https://coreysumma.github.io/Spaceman/",
    //   github: "https://github.com/CoreySumma/Spaceman",
    // },
    {
      id: 2,
      title: "SpotLabs",
      img: IMG4,
      description:
        "A collaborate playlist application that allows a user to add/edit/delete songs on playlists that they create with their friends and family by embedding spotify directly onto the app.",
      technologies:
        "HTML | CSS |Javascript | Node | Express | MongoDB | Mongoose | Google Oauth",
      link: "https://mongoose-playlist-926.herokuapp.com/",
      github: "https://github.com/CoreySumma/mongoose-playlist",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Take a Look
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
