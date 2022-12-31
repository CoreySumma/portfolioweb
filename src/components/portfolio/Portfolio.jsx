import React from 'react';
import IMG1 from '../../assets/spaceman.png';
import IMG2 from '../../assets/codemonk.png';
import IMG3 from '../../assets/mistate.png';
import IMG4 from '../../assets/spotlabs.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'SpaceMan',
      img: IMG1,
      description:
        'A word guessing game that generates a random word and allows the user 5 attempts at guessing correct letters within it.  Do you have what it takes to save the Spaceman?',
      technologies: 'Vanilla Javascript',
      link: 'https://coreysumma.github.io/Spaceman/',
      github: 'https://github.com/CoreySumma/Spaceman',
    },
    {
      id: 2,
      title: 'SpotLabs',
      img: IMG4,
      description:
        'A collaborate playlist application that allows a user to add/edit/delete songs on playlists that they create with their friends and family by embedding spotify directly onto the app.',
      technologies: 'HTML | CSS |Javascript | Node | Express | MongoDB | Mongoose | Google Oauth',
      link: 'https://mongoose-playlist-926.herokuapp.com/',
      github: 'https://github.com/CoreySumma/mongoose-playlist',
    },
    {
      id: 3,
      title: '[codemonk]',
      img: IMG2,
      description: 'A full CRUD, Django driven collaboration for students to challenge and learn from one another by posting coding challenges, commenting on posts, and liking comments.',
      technologies: ' | HTML | CSS | Python | Django | Javascript',
      link: 'http://codemonk-wars.herokuapp.com/',
      github: 'https://github.com/ultimoakim/-codemonk-',
    },
    {
      id: 4,
      title: 'MiState',
      img: IMG3,
      description:
        'A MERN stack mindfullness app designed to track a users emotional state. As a user you are able to edit entries and clean the slate to start each week fresh! Are you ready for some self reflection?',
      technologies: 'HTML | CSS | JavaScript | React | Node | Express | MongoDB | Bootstrap',
      link: 'https://mistate.herokuapp.com/',
      github: 'https://github.com/CoreySumma/mern-mistate',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
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
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
