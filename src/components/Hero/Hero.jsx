import React from "react";
import "./Hero.css";

import reactLogo from "../../assets/react.png";
import heroImage from "../../assets/hero.jpeg";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";

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
            <img src={reactLogo} alt="React" />
          </div>
          <img src={heroImage} alt="Hero" />
        </div>

        <div className="tech-container">
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src={htmlLogo} alt="HTML" />
          </div>
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src={cssLogo} alt="CSS" />
          </div>
          <div className="tech-icon" style={{ width: "3rem", height: "3rem" }}>
            <img src={jsLogo} alt="JavaScript" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
