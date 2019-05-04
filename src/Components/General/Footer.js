import React from "react";
import styled from "styled-components";
import { LinkIcon } from "../General";

export const FooterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  height: 8em;
  font-size: var(--font-size-s);
  background-color: var(--color-dark-1);
  position: absolute;
  left: 0px;
  bottom: 0px;

  * {
    color: var(--color-light-1);
  }

  .copyright {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-content: space-around;
    padding: 1em;
    width: 75%;
  }
  .links {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1em;
    width: 25%;
  }
  .tooltiptext {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <div className="copyright">
        <p>
          Handcrafted by me <i className="far fa-copyright" /> twentynineteen
        </p>
      </div>
      <div className="links">
        <LinkIcon linkType="gitHub" url="https://github.com/Naicah" />
        <LinkIcon
          linkType="LinkedIn"
          url="https://www.linkedin.com/in/nina-hedman-48aa5715a/"
        />
      </div>
    </FooterDiv>
  );
}

export default Footer;
