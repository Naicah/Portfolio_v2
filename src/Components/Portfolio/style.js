import styled from "styled-components";

export const ProjectCardDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;

  margin: 2em auto;
  max-width: 80%;
  height: 35vh;
  padding: 0.8em;
  text-align: center;

  background-color: var(--color-light-1);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(199, 138, 149, 1);
  -moz-box-shadow: 3px 3px 10px 0px rgba(199, 138, 149, 1);
  box-shadow: 3px 3px 10px 0px rgba(199, 138, 149, 1);

  transition: transform 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  div div {
    display: flex;
    justify-content: space-between;
  }

  #techniqueIcons {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.3em;
  }

  #projectLinks {
    display: flex;
    justify-content: space-between;
    max-width: 50%;
  }

  #learnMoreBtn {
    color: var(--color-dark-1);
    text-decoration: none;
    padding: 0.3em;
    border: 1.5px solid var(--color-dark-1);
    max-height: 2.2em;
    margin-top: 0.6em;
    :hover {
      color: var(--color-light-1);
      background-color: var(--color-dark-1);
      border: none;
    }
  }
`;
