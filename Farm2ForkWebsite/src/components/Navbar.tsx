import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src="/images/logo.png" className="logo" />
        </div>
        <input
          type="email"
          className="form-control"
          id="temp-email"
          aria-describedby="emailHelp"
          placeholder="Search"
        />
        <div className="logo-container">
          <Link to="/login">
            <img src="/icons/recommend.png" className="logo-right" />
          </Link>
          <img src="/icons/true.png" className="logo-right" />
          <img src="/icons/user.png" className="logo-right" />
          <img src="/icons/view.png" className="logo-right" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
