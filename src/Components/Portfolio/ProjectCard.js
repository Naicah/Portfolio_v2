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
  let techniqueIcons = [];
  let linkIcons = [];

  techniques.forEach(function(technique) {
    techniqueIcons.push(<TechniqueIcon technique={technique} id={id} />);
  });

  links.forEach(function(link) {
    linkIcons.push(<LinkIcon linkType={link.linkType} url={link.url} />);
  });

  return (
    <ProjectCardDiv id={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>{techniqueIcons}</div>
      <div>
        <div id="projectLinks">{linkIcons}</div>
        <div id="learnMoreContainer">
          <a id="learnMoreBtn" href={projectPage}>
            Learn more
          </a>
        </div>
      </div>
    </ProjectCardDiv>
  );
}

export default ProjectCard;
