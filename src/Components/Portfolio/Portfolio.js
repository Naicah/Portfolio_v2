import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { projects } from "../../database";
import { useElementLocation } from "../../locationTracker";
import { PortfolioDiv } from "./style.js";

function Portfolio() {
  const anchorElement = useElementLocation();

  return (
    <PortfolioDiv className="mainContainer" id="portfolio" ref={anchorElement}>
      <h1>Portfolio</h1>

      <div id="portfolioCardContainer">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </PortfolioDiv>
  );
}

Portfolio.propTypes = {
  links: PropTypes.object,
  techniques: PropTypes.object
};

export default Portfolio;
