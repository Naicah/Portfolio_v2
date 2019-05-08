// Slack icon: <i className="fab fa-slack"></i>
import React, { Component } from "react";
import InputField from "./InputField";
import { Footer } from "../General";

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
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };

  makeSetInputFieldValue = () => (statePropertyName, value) => {
    let newState = {};
    newState[statePropertyName] = value;

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div className="mainContainer">
          <h1>Contact</h1>

          <form className="contactForm" onSubmit={e => this.formSubmit(e)}>
            {inputs.map(props => (
              <InputField
                {...props}
                setStateValue={this.makeSetInputFieldValue()}
                value={this.state.name}
              />
            ))}

            <div className="button--container">
              <button type="submit" className="button button-primary">
                {this.state.buttonText}
              </button>
            </div>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Contact;
