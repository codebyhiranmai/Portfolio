// import React from "react";
// import "./ContactForm.css";

// export default function ContactForm() {
//   return (
//     <div className="contact-form-content">
//       <form>
//         <div className="name-container">
//           <input type="text" name="firstname" placeholder="First Name" />
//           <input type="text" name="lastname" placeholder="Last Name" />
//         </div>

//         <input type="text" name="email" placeholder="Email" />
//         <textarea type="text" name="message" placeholder="Message" rows={3} />

//         <button>SEND</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };

  return (
    <div className="contact-form-content">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam protection */}
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}
