import React, { Component } from "react";
import { NavDiv } from "./style";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Logo } from "../General";

import { stack as Menu } from "react-burger-menu";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  toggleMenu = () => {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  };

  render() {
    return (
      <NavDiv>
        <div id="logoContainer">
          <Logo id="logo" />
        </div>
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <NavHashLink
            smooth
            to="/#about"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            About
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#portfolio"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            Portfolio
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#knowledge"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            Knowledge
          </NavHashLink>

          <NavLink
            to="/resume"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            Resumé
          </NavLink>

          <NavLink
            to="/interaction"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            Interaction
          </NavLink>

          <NavHashLink
            smooth
            to="/#contact"
            activeClassName="active"
            className="navLink menu-item"
            onClick={this.toggleMenu}
          >
            Contact
          </NavHashLink>
        </Menu>
      </NavDiv>
    );
  }
}

export default Nav;
