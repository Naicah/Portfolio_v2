import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

export const BadgeDiv = styled.div`
  padding: 0.5em;
  border-bottom: 1px solid white;
  margin: 1.5% auto;
  display: flex;
  flex-flow: column wrap;
  align-items: space-evenly;
  width: 80%;

  .overview {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    border-bottom: 1px solid white;
  }
  .titleContainer {
    width: 80%;
  }

  .courseTitle {
    font-size: var(--font-size-m);
  }

  .badgesContainer img {
    height: 2em;
    margin-left: 0.2em;
  }

  a {
    text-decoration: none;
    color: var(--color-dark-2);
  }
`;

function BadgeContainer({ course }) {

  let courseUrl = course.url;
  let badges = course.badges;

  return (
    <BadgeDiv>
      <div className="overview">
        <div className="titleContainer">
          <a href={courseUrl} target="blank" className="courseTitle">
            {course.name}
          </a>
        </div>
        <div className="badgesContainer">
          {badges.map(badge => (
            <img
              src={badge.icon_url}
              alt="Badge icon"
              key={badge.name + badge.icon_url}
            />
          ))}
        </div>
      </div>
      <div className="details">
        {badges.map(badge => (
          <Badge badge={badge} key={badge.name + badge.url} />
        ))}
      </div>
    </BadgeDiv>
  );
}

export default BadgeContainer;
