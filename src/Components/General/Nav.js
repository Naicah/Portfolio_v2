import React, { Component } from "react";
import { withRouter } from "react-router";
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
    console.log("history: ", this.props.history.replace);

    this.historyReplace = this.props.history.replace;
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

  createNavHashLink(linkName) {
    return this.createNavLink(linkName, NavHashLink);
  }

  createNavLink(linkName, LinkType = NavLink) {
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
        className="navLink menu-item"
        onClick={this.toggleMenu}
        {...hashProps}
      >
        {linkName}
      </LinkType>
    );
  }
  componentDidMount() {
    window.onscroll = () => {
      this.historyReplace("#about");
    };
  }
  render() {
    return (
      <NavDiv>
        <div id="logoContainer">
          <NavHashLink smooth exact to="/#home">
            <Logo id="logo" />
          </NavHashLink>
        </div>

        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          {this.createNavHashLink("About")}
          {this.createNavHashLink("Portfolio")}
          {this.createNavHashLink("Knowledge")}
          {this.createNavLink("Resume")}
          {this.createNavLink("Interaction")}
          {this.createNavHashLink("Contact")}
        </Menu>
      </NavDiv>
    );
  }
}

export default withRouter(Nav);
