import React from "react";
import styled from "styled-components";

export const PointsDiv = styled.div`
  padding: 0.5em;
  width: 45%;
  border-bottom: 1px solid white;
  margin: 0.5em auto;

  display: flex;
  flex-flow: row wrap;
  align-items: space-between;

  .details {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    .points {
      font-weight: 800;
      font-size: var(--font-size-m);
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 0.3em;
    width: 45%;
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
