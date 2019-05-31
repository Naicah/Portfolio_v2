import React from "react";
import { codeSkills } from "../../database";
import { CodeSkillDiv, SkillsDiv } from "./style";

function CodeSkill({ icon, main, styles }) {
  return (
    <CodeSkillDiv>
      <div>
        <i className={icon} />
      </div>
      <div>
        <p className="codeSkillMain">{main}</p>
      </div>
      <div>
        <p className="codeSkillStyles">{styles}</p>
      </div>
    </CodeSkillDiv>
  );
}

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
