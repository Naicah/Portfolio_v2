import React from "react";
import { themes } from "../../database";
import { ColorPalletDiv, ThemeDiv } from "./style.js";

function ColorPallet({ themeID, theme, changeTheme, isActive }) {
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
    <ColorPalletDiv
      isActive={isActive}
      onClick={() => changeTheme(themeID, theme)}
    >
      <div className="active">
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
      </div>
    </ColorPalletDiv>
  );
}

function Theme(props) {
  return (
    <ThemeDiv className="mainContainer" id="interction">
      <h1>Theme</h1>
      <h3>Change theme and color pallet for the whole application</h3>
      <div id="themeCardContainer">
        {Object.entries(themes).map(([themeID, theme]) => {
          return (
            <ColorPallet
              themeID={themeID}
              changeTheme={props.changeTheme}
              key={themeID}
              theme={theme}
              isActive={props.selectedTheme === themeID}
            />
          );
        })}
      </div>
    </ThemeDiv>
  );
}

export default Theme;
