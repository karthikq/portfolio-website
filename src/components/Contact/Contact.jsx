/** @format */

import React, { useState } from "react";
import "./contact.styles.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const devEnv = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://kjsbackend.herokuapp.com";
  } else {
    return "http://localhost:5000";
  }
};

const Contact = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(devEnv());
    const toastId = toast.loading("Sending message");
    const res = await axios.post(devEnv() + "/contact", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
   toast.success("Thank you", {
        id: toastId,
      });
     
      setTimeout(() => {
        setUserData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      }, 1200);
    
  };
  return (
    <div className="contact-container" id="contact">
      <h5 className="header-tag">Contact</h5>
      <div className="contact-contents">
        <form onSubmit={handleSubmit}>
          <div className="contact-name">
            <input
              type="text"
              required
              placeholder="First name"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
            />
            <input
              type="text"
              required
              placeholder="Last name"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
            />
          </div>
          <div className="contact-details">
            <input
              required
              type="email"
              placeholder="Your email address"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <textarea
              required
              placeholder="Your message"
              value={userData.message}
              cols="30"
              minLength={5}
              rows="10"
              onChange={(e) =>
                setUserData({ ...userData, message: e.target.value })
              }></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            padding: "10px",
          },
        }}
      />
    </div>
  );
};

export default Contact;
