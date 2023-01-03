import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/taylor-romoser/',
      name: 'Taylor Romoser',
      role: 'Classmate',
      test: 'Corey has a strong foundation in both JavaScript and Python, and has a particularly impressive understanding of popular frameworks such as Express, React, and Django. Corey consistently produces high quality code and is always looking for ways to improve his skills and knowledge.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/kristina-lim-01/',
      name: 'Kris Lim',
      role: 'Team member',
      test: "It was a pleasure collaborating with Corey on our project. He showed great determination and creativity in problem solving and trouble shooting any issues we had during development.  I would be happy to work with him in the future!",
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/akuu-khan/',
    //   name: 'akbar (Aku) Khan',
    //   role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
    //   test: 'I worked with Meri in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    // },
    // {
    //   id: 4,
    //   link: 'https://www.linkedin.com/in/isaicespedes/',
    //   name: 'Isai Céspedes',
    //   role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    //   test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    // },
    // {
    //   id: 5,
    //   link: 'https://www.linkedin.com/in/hamzaalitarar/',
    //   name: 'Hamza Tarar',
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Meri has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>What others say about me</h5>
      <h2>Peer Feedback</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials