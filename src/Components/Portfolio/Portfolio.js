import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { projects } from "../../database";
// import { FlipCard } from "../General";

function Portfolio() {
  return (
    <div className="mainContainer" id="portfolio">
      <h1>Portfolio</h1>
      {/* <FlipCard /> */}

      <div id="portfolioCardContainer">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  links: PropTypes.object,
  techniques: PropTypes.object
};

export default Portfolio;
