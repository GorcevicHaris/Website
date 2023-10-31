import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src="palestine.png"></img>
        </Link>
      </div>
      <div className="aboutUs">
        <h1>About</h1>
      </div>
    </div>
  );
}

export default Header;
