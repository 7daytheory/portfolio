import React from "react";
import "./Navigation.css";

let isDark = true;

function Navigation() {
return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">Matt Lowe</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{color: "white"}}
      >
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
        </li>
      </ul>
    </header>
);
}
export default Navigation;