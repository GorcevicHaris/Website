import React from "react";
import "./post.css";
import { useNavigate } from "react-router-dom";
export default function Post({ config }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/post/${config.source.name}`)}
      className="card"
    >
      <h1>{config}</h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
}
