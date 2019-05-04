import React from "react";
import styled from "styled-components";
import CodeSkill from "./CodeSkill.js";

export const SkillsDiv = styled.div`
  padding: 1.5em 1em;
  .codeSkillsContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  h3 {
    font-size: var(--font-size-m);
  }
`;

function Skills() {
  const codeSkills = [
    {
      icon: "fab fa-html5",
      main: "HTML5",
      styles: "Bootstrap"
    },
    {
      icon: "fab fa-css3",
      main: "CSS3",
      styles: "LESS, Animations"
    },
    {
      icon: "far fa-file-code",
      main: "JavaScript",
      styles: "jQuery, JSON, React, Vue"
    },
    {
      icon: "fab fa-node-js",
      main: "node.js",
      styles: "Express, Koa, Knex"
    },
    {
      icon: "fas fa-cogs",
      main: "Java, SQL",
      styles: "Firebase, Wordpress"
    },
    {
      icon: "fas fa-desktop",
      main: "Adobe XD",
      styles: "Photoshop, Postman "
    }
  ];

  let codeSkillsList = [];
  codeSkills.forEach(function(skill) {
    codeSkillsList.push(
      <CodeSkill icon={skill.icon} main={skill.main} styles={skill.styles} />
    );
  });

  return (
    <SkillsDiv>
      <h3>Technologies & Languages</h3>
      <div className="codeSkillsContainer">{codeSkillsList}</div>
    </SkillsDiv>
  );
}

export default Skills;

/* 

------ ICONS -------
JS: far fa-file-code
CSS: fab fa-css3
HTML: fab fa-html5 
node-js: fab fa-node-js 
node: fab fa-node
cogs: fas fa-cogs
desktop: fas fa-desktop
*/
