import React from "react";
import Experience from "./Experience.js";

import experiences from "./experiences.js";

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
      />
    );
  });

  return (
    <div className="mainContainer">
      <h1>Knowledge</h1>
      {experienceList}
    </div>
  );
}

export default Knowledge;
