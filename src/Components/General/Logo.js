import styled from "styled-components";

export default styled.div`
  height: 85vh;
  background-image: var(--logo);
  background-position: center center;
  background-size: 90vw;
  background-repeat: no-repeat;

  @media only screen and (min-width: 768px) {
    background-size: 50vw;
  }
`;
