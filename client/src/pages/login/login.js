import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./login.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";
// import Button from "../../components/button/Button";
import { io } from "socket.io-client";

function Login() {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken, Login, setLogin } = useUser();
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  // console.log(socket);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form.password);
  useEffect(
    () => {
      if (currentUser) {
        setRedirect(true);
      }
      // setupSocket();
    },
    [currentUser]
    // [socket]
  );

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      return setError("Password length must be at least 6");
    }
    try {
      const { data } = await userApi().post("/users/login", form);
      console.log(data);
      setCurrentUser(data.user);
      setToken(data.token);
      setForm({
        email: "",
        password: "",
      });
      localStorage.setItem("Token", data.token);
      setError("");
      setLogin("Logout");
      history.push("/home");
    } catch (err) {
      console.log(err.message);
      // setError(err.response.data || err.message);
      setError(err.message);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  // const setupSocket = () => {
  //   const token = localStorage.getItem("Token");
  //   if (token && !socket) {
  //     console.log("setupSocket");
  //     const newSocket = io("http://localhost:4000", {
  //       query: {
  //         token: localStorage.getItem("Token"),
  //       },
  //     });
  //     console.log(newSocket);
  //     newSocket.connect();

  //     // newSocket.on("disconnect", () => {
  //     //   setSocket(null);
  //     //   // setTimeout(setupSocket(), 3000);
  //     //   console.log("disconnected");
  //     // });

  //     newSocket.on("connect", () => {
  //       console.log("connected");
  //     });

  //     setSocket(newSocket);
  //   }
  // };

  return (
    <div className="login-container">
      <div className="login">
        <h1 className="login-title">Login</h1>
        <form className="form1-body" onSubmit={handleSubmit}>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <div className="email">
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              required
            />
          </div>
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <div className="password">
            <input
              onChange={handleChange}
              value={form.password}
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="login-button">
            <button btnText="Login" onBtnClicked={handleSubmit}>
              Login
            </button>
          </div>
          <div className="error">{error}</div>
        </form>
      </div>
    </div>
  );
}
export default Login;
