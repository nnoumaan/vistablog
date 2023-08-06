import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">
          <Link to="/">Login</Link>
        </button>
      </form>
      <Link to={"/register"}>
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
