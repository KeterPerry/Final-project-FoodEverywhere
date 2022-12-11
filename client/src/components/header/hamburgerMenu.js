import "./hamburgerMenu.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo/logo.js";
import { useUser } from "../../context/User.context.js";

export function Hamburger() {
  const { Login, setLogin, token, setToken, setCurrentUser } = useUser();
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <Logo />
            <li>
              {" "}
              <NavLink className="link" exact to="/home">
                Home Page
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/About" className="link">
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/quiz" className="link">
                Quiz
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard" className="link">
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
              <NavLink className="link" exact to="/">
                {Login}
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
