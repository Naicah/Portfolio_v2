import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Helmet } from "react-helmet";

// Style sheets
import "./App.css";
import "./Components/About/about.css";
import "./Components/Knowledge/knowledge.css";
import "./Components/Contact/contact.css";

// App components
import { Nav, Footer, Main } from "./Components/General";

import About from "./Components/About";
import { Interaction, themes } from "./Components/Interaction";
const themeLocalStorageKey = "themeLocalStorageKey";

class App extends Component {
  constructor(props) {
    super(props);
    const themeID =
      localStorage.getItem(themeLocalStorageKey) || "blooming_blossom";
    const defaultTheme = themes[themeID];

    this.state = {
      themeID: themeID,
      light1: defaultTheme.colorLight1,
      dark1: defaultTheme.colorDark1,
      dark2: defaultTheme.colorDark2,
      accent: defaultTheme.colorAccent,
      light2: defaultTheme.colorLight2
    };
  }

  changeTheme = (themeID, theme) => {
    const {
      colorLight1,
      colorDark1,
      colorDark2,
      colorAccent,
      colorLight2
    } = theme;

    this.setState({
      themeID: themeID,
      light1: colorLight1,
      dark1: colorDark1,
      dark2: colorDark2,
      accent: colorAccent,
      light2: colorLight2
    });

    localStorage.setItem(themeLocalStorageKey, themeID);
  };

  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <style>
            {`
            :root {
              --background-img:  var(--background-${this.state.themeID});
              --color-light-1: ${this.state.light1};
              --color-dark-1: ${this.state.dark1};
              --color-dark-2: ${this.state.dark2};
              --color-accent: ${this.state.accent};
              --color-light-2: ${this.state.light2};
               --color-bg: black;
              }
            `}
          </style>
        </Helmet>
        <div className="container">
          <Nav counter={new Date()} />

          <Switch>
            <Route exact path="/resume" component={About} />
            <Route
              exact
              path="/interaction"
              render={() => <Interaction changeTheme={this.changeTheme} />}
            />

            <Route path="/" component={Main} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
