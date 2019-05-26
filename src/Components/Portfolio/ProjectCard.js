import React from "react";
import { ProjectCardDiv } from "./style.js";
import { LinkIcon } from "../General";
import TechniqueIcon from "./TechniqueIcon.js";

function ProjectCard({
  id,
  name,
  img,
  description,
  projectPage,
  links,
  techniques
}) {
  let bgImg = require("../../Media/phone/" + String(img));

  return (
    <ProjectCardDiv>
      <div className="card-body">
        <div className="card-side side-back ">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div>
            <div id="techniqueIcons">
              {techniques.map(technique => (
                <TechniqueIcon key={id + technique} technique={technique} />
              ))}
            </div>
            <div>
              <div id="projectLinks">
                {links.map(link => (
                  <LinkIcon key={id + link.linkType} {...link} />
                ))}
              </div>
              <div id="learnMoreContainer">
                <a id="learnMoreBtn" href={projectPage}>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card-side side-front"
          style={{
            backgroundImage: "url(" + bgImg + ")",
            backgroundSize: "cover"
          }}
        >
          <div className="projectCardFront" key="front" />
        </div>
      </div>
    </ProjectCardDiv>
  );
}

export default ProjectCard;
