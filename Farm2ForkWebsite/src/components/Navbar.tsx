import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/images/logo.png" className="logo" />
        </div>
        <input
          type="email"
          className="form-control"
          id="temp-email"
          aria-describedby="emailHelp"
          placeholder="Search"
        />
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
