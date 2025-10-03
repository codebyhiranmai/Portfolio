import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences that Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into seamless and
          visually stunning web solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="src\assets\react.png" alt="" />
          </div>
          <img src="src\assets\hero.jpeg" alt="" />
        </div>

        <div className="tech-container">
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src="src\assets\html.png" alt="" />
          </div>
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src="src\assets\css.png" alt="" />
          </div>
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src="src\assets\js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
