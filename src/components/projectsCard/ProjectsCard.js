import React, {createRef} from "react";
import "./ProjectsCard.css";

export default function ProjectsCard({cardInfo, isDark}) {
    return (
      <div className={isDark ? "projects-card-dark" : "projects-card"}>
        <div className="projects-banner">
          <div className="projects-div-company">
            <h5 className="projects-text-company">{cardInfo.projectName}</h5>
          </div>
        </div>
        <div className="projects-text-details">
          <h5
            className={
              isDark
                ? "projects-text-role dark-mode-text"
                : "projects-text-role"
            }
          >
            {cardInfo.projectType}
          </h5>
          <p
            className={
              isDark
                ? "subTitle projects-text-desc dark-mode-text"
                : "subTitle projects-text-desc"
            }
          >
            {cardInfo.projectDesc}
            
            {cardInfo.link}
          </p>
        </div>
      </div>
    );
  }