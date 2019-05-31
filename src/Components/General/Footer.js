import React from "react";
import { LinkIcon } from "../General";
import { FooterDiv } from "./style.js";

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
