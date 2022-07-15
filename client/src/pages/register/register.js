import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import "./register.css";
import { useHistory, Redirect } from "react-router-dom";
import { useUser } from "../../context/User.context";

function Register() {
  const history = useHistory();
  const { currentUser, setCurrentUser, setToken } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm !== form.password) {
      return setError("Passwords do not match!");
    }
    if (form.password.length < 6) {
      return setError("Password length must be at least 6");
    }

    try {
      const { data } = await userApi().post("/users/signUp", form);
      console.log(data);
      setCurrentUser(data.newUser);
      setToken(data.token);
      setForm({
        email: "",
        password: "",
        name: "",
      });
      localStorage.setItem("Token", data.token);

      setError("");
      history.push("/");
    } catch (err) {
      console.log(err);
      if (err.response.data.indexOf("E11000 duplicate key") !== -1) {
        setError("Email adress is already in use!");
      } else {
        setError(err.message);
      }
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <form className="form-body">
        <h1>Register</h1>
        <label htmlFor="email" className="form__label">
          Email{" "}
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
          Password{" "}
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
        <label id="confirm" htmlFor="confirmPassword" className="form__label">
          Confirm Password
        </label>
        <div className="password">
          <input
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <label htmlFor="name" className="form__label">
          Name{" "}
        </label>
        <div className="username">
          <input
            onChange={handleChange}
            value={form.name}
            className="form__input"
            type="text"
            id="name"
            placeholder="Name "
            required
          />
        </div>
        {/* <label htmlFor="savedLanguage" className="form__label">
          Language{" "}
        </label>
        <div className="language">
          <select
            onChange={handleChange}
            value={form.savedLanguage}
            id="savedLanguage"
            name="language"
          >
            <option disabled>Choose Prefered Language</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
          </select> */}
        <div className="register-button">
          <button onClick={handleSubmit}>Register</button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
export default Register;
