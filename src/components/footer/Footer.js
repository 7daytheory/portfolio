import React from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  const {isDark} = false;
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made by Matthew Lowe")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/7daytheory/portfolio">
          </a>
        </p>
      </div>
    </Fade>
  );
}
