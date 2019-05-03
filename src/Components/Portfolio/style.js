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

  :hover {
    cursor: pointer;
    background-color: var(--color-light-1);
  }
  div {
    display: flex;
    justify-content: space-between;
  }

  #projectLinks {
    display: flex;
    justify-content: space-around;

    width: 50%;
  }

  #learnMoreContainer {
    display: flex;
    justify-content: space-around;
  }
  #learnMoreBtn {
    color: var(--color-dark-1);
    text-decoration: none;
    padding: 0.3em;
    border: 1.5px solid var(--color-dark-1);
    max-height: 2.3em;
  }
`;
