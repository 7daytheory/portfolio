import React from "react";
import "./Navigation.css";
import logo from "../../assets/images/logo.svg";

function Navigation() {
return (
    <header className="dark-menu header">
      <a href="/" className="logo">
        <img src={logo}
        alt="Matthew Lowe logo"/>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{color: "white"}}
      >
        <span className="navicon navicon-dark"></span>
      </label>
      <ul className="dark-menu menu">
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#experience">WORK EXPERIENCE</a>
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