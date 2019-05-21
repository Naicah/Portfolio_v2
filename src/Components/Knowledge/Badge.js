import React from "react";
import styled from "styled-components";

export const BadgeDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  div {
    width: 80%;
  }

  img {
    height: 2em;
    margin-left: 0.2em;
  }
`;

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

export default Badge;
