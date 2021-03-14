import React from "react";
import "./Skills.css";
import {illustration, skillsSection} from "../../content";
import SoftwareSkill from "../softwareSkill/SoftwareSkill";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/images/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  const {isDark} = false;
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
              </p>
              <SoftwareSkill />
              <div>
                {skillsSection.skills.map((skills, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        isDark
                          ? "dark-mode subTitle skills-text"
                          : "subTitle skills-text"
                      }
                    >
                      {skills}
                    </p>
                  );
                })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
