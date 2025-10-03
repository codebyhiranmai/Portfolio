import React from "react";
import "./SkillCard.css";

export default function SkillCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <span>{title}</span>
        <img src={iconUrl} alt={title} />
      </div>
    </div>
  );
}
