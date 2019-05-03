import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard.js";
import projects from "./Projects/Projects.js";

let projectList = [];

projects.forEach(function(project) {
  projectList.push(
    <ProjectCard
      id={project.id}
      name={project.name}
      img={project.img}
      description={project.description}
      links={project.links}
      techniques={project.techniques}
    />
  );
});

function Portfolio() {
  return (
    <div className="mainContainer">
      <h1>Portfolio</h1>
      <div id="portfolioCardContainer">{projectList}</div>
    </div>
  );
}

Portfolio.propTypes = {
  links: PropTypes.object,
  techniques: PropTypes.object
};

export default Portfolio;
