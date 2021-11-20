import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header container">
      <span className="logo">
      <Link to="/">DK Network</Link>
      </span>
      <span className="side-bar">
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </span>
    </div>
  );
};

export default Header;
