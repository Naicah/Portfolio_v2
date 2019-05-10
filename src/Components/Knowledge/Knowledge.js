import React from "react";
import Experience from "./Experience.js";
import Skills from "./Skills.js";
import { LinkButton } from "../General";

import { experiences } from "../../database.js";

function Knowledge() {
  let experienceList = [];
  experiences.forEach(function(experience) {
    experienceList.push(
      <Experience
        type={experience.type}
        name={experience.name}
        at={experience.at}
        date={experience.date}
        text={experience.text}
        key={experience.name + experience.date}
      />
    );
  });

  return (
    <div className="mainContainer">
      <h1>Knowledge</h1>
      <div id="skillsContainer">
        <Skills />
      </div>
      <div id="experienceContainer"> {experienceList}</div>
      <LinkButton url="Resume" text="See full resumé" id="linkButtonToResume" />
    </div>
  );
}

export default Knowledge;
