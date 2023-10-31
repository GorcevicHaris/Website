import React from "react";
import "./data.css";
import { useLocation } from "react-router-dom";
export default function MoreData() {
  const { state } = useLocation();
  const { product } = state;
  console.log(state);
  return (
    <div className="container">
      {state.title}

      <h1>asldijasid</h1>
    </div>
  );
}
