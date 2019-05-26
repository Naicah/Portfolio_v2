import styled from "styled-components";

export const ProjectCardDiv = styled.div`
  margin: 2em auto;
  max-width: 80%;
  height: 35vh;

  /*- Card body -*/
  .card-body {
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.6s linear;
  }

  /*- Flipping the card -*/
  :hover {
    .card-body {
      transform: rotateY(180deg);
    }
  }

  :hover {
    .card-body {
      .side-front {
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s ease-in, visibility 0.75s linear;
      }
    }
  }

  /*- Card sides -*/
  .card-side {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 35px rgba(50, 50, 93, 0.1),
      0 2px 15px rgba(0, 0, 0, 0.07);
  }

  /*- Front side -*/
  .side-front {
    /* background-image: {dandelion}; */
  }
  /*- Back side -*/
  .side-back {
    transform: rotateY(180deg);
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 0.8em;
    text-align: center;
    background-color: var(--color-light-1);

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
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 1%;
    min-width: 23%;
    max-width: 23%;
  }
`;
