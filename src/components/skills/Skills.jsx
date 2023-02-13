import React from "react";
import "./Skills.css";
import Web from "./Web";
import Software from "./Software";
import Other from "./Other";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Techincal Skills</span>

      <div className="skills-container container grid">
        <Web />
        <Software />
        <Other />

      </div>
    </section>
  );
};

export default Skills;