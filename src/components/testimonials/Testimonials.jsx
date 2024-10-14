/* eslint-disable import/no-unresolved */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 7,
      link: "https://www.linkedin.com/in/summerely/",
      name: "Jay Bollinger",
      role: "Product Manager",
      test: "Verosint is a seed-funded startup that uses AI to detect and prevent threats to accounts on your platform. We hired Corey as a FE developer for the Verosint application, and I was his product manager. What makes Corey so incredibly awesome is his natural ability to communicate effectively (very important in our 100% remote/WFH company), flexibility and receptiveness to changes in projects and priorities, and that he repeatedly rose to the occasion on several, very complex FE projects. See the Circadian Rhythm tile in the product demo on our verosint.com website? Or the Location History tile that shows pie charts of successful vs. failed login attempts by country? Yeah, those were all informed, developed, tested, and shipped by Corey. I wholeheartedly recommend Corey for your company and would gladly be a referral.",
    },
    {
      id: 6,
      link: "https://www.linkedin.com/in/summerely/",
      name: "Summer Ely",
      role: "Frontend Software Engineer",
      test: "I had the pleasure of working closely with Corey during his time at Verosint, where we were the two frontend developers. He consistently demonstrated a strong work ethic and eagerness to learn. His positive attitude, combined with his dedication, makes him a valuable team member.",
    },
    {
      id: 5,
      link: "https://www.linkedin.com/in/duane-teeters/",
      name: "Duane Teeeters",
      role: "Manager",
      test: "Corey did a great job as a full-stack developer and was able to quickly contribute to our start-up.  He overhauled our hastily-thrown-together set of Python scripts and put them into more structured Django templates. He got things working in both mobile and desktop and built out a smooth check out process. He has a good sense for design and UI.He is always curious and looking to improve the overall product. Was consistent, on time and communicated every step of the way.",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/skimalee/",
      name: "Stephanie Lee",
      role: "Sr Instructional Associate",
      test: "As Corey's former Software Engineering Immersive instructor at General Assembly, I fully support and recommend Corey to be a part of any Software Engineering team as a full-stack developer. Corey was always collaborative, motivated and hardworking. He was always very pro-active in learning and highly engaged. He also demonstrated being a great team player and is just an all-around outstanding person! It was always a pleasure working with him! He would be an excellent addition to any team!",
    },
    {
      id: 1,
      link: "https://www.linkedin.com/in/andrew-krauss-0063ab109/",
      name: "Andrew Krauss",
      role: "Classmate",
      test: "Corey works extremely hard and is always willing to lend a helping hand or collaborate on a project. He's smart and has a strong work ethic that is infectious and promotes a high degree of productivity. I admire the passion he shows for his craft and his hunger to learn more and more about it. Working with him was a pleasure and I hope I get the opportunity to do so again in the near future.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/taylor-romoser/",
      name: "Taylor Romoser",
      role: "Classmate",
      test: "Corey has a strong foundation in both JavaScript and Python, and has a particularly impressive understanding of popular frameworks such as Express, React, and Django. Corey consistently produces high quality code and is always looking for ways to improve his skills and knowledge.",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/kristina-lim-01/",
      name: "Kris Lim",
      role: "Team Member",
      test: "Corey is a reliable teammate and a hardworking programmer that I had the pleasure of collaborating and working with. During our time for a group project, he continued to impress me with his insight into some problems we had run into and communicated it with precision. His dependability and strong work ethic is what makes him a great developer and a teammate.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>What others say about me</h5>
      <h2>Peer Feedback</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={40}
        loop
        slidesPerView={1}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
