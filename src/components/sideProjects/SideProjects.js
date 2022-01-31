import React from "react";
import "./SideProjects.css";
import {sideProjects} from "../../content";
import {Fade} from "react-reveal";
import ProjectsCard from "../projectsCard/ProjectsCard";

export default function SideProjects() {
  if (sideProjects.display) {
    return (
      <div id="">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="projects">
            <div>
              <h1 className="experience-heading">Side Projects</h1>
              <div className="experience-cards-div">
                {sideProjects.projects.map((card, i) => {
                  return (
                    <ProjectsCard
                      key={i}
                      cardInfo={{
                        projectName: card.projectName,
                        projectDesc: card.projectDesc,
                        projectType: card.projectType,
                        link: card.projectLink,
                        projectImage: card.projectImage
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}