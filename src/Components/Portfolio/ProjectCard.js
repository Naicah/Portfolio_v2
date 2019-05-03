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

  let bgImg = require("../../Media/" + String(img));

  let flipped = false;
  //   let flipped = true;

  function flipCard() {
    console.log(flipped);
    flipped = !flipped;
  }

  let front = [];
  front.push(
    <div className="projectCardBack">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div>
        <div id="techniqueIcons">{techniqueIcons}</div>
        <div>
          <div id="projectLinks">{linkIcons}</div>
          <div id="learnMoreContainer">
            <a id="learnMoreBtn" href={projectPage}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  let back = [];
  back.push(
    <div
      className="projectCardFront"
      style={{ backgroundImage: "url(" + bgImg + ")" }}
    />
  );

  let show;

  switch (flipped) {
    case true:
      show = back;
      break;
    default:
      show = front;
  }

  return (
    <ProjectCardDiv id={id + "projectCardDiv"} onclick={flipCard}>
      {show}
    </ProjectCardDiv>
  );
}

export default ProjectCard;
