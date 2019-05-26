import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { componentLocations } from "../../locationTracker";
import throttle from "lodash/throttle";

import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Knowledge from "../Knowledge";
import Contact from "../Contact";

function Main(props) {
  function getCurrentElement() {
    let scrollPosition = document.documentElement.scrollTop + 100;
    let bestPosition;
    let result;

    Object.entries(componentLocations).forEach(
      ([currentElement, currentElementPosition]) => {
        if (scrollPosition >= currentElementPosition) {
          if (!bestPosition || bestPosition < currentElementPosition) {
            bestPosition = currentElementPosition;
            result = currentElement;
          }
        }
      }
    );

    if (result) {
      props.history.replace("#" + result);
    } else {
      props.history.replace("");
    }
  }

  useEffect(() => {
    window.onscroll = throttle(getCurrentElement, 200);

    // componentDidUnmount
    return () => {
      window.onscroll = null;
    };
  }, []);

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

// withRouter so that history is sent as props
export default withRouter(Main);
