import React from "react";
import styled from "styled-components";

export const CodeSkillDiv = styled.div`
  display: flex;
  flex-flow: column wrap;

  justify-content: space-between;
  border: 2px solid white;
  text-align: center;
  width: 7em;
  height: 12em;
  padding: 0.8em 0.5em;
  margin: 0.5em;
  color: var(--color-dark-1);

  i {
    font-size: var(--font-size-xxl);
  }
  p {
    color: var(--color-dark-1);
  }
  .codeSkillMain {
    font-weight: 800;
  }
  .codeSkillStyles {
    font-size: var(--font-size-xs);
  }
`;

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

export default CodeSkill;
