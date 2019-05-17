import React from "react";
import styled from "styled-components";

export const BadgeDiv = styled.div`
  padding: 0.5em;

  border-bottom: 1px solid white;
  margin: 1.5% auto;

  display: flex;
  flex-flow: column wrap;
  align-items: space-evenly;
  width: 80%;

  .overview,
  .section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
  }

  .overview {
    border-bottom: 1px solid white;
  }

  .courseTitle {
    font-size: var(--font-size-m);
    font-weight: 800;
  }

  img {
    height: 12vw;
    margin-left: 0.2em;
  }
`;

function Badge({ course, badges }) {
  return (
    <BadgeDiv>
      <div className="overview">
        <div className="courseTitle">
          <p>Tricks</p>
        </div>
        <div className="badgesContainer">
          <img
            src="https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png"
            alt="Badge"
          />
          <img
            src="https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png"
            alt="Badge"
          />
        </div>
      </div>
      <div className="details">
        <div className="section">
          <div className="points">
            <p>React</p>
          </div>
          <img
            src="https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png"
            alt="Badge"
          />
        </div>
        <div className="section">
          <div className="points">
            <p>React</p>
          </div>
          <img
            src="https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png"
            alt="Badge"
          />
        </div>
      </div>
    </BadgeDiv>
  );
}

export default Badge;
