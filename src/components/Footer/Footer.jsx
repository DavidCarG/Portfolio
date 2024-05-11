import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img id="logo" src={footer_logo} alt="" />
          <p>
            Thank you for visiting my portfolio! I'm always open to new
            opportunities and collaborations. Stay connected to see my journey
            and updates.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Stay updated on my journey" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          Based in Coahuila, México. Available for freelance projects.
        </div>
        <div className="footer-bottom-right">
          <p>
            <a href="terms.html">Term of Services</a>
          </p>
          <p>
            <a href="privacy.html">Privacy Policy</a>
          </p>
          <p>
            <a href="contact.html">Connect with me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
