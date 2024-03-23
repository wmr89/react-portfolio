import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setEmailError(validateEmail(value) ? "" : "Please enter a valid email address");
    } else if (name === "name") {
      setName(value);
      setNameError(value ? "" : "Name is required");
    } else {
      setMessage(value);
      setMessageError(value ? "" : "Message is required");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(value ? "" : "Email is required");
    } else if (name === "name") {
      setNameError(value ? "" : "Name is required");
    } else {
      setMessageError(value ? "" : "Message is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!message) {
      setMessageError("Message is required");
      return;
    }

    // Your form submission logic goes here

    // Reset form fields after successful submission
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Contact Me</h1>
          <form className="mb-4" onSubmit={handleSubmit} netlify>
            <div className="mb-3">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
                className={`form-control ${emailError && "is-invalid"}`}
                placeholder="Email"
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="mb-3">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                className={`form-control ${nameError && "is-invalid"}`}
                placeholder="Name"
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
            <div className="mb-3">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-control ${messageError && "is-invalid"}`}
                rows="5"
                placeholder="Message"
              ></textarea>
              {messageError && <div className="invalid-feedback">{messageError}</div>}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
