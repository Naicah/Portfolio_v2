import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function FlipCard() {
  const [inProp, setInProp] = useState(false);

  return (
    <CSSTransition
      in={inProp}
      onEnter={() => setInProp(false)}
      timeout={400}
      classNames="flip"
    >
      <div id="flip-div" onClick={() => setInProp(true)}>
        "I'll receive my-node-* classes"
      </div>
    </CSSTransition>
  );
}

export default FlipCard;
