import React from "react";
import "./post.css";
import { useNavigate } from "react-router-dom";
export default function Post({ data }) {
  const navigate = useNavigate();

  console.log(data.description);
  console.log(data.title);
  console.log(data.urlToImage);
  console.log(data);

  return (
    <div
      onClick={() => navigate(`/post/${data.title}`, { state: { data } })}
      className="card"
    >
      {data.title ? <h1>{data.title}</h1> : ""}
      {data.description ? <h1>{data.description}</h1> : <h1>asusdh</h1>}
      {/*  */}
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
}
