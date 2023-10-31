import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo">
        <img src="palestine.png"></img>
      </div>
      <div className="aboutUs">
        <h1>About</h1>
      </div>
    </div>
  );
}

export default Header;
