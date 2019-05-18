import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light1: "#f5f5ef",
      dark1: "#32522a",
      dark2: "#b15f76",
      accent: "#c78a95",
      light2: "#e8d0d4"
    };
  }

  changeTheme = () => {
    const {
      colorLight1,
      colorDark1,
      colorDark2,
      colorAccent,
      colorLight2
    } = this.props;
    this.setState({
      light1: colorLight1,
      dark1: colorDark1,
      dark2: colorDark2,
      accent: colorAccent,
      light2: colorLight2
    });
  };

  render() {
    const {
      name,
      img,
      colorLight1,
      colorDark1,
      colorDark2,
      colorAccent,
      colorLight2
    } = this.props;

    return (
      <ThemeDiv onClick={this.changeTheme}>
        <Helmet>
          <style>
            {`
            :root {
              --color-light-1: ${this.state.light1};
              --color-dark-1: ${this.state.dark1};
              --color-dark-2: ${this.state.dark2};
              --color-accent: ${this.state.accent};
              --color-light-2: ${this.state.light2};
               --color-bg: black;
              }
            `}
          </style>
        </Helmet>
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
}

export default Theme;
