import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Lorem ipsum</span> dolor sit amet consectetur adipisicing
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi
        necessitatibus quam asperiores facere cumque dolor ea beatae,
        repudiandae ex odio mollitia, vel reprehenderit animi. Quasi accusantium
        iste praesentium libero.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
