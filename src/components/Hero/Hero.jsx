import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
