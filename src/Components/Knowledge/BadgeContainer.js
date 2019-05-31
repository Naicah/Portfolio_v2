import React, { useState } from "react";
import { BadgeContainerDiv, BadgeDiv } from "./style.js";

function Badge({ badge }) {
  return (
    <BadgeDiv>
      <div>
        <a href={badge.url}>{badge.name}</a>
      </div>
      <img src={badge.icon_url} alt="Badge icon" />
    </BadgeDiv>
  );
}

function BadgeContainer({ course }) {
  const [hidden, setHidden] = useState(true);

  const toggleDetails = () => {
    setHidden(!hidden);
  };

  let courseUrl = course.url;
  let badges = course.badges;

  return (
    <BadgeContainerDiv onClick={toggleDetails}>
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
      <div className={hidden ? "details hidden" : "details"}>
        {badges.map(badge => (
          <Badge badge={badge} key={badge.name + badge.url} />
        ))}
      </div>
    </BadgeContainerDiv>
  );
}

export default BadgeContainer;
