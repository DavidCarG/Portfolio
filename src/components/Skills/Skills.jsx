import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Skills_data from "../../assets/skills_data";

const Skills = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Other skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Skills_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
