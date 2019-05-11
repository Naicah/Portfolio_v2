import React from "react";

import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Knowledge from "../Knowledge";
import Contact from "../Contact";

function Main() {
  return (
    <div className="container">
      <Home />
      <About />
      <Portfolio />
      <Knowledge />
      <Contact />
    </div>
  );
}

export default Main;
