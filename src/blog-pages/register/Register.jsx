import React from "react";
import { Link } from "react-router-dom";
import "../register/register.css";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">
          <Link to={"/login"}>Register</Link>
        </button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
};

export default Register;
