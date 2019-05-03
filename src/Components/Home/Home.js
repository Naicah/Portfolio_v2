import React from "react";
import styled from "styled-components";
import { Logo } from "../General/Logo.js";

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: var(--background-img);
  background-attachment: fixed;
  background-position: -60vw 0vw;
  background-size: auto 100vh;
`;

function Home() {
  return (
    <HomeDiv id="home">
      <Logo />
    </HomeDiv>
  );
}

export default Home;
