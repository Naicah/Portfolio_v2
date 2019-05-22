import React from "react";
import styled from "styled-components";
import CodeSkill from "./CodeSkill.js";
import { codeSkills } from "../../database";

export const SkillsDiv = styled.div`
  padding: 1.5em 1em;
  .codeSkillsContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  @media only screen and (min-width: 768px) {
    padding: 0.5em;
    .codeSkillsContainer {
      margin-top: 1em;
    }
  }
`;

function Skills() {
  return (
    <SkillsDiv>
      <h3>Technologies & Languages</h3>
      <div className="codeSkillsContainer">
        {codeSkills.map(skill => (
          <CodeSkill key={skill.main} {...skill} />
        ))}
      </div>
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
