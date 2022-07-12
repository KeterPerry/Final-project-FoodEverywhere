import "./hamburgerMenu.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo/logo.js";

export function Hamburger() {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="menu-items">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
