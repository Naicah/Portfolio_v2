import React, { useState } from "react";
import { NavDiv } from "./style";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Logo } from "../General";
import { stack as Menu } from "react-burger-menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Nav() {
  const [menuOpen, setmenuOpen] = useState(false);
  const isSmallDevice = useMediaQuery("(max-width:768px)");

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  function handleStateChange(state) {
    setmenuOpen(state.isOpen);
  }

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  function createNavHashLink(linkName) {
    return createNavLink(linkName, NavHashLink);
  }

  function createNavLink(linkName, LinkType = NavLink) {
    let linkNameLower = linkName.toLowerCase();
    let hashProps = {};

    if (LinkType === NavHashLink) {
      linkNameLower = "#" + linkNameLower;
      hashProps = {
        smooth: true,
        isActive: () => window.location.hash === linkNameLower
      };
    }

    return (
      <LinkType
        to={"/" + linkNameLower}
        activeClassName="active"
        className="navLink"
        onClick={toggleMenu}
        {...hashProps}
      >
        {linkName}
      </LinkType>
    );
  }

  function createNav() {
    if (isSmallDevice) {
      return (
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={menuOpen => handleStateChange(menuOpen)}
        >
          {createNavHashLink("About")}
          {createNavHashLink("Portfolio")}
          {createNavHashLink("Knowledge")}
          {createNavLink("Resume")}
          {createNavLink("Interaction")}
          {createNavHashLink("Contact")}
        </Menu>
      );
    } else {
      return (
        <div id="menuIconContainer">
          {createNavHashLink("About")}
          {createNavHashLink("Portfolio")}
          {createNavHashLink("Knowledge")}
          {createNavLink("Resume")}
          {createNavLink("Interaction")}
          {createNavHashLink("Contact")}
        </div>
      );
    }
  }

  return (
    <NavDiv>
      <div id="logoContainer">
        <NavHashLink smooth exact to="/#home">
          <Logo id="logo" />
        </NavHashLink>
      </div>
      {createNav()}
    </NavDiv>
  );
}

export default Nav;
