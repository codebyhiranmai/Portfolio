import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="" alt="" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Projects</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button
              className="contact-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Hiranmai_React_Frontend_Fresher.pdf";
                link.download = "Hiranmai_Resume.pdf";
                link.click();
              }}
            >
              📄 Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
