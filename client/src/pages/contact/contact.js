import React from "react";
import "./contact.css";
import { useState } from "react";
import userApi from "../../apis/userApi";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  const [submitMsg, setSubmitMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userApi().post("/contact/submit", form);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
      });
      console.log(data);
      setSubmitMsg("Great! we will get back to you soon.");
    } catch (err) {
      console.log(err.message);
      setSubmitMsg(err.response.data || err.message);
    }
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="row-header">
          <h1>Contact Us! &nbsp;</h1>
          <br></br>
          <h3>Fill out the form below to learn more!</h3>
        </div>
        <div className="row-body">
          <form onSubmit={handleSubmit} action="#">
            <ul>
              <li>
                <p className="left">
                  <label htmlFor="first_name">First name:</label>
                  <br></br>
                  <input
                    id="firstName"
                    onChange={handleChange}
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={form.firstName}
                  />
                </p>
                <p className="pull-right">
                  <label htmlFor="last_name">Last name:</label>
                  <br></br>

                  <input
                    id="lastName"
                    onChange={handleChange}
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    value={form.lastName}
                  />
                </p>
              </li>

              <li>
                <p>
                  <label htmlFor="email">
                    Email <span className="req">*</span>
                    <br></br>
                  </label>
                  <input
                    id="email"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                    value={form.email}
                  />
                </p>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li className="comments">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  onChange={handleChange}
                  cols="30"
                  rows="3"
                  name="comments"
                  value={form.comments}
                ></textarea>
                <br></br>
              </li>

              <li className="submit-btn-container">
                <button onClick={handleSubmit} className="form-btn">
                  submit
                </button>
              </li>
            </ul>
            <br></br>
            <div>{submitMsg}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
