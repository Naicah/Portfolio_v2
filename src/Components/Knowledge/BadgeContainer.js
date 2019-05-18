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
    height: 8vw;
    margin-left: 0.2em;
  }

  a {
    text-decoration: none;
    color: var(--color-dark-2);
  }
`;

function BadgeContainer({ object }) {
  let course = object["course"];
  let url = object["url"];
  let badges = object["badges"];

  return (
    <BadgeDiv>
      <div className="overview">
        <div className="titleContainer">
          <a href={url} target="blank" className="courseTitle">
            {course}
          </a>
        </div>
        <div className="badgesContainer">
          {badges.map(badge => (
            <img
              src={badge["icon_url"]}
              alt="Badge icon"
              key={badge["title"]}
            />
          ))}
        </div>
      </div>
      <div className="details">
        {badges.map(badge => (
          <Badge badge={badge} key={badge["title"]} />
        ))}
      </div>
    </BadgeDiv>
  );
}

export default BadgeContainer;
