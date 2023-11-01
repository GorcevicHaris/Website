import React from "react";
import "./about.css";
export default function AboutPage() {
  return (
    <div className="containers">
      <div className="myInfo"></div>
      <div className="photo">
        <img style={{ borderRadius: "0" }} src="myself.jpg"></img>
      </div>
    </div>
  );
}
