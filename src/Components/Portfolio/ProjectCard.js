import React, { Component } from "react";
import { ProjectCardDiv } from "./style.js";
import { LinkIcon } from "../General";
import TechniqueIcon from "./TechniqueIcon.js";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      front: "",
      back: ""
    };
  }

  flipCard = () => {
    const { flipped } = this.state;
    this.setState({ flipped: !flipped });
  };
  componentDidMount() {
    const {
      id,
      name,
      img,
      description,
      projectPage,
      links,
      techniques
    } = this.props;

    let techniqueIcons = [];
    let linkIcons = [];

    techniques.forEach(function(technique) {
      techniqueIcons.push(
        <TechniqueIcon technique={technique} key={id + technique} />
      );
    });

    links.forEach(function(link) {
      linkIcons.push(
        <LinkIcon
          linkType={link.linkType}
          url={link.url}
          key={id + link.linkType}
        />
      );
    });

    let bgImg = require("../../Media/" + String(img));

    this.setState({
      back: (
        <div className="projectCardBack" key="back">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>

          <div>
            <div id="techniqueIcons">{techniqueIcons}</div>
            <div>
              <div id="projectLinks">{linkIcons}</div>
              <div id="learnMoreContainer">
                <a id="learnMoreBtn" href={projectPage}>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    });

    this.setState({
      front: (
        <div
          className="projectCardFront"
          style={{ backgroundImage: "url(" + bgImg + ")" }}
          key="front"
        />
      )
    });
  }

  render() {
    const { flipped, back, front } = this.state;
    const { id } = this.props;
    let card = front;
    if (flipped) {
      card = back;
    }

    return (
      <ProjectCardDiv id={id + "projectCardDiv"} onClick={this.flipCard}>
        {card}
      </ProjectCardDiv>
    );
  }
}

export default ProjectCard;
