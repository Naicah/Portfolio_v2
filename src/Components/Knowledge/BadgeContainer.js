import React, { Component } from "react";
import styled from "styled-components";
import Badge from "./Badge";

export const BadgeDiv = styled.div`
  padding: 0.5em;
  border: 1px solid white;
  margin: 0.5em auto;
  display: flex;
  flex-flow: column wrap;
  align-items: space-evenly;
  width: 80%;

  a {
    text-decoration: none;
    color: var(--color-dark-2);
  }

  .overview {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    .courseTitle {
      font-size: var(--font-size-m);
    }

    .badgesContainer  {
      margin: 0.5em 0;
  
    img {
      height: 2em;
      margin-right: -0.6em;
    }}
    
  }

  .details {
    border-top: 1px solid white;
  }
  
  .hidden {
    display: none;
    
  }
`;


class BadgeContainer extends Component {
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
  const {course} = this.props;
  const { hidden } = this.state;
  let courseUrl = course.url;
  let badges = course.badges;

  return (
    <BadgeDiv onClick={this.toggleDetails}>
      <div className="overview">
        <div className="titleContainer">
          <a href={courseUrl} target="blank" className="courseTitle">
            {course.name}
          </a>
        </div>
        <div className="badgesContainer">
          {badges.map(badge => (
            <img
              src={badge.icon_url}
              alt="Badge icon"
              key={badge.name + badge.icon_url}
            />
          ))}
        </div>
      </div>
      <div className={hidden ? 'details hidden' : 'details'}>
        {badges.map(badge => (
          <Badge badge={badge} key={badge.name + badge.url} />
        ))}
      </div>
    </BadgeDiv>
  );
}}

export default BadgeContainer;
