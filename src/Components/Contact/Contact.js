// Slack icon: <i className="fab fa-slack"></i>
import React, { Component } from "react";
import InputField from "./InputField";
import { LinkButton } from "../General";

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

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    sent: false
  };

  makeSetInputFieldValue = () => (statePropertyName, value) => {
    let newState = {
      [statePropertyName]: value
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className="mainContainer" id="contact">
        <h1>Contact</h1>

        <form className="contactForm" onSubmit={e => this.formSubmit(e)}>
          {inputs.map(props => (
            <InputField
              {...props}
              setStateValue={this.makeSetInputFieldValue()}
              value={this.state[props.name.toLowerCase()]}
              key={props.name}
            />
          ))}

          <LinkButton type="submit" url="" text="Send" id="sendContactForm" />
        </form>
      </div>
    );
  }
}

export default Contact;
