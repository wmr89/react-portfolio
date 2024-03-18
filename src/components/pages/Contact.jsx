import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setEmailError(validateEmail(value) ? "" : "Please enter a valid email address");
    } else if (name === "userName") {
      setUserName(value);
      setUserNameError(value ? "" : "Name is required");
    } else {
      setMessage(value);
      setMessageError(value ? "" : "Message is required");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(value ? "" : "Email is required");
    } else if (name === "userName") {
      setUserNameError(value ? "" : "Name is required");
    } else {
      setMessageError(value ? "" : "Message is required");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
    if (!userName) {
      setUserNameError("Name is required");
    }
    if (!message) {
      setMessageError("Message is required");
    }

    // Submit the form if there are no errors
    if (!emailError && !userNameError && !messageError) {
      // Clear errors and submit the form
      setEmailError("");
      setUserNameError("");
      setMessageError("");
      
      // Your form submission logic goes here
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Contact Me</h1>
          <form className="mb-4" onSubmit={handleFormSubmit}>
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
                value={userName}
                name="userName"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                className={`form-control ${userNameError && "is-invalid"}`}
                placeholder="Name"
              />
              {userNameError && <div className="invalid-feedback">{userNameError}</div>}
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