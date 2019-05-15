import React from "react";
import styled from "styled-components";

export const ThemeDiv = styled.div`
  border: 1px solid black;

  img {
    width: 10vh;
  }
`;

function Theme({
  name,
  img,
  colorLight1,
  colorDark1,
  colorDark2,
  colorAccent,
  colorLight2
}) {
  return (
    <ThemeDiv>
      <div>
        <img src={img} alt={name} />
      </div>

      <div>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </ThemeDiv>
  );
}

export default Theme;
