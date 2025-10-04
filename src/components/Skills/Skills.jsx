import React from "react";
import { useState } from "react";
import "./Skills.css";
import SkillCard from "../SkillCard/Skillcard";
import { SKILLS } from "../../utils/data";
import SkillInfoCard from "./SkillsInfoCard/SkillInfoCard";

export default function Skills() {
  const [selectedSkill, setSelectedSKill] = useState(SKILLS[0]);

  function handleSelectSkill(data) {
    setSelectedSKill(data);
  }
  return (
    <section className="skills-container">
      <h5>SKILLS</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.title}
              iconUrl={skill.icon}
              title={skill.title}
              onClick={() => {
                handleSelectSkill(skill);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}
