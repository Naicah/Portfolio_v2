// Slack icon: <i className="fab fa-slack"></i>
import React, { useState } from "react";
import InputField from "./InputField";
import { LinkButton } from "../General";
import { useElementLocation } from "../../locationTracker";

const inputs = [
  {
    name: "Name",
    type: "text"
  },
  {
    name: "Email",
    type: "email"
  },
  {
    name: "Phone",
    type: "tel"
  },
  {
    name: "Subject",
    type: "text"
  },
  {
    name: "Message",
    type: "textarea"
  }
];

function useSetInputFieldValue() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    sent: false
  });

  return [
    state,
    (statePropertyName, value) => {
      let newState = {
        ...state,
        [statePropertyName]: value
      };

      setState(newState);
    }
  ];
}

function Contact() {
  const anchorElement = useElementLocation();
  const [state, setInputFiledValue] = useSetInputFieldValue();
  return (
    <div className="mainContainer" id="contact" ref={anchorElement}>
      <h1>Contact</h1>

      <form className="contactForm" onSubmit={e => this.formSubmit(e)}>
        {inputs.map(props => {
          return (
            <InputField
              {...props}
              setStateValue={setInputFiledValue}
              value={state[props.name.toLowerCase()]}
              key={props.name}
            />
          );
        })}

        <LinkButton type="submit" url="" text="Send" id="sendContactForm" />
      </form>
    </div>
  );
}

export default Contact;
