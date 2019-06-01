import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import TreeHouseAPI from "./TreeHouseAPI";
import { LinkButton } from "../General";
import { useElementLocation } from "../../locationTracker";
import { experiences } from "../../database";
import { KnowledgeDiv } from "./style";

function Knowledge() {
  const anchorElement = useElementLocation();

  return (
    <KnowledgeDiv className="mainContainer" id="knowledge" ref={anchorElement}>
      <h1>Knowledge</h1>
      <div className="skillsExperienceContainer">
        <div id="skillsContainer">
          <Skills />
          <TreeHouseAPI />
        </div>
        <div id="experienceContainer">
          {experiences
            .filter(experience => experience.filter === "IT")
            .map(experience => (
              <Experience
                key={experience.name + experience.date}
                {...experience}
              />
            ))}
        </div>
      </div>
      <LinkButton url="Resume" text="See full resume" id="linkButtonToResume" />
    </KnowledgeDiv>
  );
}

export default Knowledge;
