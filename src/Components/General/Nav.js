import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Logo } from "../General";

export const NavDiv = styled.div`
  display: flex;
  background-color: var(--color-dark-1);
  height: 3em;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 100;

  * {
    text-decoration: none;
    color: var(--color-light-1);
    padding: 1em;
  }

  NavLink {
    color: red;
  }

  *:hover,
  .active {
    /* cursor: pointer; */
    transform: scale(1.05);
    border-bottom: 2px solid var(--color-accent);
    color: var(--color-accent);
  }

  Logo {
    height: 2.5em;
  }
`;

function Nav() {
  return (
    <NavDiv>
      <NavHashLink smooth to="/#about" activeClassName="active">
        About
      </NavHashLink>
      <NavHashLink smooth to="/#portfolio" activeClassName="active">
        Portfolio
      </NavHashLink>
      <NavHashLink smooth to="/#knowledge" activeClassName="active">
        Knowledge
      </NavHashLink>
      <NavLink activeClassName="active" to="/resume">
        Resumé
      </NavLink>
      <NavLink activeClassName="active" to="/interaction">
        Interaction
      </NavLink>
      <NavHashLink smooth to="/#contact" activeClassName="active">
        Contact
      </NavHashLink>
    </NavDiv>
  );
}

export default Nav;
