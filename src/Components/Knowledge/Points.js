import React from "react";
import styled from "styled-components";

export const PointsDiv = styled.div`
  padding: 0.5em;
  width: 35%;
  border-bottom: 1px solid white;
  margin: 1.5% auto;

  display: flex;
  flex-flow: row wrap;
  align-items: space-evenly;

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
