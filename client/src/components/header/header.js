import { NavLink, useHistory, redirect } from "react-router-dom";
// import { useHistory, Redirect } from "react-router-dom";
import "./header.css";
import { useUser } from "../../context/User.context.js";
import Logo from "../logo/logo.js";
import { Hamburger } from "./hamburgerMenu.js";
import userApi from "../../apis/userApi.js";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  const history = useHistory();

  console.log(currentUser);

  // useEffect(() => {
  //   if (currentUser) {
  //     setRedirect(true);
  //   }
  // }, [currentUser]);

  const handleClick = () => {
    // if (Login === "Logout") {}

    // history.push("/login");
    // return <Redirect to="/login" />;
    // console.log(redirect);

    // if (redirect) {
    //   return <Redirect to="/login" />;
    //   setLogin("Login");
    //   console.log("login");
    // }

    logOut();
  };

  const logOut = async () => {
    console.log("logout-client");
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
          <li className="link" style={{ color: "brown" }}>
            {currentUser && "Welcome, " + currentUser.name}
          </li>
          <li>
            {currentUser ? (
              <NavLink
                onClick={() => {
                  logOut();
                }}
                to="/login"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="link">
                <div className="login-link">
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src="/user.png"
                  ></img>
                  <span>Login</span>
                </div>
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
}
