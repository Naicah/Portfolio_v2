import styled from "styled-components";

// =========================================== //
//                  KNOWLEDGE                  //
// =========================================== //
export const KnowledgeDiv = styled.div`
  h3 {
    font-size: var(--font-size-m);
  }

  #skillsContainer {
    margin: auto;
    background-color: var(--color-light-1);
    padding-bottom: 1em;
  }

  #experienceContainer {
    max-width: 100%;
  }

  #linkButtonToResume {
    max-width: 50%;
    margin: 2em auto;
    font-size: var(--font-size-xs);
  }

  .treeHouseApiTotal {
    width: 80%;
    margin: 0 auto 1em auto;
    padding: 1em;
    border: 2px solid white;
  }
  .number {
    font-size: var(--font-size-l);
    font-weight: 800;
  }
  #treeHouseApiSkillPoints {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 0 auto 1em auto;
  }
  .hidden {
    display: none !important;
  }

  @media only screen and (min-width: 768px) {
    #knowledge {
      max-width: 90vw !important;
    }

    h3 {
      margin-top: 1em;
    }

    .skillsExperienceContainer {
      display: flex;
      justify-content: space-between;
    }

    #skillsContainer {
      width: 30%;
      margin-top: 1em;
    }
    #experienceContainer {
      width: 65%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      height: 100vh;
    }
    #linkButtonToResume {
      max-width: 15vw;
      font-size: var(--font-size-s);
    }

    .treeHouseApiTotal {
      margin: 0 auto 0.5em auto;
      padding: 0.5em 1em;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

// =========================================== //
//                    SKILLS                   //
// =========================================== //
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

// =========================================== //
//                  CODESKILLS                 //
// =========================================== //
export const CodeSkillDiv = styled.div`
  display: flex;
  flex-flow: column wrap;

  justify-content: space-evenly;
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
    margin: 0.5em 0;
  }
  .codeSkillStyles {
    font-size: var(--font-size-xs);
  }

  @media only screen and (min-width: 768px) {
    padding: 0.5em 0.3em;
    margin: 0.3em;
    width: 6em;
    height: 8em;
  }
`;

// =========================================== //
//                    POINTS                   //
// =========================================== //
export const PointsDiv = styled.div`
  padding: 0.5em;
  width: 45%;
  border-bottom: 1px solid white;
  margin: 0.5em auto;

  display: flex;
  flex-flow: row wrap;
  align-items: space-between;

  .details {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    .points {
      font-weight: 800;
      font-size: var(--font-size-m);
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 0.3em;
    width: 45%;
  }
`;
// =========================================== //
//                BADGE CONTAINER              //
// =========================================== //
export const BadgeContainerDiv = styled.div`
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

    :hover {
      cursor: pointer;
    }

    .courseTitle {
      font-size: var(--font-size-m);
    }

    .badgesContainer {
      margin: 0.5em 0;

      img {
        height: 2em;
        margin-right: -0.6em;
      }
    }
  }

  .details {
    border-top: 1px solid white;
  }

  .hidden {
    display: none;
  }
`;

// =========================================== //
//                    BADGE                    //
// =========================================== //
export const BadgeDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  div {
    width: 80%;
  }

  img {
    height: 2em;
    margin-left: 0.2em;
  }
`;

// =========================================== //
//                  EXPERIENCE                 //
// =========================================== //
export const ExperienceDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  margin: 1em 0;

  .experienceHeader {
    background-color: var(experienceColor);
    padding: 0.5em;
  }

  .experienceTitle {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    font-weight: 800;
    font-size: var(--font-size-m);
    margin-bottom: 0.3em;
    word-break: break-word;
  }

  .experienceTitle *,
  .experienceDate {
    padding: 0 0.2em;
    color: var(--color--bg);
  }

  .experienceDetails {
    margin-bottom: 0.3em;
    border-radius: 2px;
    border-style: solid;
    padding: 0.8em;
  }
  .hidden {
    display: none;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;
