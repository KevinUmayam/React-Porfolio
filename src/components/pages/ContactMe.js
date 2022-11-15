import React, { useState } from "react";
import "./ContactMe.css";
import { validateEmail } from "../../untils/helpers";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
const styles = {
  TextB: {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  ulS: {
    padding: "0px",
  },
};

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputValue = target.value;
    const inputType = target.name;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    if (!text && !validateEmail(email)) {
      setErrorMessage("Must write a message and Email is invalid");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    } else if (!text) {
      setErrorMessage("Must write a message");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    }
  };

  return (
    <div className="Cbackground">
      <div>
        <form
          className="align "
          method="post"
          id="contactForm"
          name="contactForm"
        >
          <input
            type="text"
            className="inputS inputT font"
            name="name"
            id="name"
            placeholder="Your name"
          />

          <input
            onChange={handleInputChange}
            type="text"
            className="inputS inputT font"
            name="email"
            id="email"
            placeholder="Email"
          />

          <textarea
            style={styles.TextB}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="inputS inputT font"
            name="message"
            id="message"
            cols="20"
            rows="6"
            placeholder="Write your message"
          ></textarea>

          <input
            // style={styles.background}
            onClick={FormSubmit}
            id="btn"
            type="submit"
            value="Send Message"
            className=" inputS inputT font"
          />
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      <div>
        <ul style={styles.ulS} className="bottom">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kevin-umayam/"
            >
              <FaLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KevinUmayam"
            >
              <FaGithub className="icons" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/19267013/kevin-umayam"
            >
              <FaStackOverflow className="icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
