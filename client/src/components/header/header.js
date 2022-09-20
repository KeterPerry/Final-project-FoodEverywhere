import { NavLink, useHistory, Redirect } from "react-router-dom";
import "./header.css";
import { useUser } from "../../context/User.context.js";
import Logo from "../logo/logo.js";
import { Hamburger } from "./hamburgerMenu.js";
import userApi from "../../apis/userApi.js";
import { useEffect } from "react";

export default function Header() {
  const {
    Login,
    setLogin,
    token,
    setToken,
    setCurrentUser,
    currentUser,
    redirect,
    setRedirect,
  } = useUser();
  // const history = useHistory();

  // useEffect(() => {
  //   if (currentUser) {
  //     setRedirect(true);
  //   }
  // }, [currentUser]);

  const handleClick = () => {
    // if (Login === "Logout")
    //   console.log("brrrrr");
    setLogin("Login");
    // history.push("/");

    // if (redirect) {
    //   return <Redirect to="/" />;
    // }

    logOut();
  };

  const logOut = async () => {
    try {
      const options = {
        headers: { Authorization: token },
      };
      await userApi(options).post("/users/logout");
    } catch (err) {
      console.log(err);
    } finally {
      setCurrentUser(null);
      setToken(null);
      localStorage.removeItem("Token");
    }
  };

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
          <li>
            {" "}
            <NavLink to="/About" className="link">
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/games" className="link">
              Games
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/messanger" className="link">
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
            <NavLink to="/login" onClick={handleClick} className="link">
              {Login}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
}
