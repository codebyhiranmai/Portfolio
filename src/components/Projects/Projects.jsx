import React, { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import Slider from "react-slick";

export default function Projects() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function slideRight() {
    sliderRef.current.slickNext();
  }

  function slideLeft() {
    sliderRef.current.slickPrev();
  }

  return (
    <section className="projects-container">
      <h5>Projects</h5>

      <div className="projects-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>{" "}
        </div>
      </div>

      <div className="projects-content">
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectsCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
