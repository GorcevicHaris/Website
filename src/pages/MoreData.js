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
        {product.urlToImage ? (
          <div style={{ zIndex: "10" }} className="image">
            <img
              style={{ borderRadius: "0", zIndex: "10" }}
              className="slika"
              src={product.urlToImage}
            ></img>
          </div>
        ) : (
          ""
        )}
        <div className="data">
          <h1 style={{ color: "black", zIndex: "0" }}> {product.author}</h1>
          <h1 style={{ color: "green", zIndex: "0" }}>{product.title}</h1>
          <h1 style={{ color: "red", zIndex: "0" }}> {product.description}</h1>
        </div>
      </div>
      <h1>
        <a
          style={{
            color: "lightgreen",
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
