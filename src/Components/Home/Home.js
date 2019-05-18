import React from "react";
import styled from "styled-components";
import { Logo } from "../General";

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: var(--background-img);
  background-attachment: fixed;
  background-size: auto 100vh;

  @media only screen and (min-width: 768px) {
    background-size: 100vw auto;
  }
`;

function Home() {
  return (
    <HomeDiv id="home">
      <Logo />
    </HomeDiv>
  );
}

export default Home;
