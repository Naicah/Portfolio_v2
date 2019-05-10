import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavDiv = styled.div`
  display: flex;
  background-color: var(--color-dark-1);
  height: 3em;

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
`;

function Nav() {
  return (
    <NavDiv>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="active" to="/knowledge">
        Knowledge
      </NavLink>
      <NavLink activeClassName="active" to="/resume">
        Resumé
      </NavLink>
      <NavLink activeClassName="active" to="/interaction">
        Interaction
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </NavDiv>
  );
}

export default Nav;
