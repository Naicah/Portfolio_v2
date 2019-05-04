import React from "react";
import styled from "styled-components";

export const LinkIconDiv = styled.div`
  padding: 0.3em;
  a {
    color: var(--color-dark-1);
    font-size: var(--font-size-l);
  }
`;

function LinkIcon({ linkType, url }) {
  let icon;
  let tooltip;

  switch (linkType) {
    case "gitHub":
      icon = "fab fa-github";
      tooltip = "See repository on GitHub";
      break;
    case "webpage":
      icon = "fas fa-globe";
      tooltip = "See webpage";
      break;
    case "LinkedIn":
      icon = "fab fa-linkedin";
      tooltip = "See my LinkedIn profile";
      break;
    default:
      icon = "";
      tooltip = "";
  }

  return (
    <LinkIconDiv>
      <div className="tooltip">
        <a href={url} target="blank">
          <i className={icon} />
        </a>
        <span className="tooltiptext">{tooltip}</span>
      </div>
    </LinkIconDiv>
  );
}

export default LinkIcon;
