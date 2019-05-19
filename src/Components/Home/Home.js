import React from "react";
import styled from "styled-components";
import { Logo } from "../General";

export const HomeDiv = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-image: var(--background-img);
  background-attachment: fixed;
  background-size: cover;
`;

function Home() {
  return (
    <HomeDiv id="home">
      <Logo />
    </HomeDiv>
  );
}

export default Home;
