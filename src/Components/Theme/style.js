import styled from "styled-components";

// =========================================== //
//                COLOR PALLET                 //
// =========================================== //
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

// =========================================== //
//                     THEME                   //
// =========================================== //
export const ThemeDiv = styled.div`
  h3 {
    font-size: var(--font-size-m);
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: var(--font-size-l);
    }
    #themeCardContainer {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin-bottom: 2em;
    }
  }
`;
