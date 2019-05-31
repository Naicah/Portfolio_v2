import React from "react";
import { LinkIcon } from "../General";
import { TechniqueIconDiv, ProjectCardDiv } from "./style.js";

function TechniqueIcon({ technique }) {
  let icon;
  let tooltip;

  switch (technique.toLowerCase()) {
    case "react":
      icon = "fab fa-react";
      tooltip = "React";
      break;
    case "firebase":
      icon = "fas fa-code-branch";
      tooltip = "Firebase";
      break;
    case "vue":
      icon = "fab fa-vuejs";
      tooltip = "Vue";
      break;
    case "koa":
      icon = "fab fa-node-js";
      tooltip = "Koa";
      break;
    default:
      icon = "";
      tooltip = "";
  }

  return (
    <TechniqueIconDiv>
      <div className="tooltip">
        <i className={icon} />
        <span className="tooltiptext">{tooltip}</span>
      </div>
    </TechniqueIconDiv>
  );
}

function ProjectCard({
  id,
  name,
  img,
  description,
  projectPage,
  links,
  techniques
}) {
  let bgImg = require("../../Media/projects/" + String(img));

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
