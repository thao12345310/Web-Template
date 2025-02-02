import React from "react";
import "../assets/Login.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form action="" method="">
        <div className="container">
          <label htmlFor="uname">
            <b>Username </b>
          </label>
          <input
            type="text"
            name="uname"
            placeholder="Enter Username"
            required
          />
          <br />
          <label htmlFor="psw">
            <b>Password </b>
          </label>
          <input type="text" name="psw" placeholder="Enter Password" required />
          <br />
          <button type="submit">Login</button>
          <br />
          <label htmlFor="">
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}
