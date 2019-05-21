import React, { Component } from "react";
import styled from "styled-components";

export const ThemeDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 5vh;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .themeImg {
    height: 20vh;
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }

  .colorPalettContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 15vh;
    .themeColor {
      width: 18%;
      height: 95%;
    }
  }
`;

function Theme({themeID,theme, changeTheme}) {
    const {
      img, 
      name,
      colorLight1,
      colorDark1,
      colorDark2,
      colorAccent,
      colorLight2
    } = theme;

    return (
      <ThemeDiv onClick={() => changeTheme(themeID, theme)}>
        
        <div className="themeImg">
          <img src={img} alt={name} />
        </div>
        <div className="colorPalettContainer">
          <div
            className="themeColor"
            style={{ backgroundColor: colorLight1 }}
          />

          <div className="themeColor" style={{ backgroundColor: colorDark1 }} />

          <div className="themeColor" style={{ backgroundColor: colorDark2 }} />
          <div
            className="themeColor"
            style={{ backgroundColor: colorAccent }}
          />
          <div
            className="themeColor"
            style={{ backgroundColor: colorLight2 }}
          />
        </div>
      </ThemeDiv>
    );
  }


export default Theme;
