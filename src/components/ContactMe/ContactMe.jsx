import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

// ✅ Image imports
import mailIcon from "../../assets/mail.png";
import githubIcon from "../../assets/github.png";

export default function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={mailIcon}
            text="hiranmaikuruvella@gmail.com"
          />
          <ContactInfoCard
            iconUrl={githubIcon}
            text="https://github.com/codebyhiranmai"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
