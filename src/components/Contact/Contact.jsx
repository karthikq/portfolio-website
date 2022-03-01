/** @format */

import React from "react";
import "./contact.styles.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-container">
      <h5 className="header-tag">Contact</h5>
      <div className="contact-contents">
        <form onSubmit={handleSubmit}>
          <div className="contact-name">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="contact-details">
            <textarea placeholder="Message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
