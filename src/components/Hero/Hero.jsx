import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero bg-slate-50">
      <img id="profile-img" src={profile_img} alt="" />
      <h1>
        <span>I'm David Cárdenas</span>
        <br />
        Web developer based on Coahuila, México
      </h1>
      <p>
        I'm a passionate web development student, turning ideas into interactive
        experiences. I'm always eager to learn and create beautiful,
        user-friendly websites.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1TnOIJgliNxnjaDStp-U32sZIJ79OiM06/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
