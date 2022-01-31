import React from "react";
import "./ProjectsCard.css";

export default function ProjectsCard({cardInfo}) {
    return (
      <div className="projects-card">
        <div className="projects-banner">
          <div className="projects-div-company">
            <h5 className="projects-text-company">{cardInfo.projectName}</h5>
          </div>
        </div>
        <div className="projects-text-details">
          <h5
            className="projects-text-role"
          >
            {cardInfo.projectType}
          </h5>
          <p
            className="subTitle projects-text-desc"
          >
            {cardInfo.projectDesc}
          </p>
          <div class='projectBtn_wrap'>
            <a href={cardInfo.link} class='projectsBtn' target='_blank' rel='noreferrer'>View Demo</a>
          </div>
        </div>
      </div>
    );
  }