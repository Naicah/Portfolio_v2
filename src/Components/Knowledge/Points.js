import React from "react";
import styled from "styled-components";

export const PointsDiv = styled.div`
  padding: 0.5em;
  width: 50%;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  .color {
    align-item: flex-start;

    div {
      border: 1px solid black;
      width: var(--font-size-s);
      height: var(--font-size-s);
      border-radius: 50%;
      background-color: darkblue;
      margin: 0.4em;
    }
  }
  .details {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    .points {
      font-weight: 800;
      font-size: var(--font-size-m);
    }
  }
`;

function Points({ points, skill }) {
  return (
    <PointsDiv>
      <div className="color">
        <div />
      </div>
      <div className="details">
        <div className="points">
          <p>{points}</p>
        </div>
        <div>
          <p>{skill}</p>
        </div>
      </div>
    </PointsDiv>
  );
}

export default Points;
