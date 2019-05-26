import React from "react";
import styled from "styled-components";

export const ColorPalletDiv = styled.div`
  box-shadow: ${({ isActive }) =>
    isActive
      ? "0 6px 10px 0 var(--color-dark-1), 0 8px 30px 0 var(--color-dark-1)"
      : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"};

  margin-bottom: 5vh;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .themeImg {
    height: 20vh;
    overflow: hidden;
    img {
      width: 100%;
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

  @media only screen and (min-width: 768px) {
    margin: 1%;
    min-width: 23%;
    max-width: 23%;

    .themeImg {
      img {
        height: 100%;
        width: 100%;
      }
    }
    .colorPalettContainer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 13vh;
    }
  }
`;

// function MainContent() {
//   return (
//     <div className="container">
//       <div>Test example</div>
//     </div>
//   );
// }

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
      {/* <MainContent /> */}
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

export default ColorPallet;
