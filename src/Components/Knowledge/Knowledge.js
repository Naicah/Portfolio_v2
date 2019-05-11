import React from "react";
import Experience from "./Experience.js";
import Skills from "./Skills.js";
import { LinkButton } from "../General";

import { experiences, CodeSkills } from "../../database.js";

function Knowledge() {
  return (
    <div className="mainContainer" id="knowledge">
      <h1>Knowledge</h1>
      <div id="skillsContainer">
        <Skills />
      </div>
      <div id="experienceContainer">
        {experiences.map(experience => (
          <Experience key={experience.name + experience.date} {...experience} />
        ))}
      </div>
      <LinkButton url="Resume" text="See full resumé" id="linkButtonToResume" />
    </div>
  );
}

export default Knowledge;
