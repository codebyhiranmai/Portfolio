import React from "react";
import "./ProjectsCard.css";

export default function ProjectsCard({ details }) {
  return (
    <div className="projects-details-card">
      <h6>{details.title}</h6>

      <div className="skills-used">{details.skills_used}</div>

      <ul>
        {details.about.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
