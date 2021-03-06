import styled from "styled-components";

export const AboutDiv = styled.div`
  .quote {
    color: var(--color-dark-1);
    font-size: var(--font-size-m);
    font-family: var(--font-stack-normal);
    text-align: center;
    margin: 0 auto 2em auto;

    .lfm__typing_effect {
      max-width: 60vw;
      min-height: 15vh;
      margin: auto;
      padding: 0.5em;
      border: 3px solid var(--color-dark-1);
    }
  }

  #aboutText {
    margin-bottom: 2em;
  }
  #aboutText p {
    margin-bottom: 0.5em;
  }
  #aboutText p a {
    color: var(--color-dark-1);
  }

  #linkButtonToContact {
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 768px) {
    .headerQuoteContainer {
      display: flex;
      flex-flow: row-reverse wrap-reverse;
      justify-content: flex-end;
    }

    h1 {
      padding-right: 33%;
      width: 66%;
    }
    .quote {
      margin: 5vh 0;
      width: 33%;

      .lfm__typing_effect {
        max-width: 16vw;
        min-height: 11vh;
        margin: 0;
      }
    }

    #aboutText,
    #linkButtonToContact {
      width: 60vw;
      margin: auto;
    }
    #linkButtonToContact {
      margin-top: 2em;
    }
  }
`;
