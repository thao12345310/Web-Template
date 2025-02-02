import React from "react";
import "../assets/HomePage.css";
import LoginModal from "./LoginModal";
export default function () {
  return (
    <div id="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a className="login" href="#login">
        Login
      </a>
    </div>
  );
}
