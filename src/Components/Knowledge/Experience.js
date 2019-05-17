import React, { Component } from "react";
import styled from "styled-components";

export const ExperienceDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
 
  
  margin: 1em 0;

  .experienceHeader {
    background-color: var(experienceColor);
    padding: 0.5em;
  }

  .experienceTitle {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    font-weight: 800;
    font-size: var(--font-size-m);
    margin-bottom: 0.3em;
    word-break: break-word;
  }

  .experienceTitle *,
  .experienceDate {
    padding: 0 0.2em;
    color: var(--color--bg);
  }

  .experienceDetails {
    margin-bottom: 0.3em;
  border-radius: : 2px;
  border-style: solid;
    padding: 0.8em;
  }
  .hidden {
    display: none;
  }

  :hover {
    cursor: pointer;
      transform: scale(1.05);
  }
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  toggleDetails = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };
  render() {
    const { type, name, at, date, text } = this.props;
    const { hidden } = this.state;

    let experienceColor = "black";

    switch (type) {
      case "job":
        experienceColor = "var(--color-dark-1)";
        break;
      case "education":
        experienceColor = "var(--color-dark-2)";
        break;
      case "extra":
        experienceColor = "var(--color-accent)";
        break;
      // no default
    }

    return (
      <ExperienceDiv onClick={this.toggleDetails}>
        <div
          className="experienceHeader"
          style={{ backgroundColor: experienceColor }}
        >
          <div className="experienceTitle">
            <p>
              {name}
              <span>|</span>
              {at}
            </p>
          </div>
          <p className="experienceDate">{date}</p>
        </div>
        <div
          className={hidden ? "experienceDetails hidden" : "experienceDetails"}
          style={{ borderColor: experienceColor }}
        >
          <p className="experienceText">{text}</p>
        </div>
      </ExperienceDiv>
    );
  }
}

export default Experience;
