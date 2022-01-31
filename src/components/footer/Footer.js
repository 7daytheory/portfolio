import React from "react";
import "./Footer.css";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Matthew Lowe Portfolio
        </p>
        <p className="footer-text">
          <a href="https://github.com/7daytheory/portfolio">
          </a>
        </p>
      </div>
    </Fade>
  );
}
