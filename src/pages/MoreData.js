import React from "react";
import "./data.css";
import { useLocation } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
export default function MoreData() {
  const { state } = useLocation();
  const product = state.data;
  console.log(product);
  return (
    <div className="container">
      {/* <h1 style={{ fontSize: "30px" }}>About Us</h1> */}
      <div className="about">
        <div className="image">
          <img className="slika" src={product.urlToImage}></img>
        </div>
        <div className="data">
          <h1 style={{ color: "black" }}> {product.author}</h1>
          <h1>{product.title}</h1>
          <h1 style={{ color: "red" }}> {product.description}</h1>
        </div>
      </div>
      <h1>
        <a
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontFamily: "revert-layer",
          }}
          target="_blank"
          href={product.url}
        >
          Source
        </a>
      </h1>
    </div>
  );
}
