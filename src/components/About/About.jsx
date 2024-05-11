import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="bg-slate-200">
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img id="profile-img" src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I'm a driven web development student with a strong foundation in
                front-end technologies. I'm particularly skilled in building
                dynamic and interactive user interfaces using React.js and
                crafting clean, responsive styles with CSS and Tailwind CSS.
              </p>
              <p>
                My passion lies in creating user-centric experiences, and I
                leverage my knowledge of Javascript to bring those experiences
                to life. Currently, I'm expanding my skillset by learning
                TypeScript for a more robust development environment. To
                complement my front-end capabilities, I'm delving into backend
                development with MongoDB and exploring its potential for
                data-driven applications.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>TailwindCSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>6+</h1>
            <p>Months of experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>9+</h1>
            <p>Projects completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Completed courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
