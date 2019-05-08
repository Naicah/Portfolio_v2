// Slack icon: <i className="fab fa-slack"></i>
import React, { Component } from "react";
import { Footer } from "../General";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };

  render() {
    return (
      <div>
        <div className="mainContainer">
          <h1>Contact</h1>

          <form className="contactForm" onSubmit={e => this.formSubmit(e)}>
            <div>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                className="nameInput"
                type="text"
                value={this.state.name}
              />
              <label htmlFor="message-name">Name</label>
            </div>

            <div>
              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                className="email"
                type="email"
                required
                value={this.state.email}
              />
              <label htmlFor="message-email">Email</label>
            </div>

            <div>
              <input
                onChange={e => this.setState({ phone: e.target.value })}
                name="phone"
                className="phone"
                type="text"
                value={this.state.phone}
              />
              <label htmlFor="message-name">Phone</label>
            </div>

            <div>
              <input
                onChange={e => this.setState({ subject: e.target.value })}
                name="subject"
                className="subject"
                type="text"
                value={this.state.subject}
              />
              <label htmlFor="message-subject">Subject</label>
            </div>

            <div className="messageContainer">
              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                name="message"
                className="message"
                type="text"
                value={this.state.message}
                required
              />
              <label htmlFor="message-input">Message</label>
            </div>

            <span class="input input--minoru">
              <input
                class="input__field input__field--yoko"
                type="text"
                id="input-17"
              />
              <label class="input__label input__label--yoko" for="input-17">
                <span class="input__label-content input__label-content--yoko">
                  City
                </span>
              </label>
            </span>

            <div className="button--container">
              <button type="submit" className="button button-primary">
                {this.state.buttonText}
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
