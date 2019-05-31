import React, { useState } from "react";
import { ExperienceDiv } from "./style.js";

function Experience({ type, name, at, date, text }) {
  const [hidden, setHidden] = useState(true);

  const toggleDetails = () => {
    setHidden(!hidden);
  };

  let experienceColor = "black";

  switch (type) {
    case "job":
      experienceColor = "var(--color-dark-1)";
      break;
    case "education":
      experienceColor = "var(--color-dark-2)";
      break;
    case "extra":
      experienceColor = "var(--color-accent)";
      break;
    // no default
  }

  return (
    <ExperienceDiv onClick={toggleDetails}>
      <div
        className="experienceHeader"
        style={{ backgroundColor: experienceColor }}
      >
        <div className="experienceTitle">
          <p>
            {name}
            <span>|</span>
            {at}
          </p>
        </div>
        <p className="experienceDate">{date}</p>
      </div>
      <div
        className={hidden ? "experienceDetails hidden" : "experienceDetails"}
        style={{ borderColor: experienceColor }}
      >
        <p className="experienceText">{text}</p>
      </div>
    </ExperienceDiv>
  );
}

export default Experience;
