import React from "react";
import Experience from "./Experience.js";
import Skills from "./Skills.js";
import TreeHouseAPI from "./TreeHouseAPI.js";
import { LinkButton } from "../General";
import { useElementLocation } from "../../locationTracker";

import { experiences } from "../../database.js";

function Knowledge() {
  const anchorElement = useElementLocation();

  return (
    <div className="mainContainer" id="knowledge" ref={anchorElement}>
      <h1>Knowledge</h1>
      <div className="skillsExperienceContainer">
        <div id="skillsContainer">
          <Skills />
          <TreeHouseAPI />
        </div>
        <div id="experienceContainer">
          {experiences.map(experience => (
            <Experience
              key={experience.name + experience.date}
              {...experience}
            />
          ))}
        </div>
      </div>
      <LinkButton url="Resume" text="See full resumé" id="linkButtonToResume" />
    </div>
  );
}

export default Knowledge;
