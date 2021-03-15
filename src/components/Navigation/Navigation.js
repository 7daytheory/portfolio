import React from "react";
import "./Navigation.css";
import logo from "../../assets/images/logo.svg";

let isDark = true;

function Navigation() {
return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <img src={logo}
        alt="MATTHEW LOWE"/>
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
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#experience">WORK EXPERIENCE</a>
          </li>
          <li>
            <a href="#achievements">ACHIEVEMENTS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
        </li>
      </ul>
    </header>
);
}
export default Navigation;