import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Style sheets
import "./App.css";
import "./Components/About/about.css";
import "./Components/Knowledge/knowledge.css";
import "./Components/Contact/contact.css";

// App components
import { Nav, Footer, Main } from "./Components/General";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <Switch>
          <Route exact path="/resume" render={() => <About title="Resumé" />} />
          <Route exact path="/interaction" component={Portfolio} />
          <Route path="/" render={() => <Main title="Main" />} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
