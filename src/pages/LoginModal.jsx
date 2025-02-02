import React from "react";
import "../assets/LoginModal.css";

export default function Login() {
  return (
    <div>
      <button
        onClick={() => {
          document.getElementById("id01").style.display = "block";
        }}
      >
        Login
      </button>

      <div id="id01" className="modal">
        <form className="modal-content animate">
          <div className="container">
            <span
              onClick={() => {
                document.getElementById("id01").style.display = "none";
              }}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>

            <div className="container">
              <label htmlFor="uname">
                <b>Username </b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Password </b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>

              <label htmlFor="">
                <input type="checkbox" checked="checked" name="remember" />
                Remember me
              </label>
            </div>

            <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
              <button
                type="button"
                onclick={() => {
                  document.getElementById("id01").style.display = "none";
                }}
                class="cancelbtn"
              >
                Cancel
              </button>
              <span class="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
