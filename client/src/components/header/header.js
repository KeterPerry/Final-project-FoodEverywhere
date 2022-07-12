// import React from "react";
// import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
// import { myContext } from "../context/myContext";
import Logo from "../logo/logo.js";
import { Hamburger } from "./hamburgerMenu.js";

export default function Header() {
  return (
    <div>
      <div className="navbarC">
        <ul className="navbarL">
          <Logo />
          <li>
            {" "}
            <NavLink className="link" exact to="/">
              Home Page
            </NavLink>
          </li>
          {/* <li>
            {" "}
            <NavLink to="/About" className="link">
              About
            </NavLink>
          </li> */}
          <li>
            {" "}
            <NavLink to="/messenger" className="link">
              Messenger
            </NavLink>
          </li>
        </ul>
        <br></br>

        <ul className="navbarR">
          <li>
            {" "}
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/register" className="link">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className="link" exact to="/login">
              Login
            </NavLink>
          </li>
          <li>
            {" "}
            <a
              rel="noreferrer"
              href="https://www.facebook.com/home.php"
              target="_blank"
            >
              {" "}
              <img width="10rem" alt="#" src="./assets/facebook.png"></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
}
