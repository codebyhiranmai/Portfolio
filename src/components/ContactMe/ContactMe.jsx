import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="src\assets\mail.png"
            text="hiranmaikuruvella@gmail.com"
          />
          <ContactInfoCard
            iconUrl="src\assets\github.png"
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
