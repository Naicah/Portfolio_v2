import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Style sheets
import "./App.css";
import "./Components/About/about.css";

// App components
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About title="About" />} />
          {/* <Route exact path="/teachers" component={ Teachers } />
        <Route path="/teachers/:topic/:name" component={ Featured } />
        <Route path="/courses" component={ Courses } />
        <Route component={ NotFound } /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
