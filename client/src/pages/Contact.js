import React from "react";
import Wrapper from "../assests/wrapper/Contact";

const Contact = () => {
  return (
    <Wrapper>
      <form
        action="https://formsubmit.co/92624e28ef9115685144e8a01e53b184"
        method="POST"
        className="form-container"
      >
        <h1 className="title">Contact Me!</h1>
        <input type="hidden" name="_subject" value="New submission!"></input>
        <input
          type="email"
          name="email"
          placeholder="Email Addess"
          required
          className="email-input"
        />
        <textarea
          type="text"
          name="name"
          placeholder="Write your message here..."
          required
          className="text-input"
        />
        <input
          type="hidden"
          name="_next"
          value="https://conor-portfolio.netlify.app/"
        ></input>
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
