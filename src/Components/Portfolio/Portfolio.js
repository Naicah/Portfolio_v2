import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { projects } from "../../database";
import { useElementLocation } from "../../locationTracker";
// import { FlipCard } from "../General";

function Portfolio() {
  const anchorElement = useElementLocation();

  return (
    <div className="mainContainer" id="portfolio" ref={anchorElement}>
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
