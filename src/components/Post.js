import React from "react";
import "./post.css";
import { useNavigate } from "react-router-dom";
export default function Post({ config }) {
  const navigate = useNavigate();

  console.log(config.description);
  console.log(config.title);

  return (
    <div
      onClick={() => navigate(`/post/${config.title}`, { state: { config } })}
      className="card"
    >
      <h1>{config.title}</h1>
      {/* <h1>{config.description}</h1> */}

      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
}
