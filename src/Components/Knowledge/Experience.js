import React, { Component } from "react";
import styled from "styled-components";

export const ExperienceDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-width: 65vw;
  margin: 1em;

  .experienceHeader {
    background-color: var(--color-dark-1);
    padding: 0.5em;
  }

  .experienceTitle {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    background-color: var(--color-dark-1);
    font-weight: 800;
    font-size: var(--font-size-m);
    margin-bottom: 0.3em;
  }

  .experienceTitle *,
  .experienceDate {
    padding: 0 0.2em;
    color: var(--color--bg);
  }

  .experienceDetails {
    border: 2px solid var(--color-dark-1);
    padding: 0.8em;
  }
  .hidden {
    display: none;
  }

  :hover {
    cursor: pointer;
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
    return (
      <ExperienceDiv>
        <div className="experienceHeader" onClick={this.toggleDetails}>
          <div className="experienceTitle">
            <p className="experienceName">{name}</p>
            <p>|</p>
            <p className="experienceAt">{at}</p>
          </div>
          <p className="experienceDate">{date}</p>
        </div>
        <div
          className={hidden ? "experienceDetails hidden" : "experienceDetails"}
        >
          <p className="experienceText">{text}</p>
        </div>
      </ExperienceDiv>
    );
  }
}

export default Experience;

{
  /* <div>{}</div>; */
}
