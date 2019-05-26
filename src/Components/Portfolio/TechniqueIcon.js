import React from "react";
import styled from "styled-components";

export const TechniqueIconDiv = styled.div`
  color: var(--color-dark-1);
  font-size: var(--font-size-m);
  padding: 0.2em;

  .tooltip .tooltiptext {
    width: 90px;
  }
`;

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

export default TechniqueIcon;
